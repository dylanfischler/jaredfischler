# ************************************************************
# Sequel Pro SQL dump
# Version 4500
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 10.1.17-MariaDB)
# Database: jaredfischler
# Generation Time: 2016-10-01 19:38:34 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table category
# ------------------------------------------------------------

DROP TABLE IF EXISTS `category`;

CREATE TABLE `category` (
  `category_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL DEFAULT '',
  `image_path` varchar(260) NOT NULL DEFAULT '',
  `route` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table project
# ------------------------------------------------------------

DROP TABLE IF EXISTS `project`;

CREATE TABLE `project` (
  `project_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL DEFAULT '',
  `id` varchar(50) NOT NULL DEFAULT '',
  `cat_id` int(10) unsigned NOT NULL,
  `desc` text NOT NULL,
  `html` blob,
  `head_type` int(10) unsigned NOT NULL,
  PRIMARY KEY (`project_id`),
  KEY `cat_id` (`cat_id`),
  KEY `head_type` (`head_type`),
  CONSTRAINT `project_ibfk_1` FOREIGN KEY (`cat_id`) REFERENCES `category` (`category_id`),
  CONSTRAINT `project_ibfk_2` FOREIGN KEY (`head_type`) REFERENCES `project_head_type` (`project_head_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table project_add_image
# ------------------------------------------------------------

DROP TABLE IF EXISTS `project_add_image`;

CREATE TABLE `project_add_image` (
  `project_add_image_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `image_path` varchar(260) NOT NULL DEFAULT '',
  PRIMARY KEY (`project_add_image_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table project_head_type
# ------------------------------------------------------------

DROP TABLE IF EXISTS `project_head_type`;

CREATE TABLE `project_head_type` (
  `project_head_type_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(15) NOT NULL DEFAULT '',
  PRIMARY KEY (`project_head_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table user_contact
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user_contact`;

CREATE TABLE `user_contact` (
  `user_contact_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL DEFAULT '',
  `link` varchar(255) NOT NULL DEFAULT '',
  `link_title` varchar(255) NOT NULL DEFAULT '',
  `user_id` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`user_contact_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_contact_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table user_resume
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user_resume`;

CREATE TABLE `user_resume` (
  `user_resume_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '',
  `content` varchar(255) NOT NULL DEFAULT '',
  `user_id` int(11) unsigned NOT NULL,
  PRIMARY KEY (`user_resume_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_resume_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `user_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `intro` varchar(255) NOT NULL DEFAULT '',
  `subintro` varchar(255) DEFAULT NULL,
  `video_reel` blob,
  `school` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
