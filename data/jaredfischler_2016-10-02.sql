# ************************************************************
# Sequel Pro SQL dump
# Version 4500
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 10.1.17-MariaDB)
# Database: jaredfischler
# Generation Time: 2016-10-02 23:51:41 +0000
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

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;

INSERT INTO `category` (`category_id`, `title`, `image_path`, `route`)
VALUES
	(1,'3D Modeling','includes/categories/3DModel.JPG','3dmodeling'),
	(2,'Animation','includes/categories/Animation.JPG','animation'),
	(3,'Cinematography','includes/categories/Cinematography.JPG','cinematography'),
	(4,'Digital Art','includes/categories/Digital_Art.JPG','digitalart'),
	(5,'Graphic Design','includes/categories/Graphic_design.png','graphicdesign'),
	(6,'Sketches','includes/categories/Sketches.jpg','sketches');

/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;


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

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;

INSERT INTO `project` (`project_id`, `title`, `id`, `cat_id`, `desc`, `html`, `head_type`)
VALUES
	(98,'Floating Islands','Island',1,'Work in progress models created for a personal project. Sculpted in Zbrush. Rendered in Cinema4d',NULL,1),
	(99,'Boston Children\'s Hospital: Unity Optimized Game A','Assets',1,'Assets created in Zbrush and Cinema4d for Boston Children\'s Hospital\'s Unity-based Interactive Media Wall',NULL,1),
	(100,'Pirate Assets','Pirate',1,'Assets created in Zbrush and 3dCoat for a future character model',NULL,1),
	(101,'Child\'s Room','Child',1,'A child\'s room made in Zbrush, 3dCoat, and Cinema4d',NULL,1),
	(102,'Boston Children\'s Hospital: Character Models','BCH',1,'Character models created for Boston Children\'s Hospital\'s Interactive Media Wall',NULL,1),
	(103,'Remì the Raptor','Raptor',1,'A velociraptor sculpted in Zbrush and painted in 3dCoat',NULL,1),
	(104,'Living Room','LivingRoom',1,'A Final Project for my Lighting/Rendering class. The first untextured model was provided by my professor.All lighting and texturing as well as the additional modeled assets were created in Cinema4d.',NULL,1),
	(105,'Work Bench','WorkBench',1,'A work bench procedurally textured and rendered in Cinema4d. All models were provided except for the brick wall which I modeled and textured in Cinema4d.',NULL,1),
	(106,'Vintage Bike (Work in Progress)','vintagebike',1,'Work in progress render of a Vintage Bike. Modeled, textured, and rendered in Cinema4d.',NULL,1),
	(107,'Break Room','breakroom',1,'An Office Break Room created in Cinema4d. Responsible for Lighting, Rendering, and Modeling all but the couch model, the coffeemaker model, and the snack machine.',NULL,1),
	(108,'Low-Poly Room','Low-poly',1,'A low-poly style model of my bedroom.',NULL,1),
	(109,'Low-Poly Landscape II','Land-PolyII',1,'Exploration of low-poly environments.',NULL,1),
	(110,'Low-Poly Landscape','Land-Poly',1,'Exploration of low-poly environments.',NULL,1),
	(111,'Concept Designs for The Voyage','concept_design_for_the_voyage',1,'In preparation for a new chapter of The Voyage, I have started to conceptualize what creatures may populate the environments and what those environments may look like.',NULL,1),
	(112,'Concept Design: Spacecraft','concept_design_spacecraft',1,'A spacecraft concept for The Voyage',NULL,1),
	(113,'Plate Camera','plate_camera',1,'A Plate Camera. Modeled, textured, and lit in Cinema 4d.',NULL,1),
	(114,'Experiments','experiments',1,'Results from various experiments in Cinema4d.',NULL,1),
	(115,'Opthalma','OP',2,'A video game trailer',X'3C696672616D65207372632768747470733A2F2F706C617965722E76696D656F2E636F6D2F766964656F2F313439383731393037272077696474683D273132383027206865696768743D2737323027206672616D65626F726465723D273027207765626B6974616C6C6F7766756C6C73637265656E206D6F7A616C6C6F7766756C6C73637265656E20616C6C6F7766756C6C73637265656E3E3C2F696672616D653E203C703E3C6120687265663D2768747470733A2F2F76696D656F2E636F6D2F313439383731393037273E4F70687468616C6D61202D204120547261696C65723C2F613E2066726F6D203C6120687265663D2768747470733A2F2F76696D656F2E636F6D2F6A6172656466697363686C6572273E4A617265642046697363686C65723C2F613E206F6E203C6120687265663D2768747470733A2F2F76696D656F2E636F6D273E56696D656F3C2F613E2E3C2F703E',2),
	(116,'Minion Character','minion',2,'Character concept design animated in motion capture.',X'3C696672616D652077696474683D273132383027206865696768743D2737323027207372633D2768747470733A2F2F7777772E796F75747562652E636F6D2F656D6265642F6F6B476D315F516D6D646B3F72656C3D3027206672616D65626F726465723D27302720616C6C6F7766756C6C73637265656E3E3C2F696672616D653E',2),
	(117,'Flight','the_Flight',2,'Fly through a low-poly land',X'3C696672616D652077696474683D273132383027206865696768743D2737323027207372633D2768747470733A2F2F7777772E796F75747562652E636F6D2F656D6265642F517833677953715A6949673F72656C3D3027206672616D65626F726465723D27302720616C6C6F7766756C6C73637265656E3E3C2F696672616D653E',2),
	(118,'The Voyage | Ch.1: Voyage Begins','the_voyage_ch1_voyage_begins',2,'The start of a journey. Music -- Chord Left - Agnes Obel',X'3C696672616D652077696474683D273132383027206865696768743D2737323027207372633D272F2F7777772E796F75747562652E636F6D2F656D6265642F546F38775A7742522D78673F72656C3D3026616D703B73686F77696E666F3D3027206672616D65626F726465723D27302720616C6C6F7766756C6C73637265656E3E3C2F696672616D653E',2),
	(119,'Why Buy Local?','why_buy_local',2,'My first AfterEffects Animation: A motion graphic PSA about locally grown food.',X'3C696672616D65207372633D272F2F706C617965722E76696D656F2E636F6D2F766964656F2F3130363332343933333F7469746C653D3026616D703B62796C696E653D3026616D703B706F7274726169743D3026616D703B636F6C6F723D666666666666272077696474683D273132383027206865696768743D2737323027206672616D65626F726465723D273027207765626B6974616C6C6F7766756C6C73637265656E206D6F7A616C6C6F7766756C6C73637265656E20616C6C6F7766756C6C73637265656E3E3C2F696672616D653E',2),
	(120,'Dream Lapse','dream_lapse',2,'Experimenting in After-effects with the help of Blockhead. Track: Triptych Pt.3 - Blockhead, Music by Cavelight',X'3C696672616D65207372633D272F2F706C617965722E76696D656F2E636F6D2F766964656F2F39303434303235393F7469746C653D3026616D703B62796C696E653D3026616D703B706F7274726169743D3026616D703B636F6C6F723D666666666666272077696474683D273132383027206865696768743D2737323027206672616D65626F726465723D273027207765626B6974616C6C6F7766756C6C73637265656E206D6F7A616C6C6F7766756C6C73637265656E20616C6C6F7766756C6C73637265656E3E3C2F696672616D653E',2),
	(121,'Birth - The Infant\'s Discovery of Self','birth_the_infants_discovery_of_self',2,'A short piece exploring the process of discovery and awareness of self.',X'3C696672616D65207372633D272F2F706C617965722E76696D656F2E636F6D2F766964656F2F39343637393439323F7469746C653D3026616D703B62796C696E653D3026616D703B706F7274726169743D3026616D703B636F6C6F723D303030272077696474683D2735303027206865696768743D2732383127206672616D65626F726465723D273027207765626B6974616C6C6F7766756C6C73637265656E206D6F7A616C6C6F7766756C6C73637265656E20616C6C6F7766756C6C73637265656E3E3C2F696672616D653E',2),
	(122,'The Cubicle','the_cubicle',2,'An animation about a man named Malcom who discovers an old favorite of his on his computer. More to come!',X'3C696672616D65207372633D272F2F706C617965722E76696D656F2E636F6D2F766964656F2F39343537363238333F7469746C653D3026616D703B62796C696E653D3026616D703B706F7274726169743D3026616D703B636F6C6F723D666666666666272077696474683D273132383027206865696768743D2737323027206672616D65626F726465723D273027207765626B6974616C6C6F7766756C6C73637265656E206D6F7A616C6C6F7766756C6C73637265656E20616C6C6F7766756C6C73637265656E3E3C2F696672616D653E',2),
	(123,'Animation Experiments','animation_experiments',2,'Experimentation in Cinema 4d and AfterEffects.',X'3C696672616D652077696474683D273132383027206865696768743D2737323027207372633D272F2F7777772E796F75747562652E636F6D2F656D6265642F38777533534941665F50493F72656C3D3026616D703B73686F77696E666F3D3027206672616D65626F726465723D27302720616C6C6F7766756C6C73637265656E3E3C2F696672616D653E',2),
	(124,'The Study Montage','the_study_montage',3,'A video montage',X'3C696672616D65207372633D272F2F706C617965722E76696D656F2E636F6D2F766964656F2F3130383935393232373F7469746C653D3026616D703B62796C696E653D3026616D703B706F7274726169743D3026616D703B636F6C6F723D66666666666627207769647468273132383027206865696768743D2737323027206672616D65626F726465723D273027207765626B6974616C6C6F7766756C6C73637265656E206D6F7A616C6C6F7766756C6C73637265656E20616C6C6F7766756C6C73637265656E3E3C2F696672616D653E',2),
	(125,'The Forgotten Keys','the_forgotten_keys',3,'A story about a forgotten pair of keys',X'3C696672616D65207372633D272F2F706C617965722E76696D656F2E636F6D2F766964656F2F3130383335333534323F7469746C653D3026616D703B62796C696E653D3026616D703B706F7274726169743D3026616D703B636F6C6F723D666666666666272077696474683D273132383027206865696768743D2737323027206672616D65626F726465723D273027207765626B6974616C6C6F7766756C6C73637265656E206D6F7A616C6C6F7766756C6C73637265656E20616C6C6F7766756C6C73637265656E3E3C2F696672616D653E',2),
	(126,'The Date','the_date',3,'An Experiment in continuity editing',X'3C696672616D65207372633D272F2F706C617965722E76696D656F2E636F6D2F766964656F2F3130383239383034373F7469746C653D3026616D703B62796C696E653D3026616D703B706F7274726169743D3026616D703B636F6C6F723D666666666666272077696474683D273132383027206865696768743D2737323027206672616D65626F726465723D273027207765626B6974616C6C6F7766756C6C73637265656E206D6F7A616C6C6F7766756C6C73637265656E20616C6C6F7766756C6C73637265656E3E3C2F696672616D653E',2),
	(127,'City Scene','city_scene',4,'A city scene composited and painted using Adobe Photoshop. Pictures used are not owned by me.',NULL,1),
	(128,'Picture Book Illustration','picture_book',4,'Digital illustration made to fit a picture book style.',NULL,1),
	(129,'Palace - Alternative Concept','palace_alternative_concept',4,'An alternative concept for the antagonist\'s palace. Designed for a Broadway set. ',NULL,1),
	(130,'Palace - Concept 3','palace_concept3',4,'The final concept for the antagonist\'s palace. Designed for a Broadway set.',NULL,1),
	(131,'Palace - Concept 2','palace_concept2',4,'An earlier iteration of the antagonist\'s palace. Designed for a Broadway set.',NULL,1),
	(132,'Palace - Original Concept','palace_concept1',4,'The original concept for the antagonist\'s palace. Designed for a Broadway set.',NULL,1),
	(133,'Oasis - Original Concept','oasis_concept1',4,'The original concept for an oasis scene. Designed for a Broadway set.',NULL,1),
	(134,'Oasis - Concept 2','oasis_concept2',4,'The final concept design for an oasis scene. Designed for a Broadway set.',NULL,1),
	(135,'Font Design - Dystopian','font_design_dystopian',5,'A font whose chaotic tendencies are reminiscent of dystopian literature.',NULL,1),
	(136,'Helvetica Poster Series','helvetica_poster_series',5,'A poster series inspired by the movie \"Helvetica\".',NULL,1),
	(137,'The Puppet','the_puppet',6,'',NULL,3),
	(138,'Mime','mime',6,'',NULL,3),
	(139,'Inception Movie Poster','inception_movie_poster',6,'',NULL,3),
	(140,'Donnie Darko','donnie_darko',6,'',NULL,3),
	(141,'Anthony Hopkins','anthony_hopkins',6,'',NULL,3),
	(142,'Clint Eastwood','clint_eastwood',6,'',NULL,3),
	(143,'Man in Suit','man_in_suit',6,'',NULL,3),
	(144,'Character Sketches','character_sketches',6,'',NULL,3);

/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table project_add_html
# ------------------------------------------------------------

DROP TABLE IF EXISTS `project_add_html`;

CREATE TABLE `project_add_html` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `html` blob NOT NULL,
  `project_id` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `project_id` (`project_id`),
  CONSTRAINT `project_add_html_ibfk_1` FOREIGN KEY (`project_id`) REFERENCES `project` (`project_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `project_add_html` WRITE;
/*!40000 ALTER TABLE `project_add_html` DISABLE KEYS */;

INSERT INTO `project_add_html` (`id`, `html`, `project_id`)
VALUES
	(1,X'3C696672616D652077696474683D273132383027206865696768743D2737323027207372633D272F2F7777772E796F75747562652E636F6D2F656D6265642F6F4D4A344B73427A5755413F72656C3D3026616D703B73686F77696E666F3D3027206672616D65626F726465723D27302720616C6C6F7766756C6C73637265656E3E3C2F696672616D653E',123),
	(2,X'3C696672616D652077696474683D273132383027206865696768743D2737323027207372633D272F2F7777772E796F75747562652E636F6D2F656D6265642F414A5241424D57376B2D6B3F72656C3D3026616D703B73686F77696E666F3D3027206672616D65626F726465723D27302720616C6C6F7766756C6C73637265656E3E3C2F696672616D653E',123);

/*!40000 ALTER TABLE `project_add_html` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table project_add_image
# ------------------------------------------------------------

DROP TABLE IF EXISTS `project_add_image`;

CREATE TABLE `project_add_image` (
  `project_add_image_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `image_path` varchar(260) NOT NULL DEFAULT '',
  `project_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`project_add_image_id`),
  KEY `project_id` (`project_id`),
  CONSTRAINT `project_add_image_ibfk_1` FOREIGN KEY (`project_id`) REFERENCES `project` (`project_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `project_add_image` WRITE;
/*!40000 ALTER TABLE `project_add_image` DISABLE KEYS */;

INSERT INTO `project_add_image` (`project_add_image_id`, `image_path`, `project_id`)
VALUES
	(19,'/includes/project_images/Island1',98),
	(20,'/includes/project_images/Island2',98),
	(21,'/includes/project_images/Assets1',99),
	(22,'/includes/project_images/Assets2',99),
	(23,'/includes/project_images/Pirate1',100),
	(24,'/includes/project_images/Pirate2',100),
	(25,'/includes/project_images/Child1',101),
	(26,'/includes/project_images/Child2',101),
	(27,'/includes/project_images/BCH1',102),
	(28,'/includes/project_images/BCH2',102),
	(29,'/includes/project_images/Raptor1',103),
	(30,'/includes/project_images/Raptor2',103),
	(31,'/includes/project_images/Raptor3',103),
	(32,'/includes/project_images/LR1',104),
	(33,'/includes/project_images/LR2',104),
	(34,'/includes/project_images/LR3',104),
	(35,'/includes/project_images/LR4',104),
	(36,'/includes/project_images/LR5',104),
	(37,'/includes/project_images/WB1',105),
	(38,'/includes/project_images/WB2',105),
	(39,'/includes/project_images/WB3',105),
	(40,'/includes/project_images/VB2',106),
	(41,'/includes/project_images/VB3',106),
	(42,'/includes/project_images/VB4',106),
	(43,'/includes/project_images/BR1',107),
	(44,'/includes/project_images/BR2',107),
	(45,'/includes/project_images/BR3',107),
	(46,'/includes/project_images/BR4',107),
	(47,'/includes/project_images/BR5',107),
	(48,'/includes/project_images/Poly1',108),
	(49,'/includes/project_images/Poly2',108),
	(50,'/includes/project_images/Poly3',108),
	(51,'/includes/project_images/Poly4',108),
	(52,'/includes/project_images/Land-PolyII1',109),
	(53,'/includes/project_images/Land-PolyII2',109),
	(54,'/includes/project_images/LandPoly1',110),
	(55,'/includes/project_images/LandPoly2',110),
	(56,'/includes/project_images/LandPoly3',110),
	(57,'/includes/project_images/ConceptAlternative1',111),
	(58,'/includes/project_images/ConceptAlternative2',111),
	(59,'/includes/project_images/ConceptAlternative3',111),
	(60,'/includes/project_images/ConceptAlternative4',111),
	(61,'/includes/project_images/ConceptAlternative5',111),
	(62,'/includes/project_images/SpacecraftAlternative1',112),
	(63,'/includes/project_images/SpacecraftAlternative2',112),
	(64,'/includes/project_images/CameraAlternative1',113),
	(65,'/includes/project_images/CameraAlternative2',113),
	(66,'/includes/project_images/CameraAlternative3',113),
	(67,'/includes/project_images/CameraAlternative4',113),
	(68,'/includes/project_images/ExperimentAlternative1',114),
	(69,'/includes/project_images/ExperimentAlternative2',114),
	(70,'/includes/project_images/ExperimentAlternative3',114),
	(71,'/includes/project_images/ExperimentAlternative4',114),
	(72,'/includes/project_images/OP1',115),
	(73,'/includes/project_images/OP2',115),
	(74,'/includes/project_images/OP3',115),
	(75,'/includes/project_images/Stick1',116),
	(76,'/includes/project_images/Stick2',116),
	(77,'/includes/project_images/Stick3',116),
	(78,'/includes/project_images/Flight1',117),
	(79,'/includes/project_images/Flight2',117),
	(80,'/includes/project_images/Flight3',117),
	(81,'/includes/project_images/VoyageAlternative1',118),
	(82,'/includes/project_images/VoyageAlternative2',118),
	(83,'/includes/project_images/VoyageAlternative3',118),
	(84,'/includes/project_images/VoyageAlternative4',118),
	(85,'/includes/project_images/VoyageAlternative5',118),
	(86,'/includes/project_images/VoyageAlternative6',118),
	(87,'/includes/project_images/VoyageAlternative7',118),
	(88,'/includes/project_images/VoyageAlternative8',118),
	(89,'/includes/project_images/VoyageAlternative9',118);

/*!40000 ALTER TABLE `project_add_image` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table project_head_type
# ------------------------------------------------------------

DROP TABLE IF EXISTS `project_head_type`;

CREATE TABLE `project_head_type` (
  `project_head_type_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(15) NOT NULL DEFAULT '',
  PRIMARY KEY (`project_head_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `project_head_type` WRITE;
/*!40000 ALTER TABLE `project_head_type` DISABLE KEYS */;

INSERT INTO `project_head_type` (`project_head_type_id`, `type`)
VALUES
	(1,'landscapeImage'),
	(2,'htmlEmbed'),
	(3,'portraitImage');

/*!40000 ALTER TABLE `project_head_type` ENABLE KEYS */;
UNLOCK TABLES;


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

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;

INSERT INTO `user` (`user_id`, `intro`, `subintro`, `video_reel`, `school`)
VALUES
	(1,'I am an artist training in the fields of motion graphics and 3D visualization.','Here is my work.',X'3C696672616D65207372633D2768747470733A2F2F706C617965722E76696D656F2E636F6D2F766964656F2F313439333337373838272077696474683D273132383027206865696768743D2737313927206672616D65626F726465723D273027207765626B6974616C6C6F7766756C6C73637265656E206D6F7A616C6C6F7766756C6C73637265656E20616C6C6F7766756C6C73637265656E3E3C2F696672616D653E203C703E3C6120687265663D2768747470733A2F2F76696D656F2E636F6D2F313439333337373838273E44656D6F205265656C2059656172206F6620323031353C2F613E2066726F6D203C6120687265663D2768747470733A2F2F76696D656F2E636F6D2F6A6172656466697363686C6572273E4A617265642046697363686C65723C2F613E206F6E203C6120687265663D2768747470733A2F2F76696D656F2E636F6D273E56696D656F3C2F613E2E3C2F703E','University of Connecticut');

/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table user_resume_item
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user_resume_item`;

CREATE TABLE `user_resume_item` (
  `user_resume_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '',
  `content` blob NOT NULL,
  `user_id` int(11) unsigned NOT NULL,
  `resume_section_id` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`user_resume_id`),
  KEY `user_id` (`user_id`),
  KEY `resume_section_id` (`resume_section_id`),
  CONSTRAINT `user_resume_item_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `user_resume_item_ibfk_2` FOREIGN KEY (`resume_section_id`) REFERENCES `user_resume_section` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `user_resume_item` WRITE;
/*!40000 ALTER TABLE `user_resume_item` DISABLE KEYS */;

INSERT INTO `user_resume_item` (`user_resume_id`, `title`, `content`, `user_id`, `resume_section_id`)
VALUES
	(6,'Bachelor of Arts',X'3C68343E4469676974616C204D656469612026616D703B2044657369676E3C2F68343E',1,1),
	(7,'Focus',X'3C68343E334420416E696D6174696F6E2026616D703B2056697375616C697A6174696F6E3C2F68343E',1,1),
	(8,'Pixologic',X'3C68343E5A42727573683C2F68343E',1,2),
	(9,'Adobe',X'3C68343E50686F746F73686F702C205072656D696572652C20496C6C7573747261746F722C20496E44657369676E2C20416674657220456666656374733C2F68343E',1,2),
	(10,'AutoDesk',X'3C68343E4D6179613C2F68343E',1,2),
	(11,'Maxon',X'3C68343E43696E656D612034443C2F68343E',1,2),
	(12,'Pilgway Studio',X'3C68343E344420436F61743C2F68343E',1,2),
	(13,'Awards',X'3C68343E4465616E73204C6973742846616C6C20323031332C32303134292C2046696E6520417274732054616C656E74205363686F6C6172736869703C2F68343E',1,1),
	(14,'Relevant Courses',X'3C68343E416E696D6174696F6E204C61622C2044657369676E2050726F636573732C204D6F74696F6E20477261706869637320492C20334420416E696D6174696F6E20492C204D6F76696E6720496D6167652026616D703B2053657175656E63652C203344204D6F64656C696E6720492C20334420416E696D6174696F6E2049492C204C69676874696E672026616D703B2052656E646572696E6720492C20496E74726F64756374696F6E20746F2047616D6520536372697074696E673C2F68343E',1,1),
	(15,'Email me',X'3C68343E3C61207461726765743D225F6E65772220687265663D226D61696C746F3A6A617265642E66697363686C65724075636F6E6E2E656475223E6A617265642E66697363686C65724075636F6E6E2E6564753C2F613E3C2F68343E',1,3),
	(16,'Connect with me',X'3C68343E3C61207461726765743D225F6E65772220687265663D226C696E6B6564696E2E636F6D2F696E2F6A6172656466697363686C6572223E687474703A2F2F7777772E6C696E6B6564696E2E636F6D2F696E2F6A6172656466697363686C65723C2F613E3C2F68343E',1,3),
	(17,'Follow me',X'3C68343E3C61207461726765743D225F6E65772220687265663D22687474703A2F2F7777772E696E7374616772616D2E636F6D2F6A617265645F66697363686C6572223E696E7374616772616D2E636F6D2F6A617265645F66697363686C65723C2F613E3C2F68343E',1,3);

/*!40000 ALTER TABLE `user_resume_item` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table user_resume_section
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user_resume_section`;

CREATE TABLE `user_resume_section` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `user_resume_section` WRITE;
/*!40000 ALTER TABLE `user_resume_section` DISABLE KEYS */;

INSERT INTO `user_resume_section` (`id`, `title`)
VALUES
	(1,'Education'),
	(2,'Skills'),
	(3,'Contact');

/*!40000 ALTER TABLE `user_resume_section` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
