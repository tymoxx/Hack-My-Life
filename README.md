https://github.com/gopolar/Hack-My-Life

# Hack My Life

## About

This project was built for the [Junction May Online Challenge](https://www.reddit.com/r/JunctionCommunity/comments/bld5f1/may_online_challenge_life_hack/). Goal of the challenge was to build an life hack application.

## Description

We strongly believe that for any problem there is a solution. Therefore, if you know the problem you'll be able to find solution for it. But what if you are not aware of the problem? What if you don't know some things can be hacked in order to make you life easier? Why to solve only one problem (life hack), when we could solve them all? ;)

With use of AI visual recognition, solution we built will suggest life hacks for things around you. All you have to do is to take a picture of some object and application will give you suggestion what kind of life hack you can do with it.

Our database of life hacks is accessible via web panel where everybody can register and add their own life hacks. More life hacks we collect there - better suggestions we are able to give and more problems we are able to solve.

## Architecture overview

![](https://github.com/gopolar/Hack-My-Life/blob/master/Assets/hackmylife-architecture.png)

Our solution consist of two parts: web and mobile application. Web application allows users to register and login into the panel where they are able to add new life hacks. Life hack is defined with image, title and tags. Backend is built with use of the AWS technologies, AWS Gateway directs requests to appropriate Lambda service, data is stored in RDS MySQL database and images are uploaded to S3 bucket. Mobile application, with use of AI, makes the image recognition, sends request to the backend with recognised terms and displays the result.

## Hack My Life Preview

Via web users are able to register and login. Adding new life hack is simple, users define image, title and add 5 tags that can be associated with this life hack.

Via mobile application users can recognise object with use of AI and application will find available life hack that matches that object. Feel free to check out following Youtube video to see it in action (click on image to open Youtube):

[![Youtube Video](https://img.youtube.com/vi/5lHLH_O_3w8/0.jpg)](https://www.youtube.com/watch?v=5lHLH_O_3w8 "Youtube Video of Hack My Life application")