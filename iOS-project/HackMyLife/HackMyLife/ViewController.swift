//
//  ViewController.swift
//  HackMyLife
//
//  Created by Goran Vuksic on 07/05/2019.
//  Copyright © 2019 Junction. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    @IBOutlet weak var imageViewHack: UIImageView!
    @IBOutlet weak var labelTitle: UILabel!
    @IBOutlet weak var labelIntro: UILabel!

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }

    @IBAction func buttonAction(_ sender: Any) {
        
        self.labelIntro.alpha = 0.0
        
        let imagePickerController = UIImagePickerController()
        if UIImagePickerController.isSourceTypeAvailable(.camera) {
            imagePickerController.sourceType = .camera
        }
        imagePickerController.delegate = self
        imagePickerController.allowsEditing = true
        present(imagePickerController, animated: true, completion: nil)
    }

    func process(_ image: UIImage) {
        
        guard let pixelBuffer = image.pixelBuffer(width: 299, height: 299) else {
            return
        }
        
        let model = Inceptionv3()
        do {
            let output = try model.prediction(image: pixelBuffer)
            let probabilities = output.classLabelProbs.sorted { $0.value > $1.value }
            if let probability = probabilities.first {
                
                // highest probability
                print(probability.key)
                print(probability.value)
                
                // send data to server

                let json: [String: Any] = ["recognisedobject": probability.key]
                let jsonData = try? JSONSerialization.data(withJSONObject: json)
                
                let url = URL(string: "https://cea56wxysk.execute-api.us-east-1.amazonaws.com/dev/lifehack")!
                var request = URLRequest(url: url)
                request.httpMethod = "POST"
                
                request.httpBody = jsonData
                
                let task = URLSession.shared.dataTask(with: request) { data, response, error in
                    guard let data = data, error == nil else {
                        print(error?.localizedDescription ?? "No data")
                        return
                    }
                    let responseJSON = try? JSONSerialization.jsonObject(with: data, options: [])
                    if let responseJSON = responseJSON as? [String: Any] {
                        if let imgURL = responseJSON["image"] as? String {
                            let url = URL(string: imgURL)
                            let data = try? Data(contentsOf: url!)
                            DispatchQueue.main.async {
                                self.imageViewHack.image = UIImage(data: data!)
                            }
                        }
                        if let hackTitle = responseJSON["hack"] as? String {
                            DispatchQueue.main.async {
                                self.labelTitle.text = hackTitle
                            }
                        }
                    }
                }
                
                task.resume()
                
            }
        } catch {
            print(error.localizedDescription)
        }
    }

}

extension ViewController: UIImagePickerControllerDelegate, UINavigationControllerDelegate {
    
    func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey : Any]) {
        picker.dismiss(animated: true)
        
        guard let image = info[.editedImage] as? UIImage else {
            print("No image found")
            return
        }
        process(image)
        picker.dismiss(animated: true, completion: nil)
    }
    
    func imagePickerControllerDidCancel(_ picker: UIImagePickerController) {
        picker.dismiss(animated: true, completion: nil)
    }

}
