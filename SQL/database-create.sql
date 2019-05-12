CREATE DATABASE `junctionchallengemay` /*!40100 DEFAULT CHARACTER SET latin1 */;

CREATE TABLE `lifehacks` (
  `hackid` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL,
  `imageurl` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `tag1` varchar(255) NOT NULL,
  `tag2` varchar(255) NOT NULL,
  `tag3` varchar(255) NOT NULL,
  `tag4` varchar(255) NOT NULL,
  `tag5` varchar(255) NOT NULL,
  PRIMARY KEY (`hackid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `users` (
  `userid` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  PRIMARY KEY (`userid`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=latin1;
