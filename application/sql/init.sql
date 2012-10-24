-- MySQL dump 10.13  Distrib 5.5.27, for osx10.6 (i386)
--
-- Host: localhost    Database: utangapp_dev
-- ------------------------------------------------------
-- Server version	5.5.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ci_sessions`
--

DROP TABLE IF EXISTS `ci_sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ci_sessions` (
  `session_id` varchar(40) NOT NULL DEFAULT '0',
  `ip_address` varchar(16) NOT NULL DEFAULT '0',
  `user_agent` varchar(120) NOT NULL,
  `last_activity` int(10) unsigned NOT NULL DEFAULT '0',
  `user_data` text NOT NULL,
  PRIMARY KEY (`session_id`),
  KEY `last_activity_idx` (`last_activity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ci_sessions`
--

LOCK TABLES `ci_sessions` WRITE;
/*!40000 ALTER TABLE `ci_sessions` DISABLE KEYS */;
INSERT INTO `ci_sessions` VALUES ('0c60e748695e8cea4936fa22d5cad9f7','127.0.0.1','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_1) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.94 Safari/537.4',1350267850,''),('1b64341039cf7a5693607c1239407288','127.0.0.1','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_1) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.94 Safari/537.4',1350771286,'a:4:{s:9:\"user_data\";s:0:\"\";s:5:\"email\";s:19:\"dhimoet@hotmail.com\";s:2:\"id\";s:1:\"8\";s:7:\"user_id\";s:1:\"8\";}'),('6e95d639dbe96be92318b7ea8b8b7a13','127.0.0.1','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_1) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.94 Safari/537.4',1350268261,'a:6:{s:8:\"identity\";s:19:\"dhimoet@hotmail.com\";s:8:\"username\";s:15:\"Adhika Mahendra\";s:5:\"email\";s:19:\"dhimoet@hotmail.com\";s:7:\"user_id\";s:1:\"8\";s:14:\"old_last_login\";s:10:\"1350268277\";s:17:\"flash:old:message\";s:29:\"<p>Logged In Successfully</p>\";}'),('79761b8d7b9704d6b2c49fbdd19e3c7c','127.0.0.1','Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_1) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.94 Safari/537.4',1350264841,'');
/*!40000 ALTER TABLE `ci_sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facebook_users`
--

DROP TABLE IF EXISTS `facebook_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `facebook_users` (
  `session_id` varchar(40) NOT NULL DEFAULT '0',
  `user_id` varchar(100) NOT NULL DEFAULT 'NULL',
  `token` text NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facebook_users`
--

LOCK TABLES `facebook_users` WRITE;
/*!40000 ALTER TABLE `facebook_users` DISABLE KEYS */;
INSERT INTO `facebook_users` VALUES ('6e95d639dbe96be92318b7ea8b8b7a13','505947125','AAAFnEXnlToEBAMVVzjPllcaxcUmZBgEbAcKL8mUkY5EQkcT0BtpAc2nlEi3kQOcil3FZAGF10geISRjPiZBsSnl5orqnuRnd84C8t932wZDZD');
/*!40000 ALTER TABLE `facebook_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `groups`
--

DROP TABLE IF EXISTS `groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `groups` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `description` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groups`
--

LOCK TABLES `groups` WRITE;
/*!40000 ALTER TABLE `groups` DISABLE KEYS */;
INSERT INTO `groups` VALUES (1,'admin','Administrator'),(2,'members','General User');
/*!40000 ALTER TABLE `groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `laravel_migrations`
--

DROP TABLE IF EXISTS `laravel_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `laravel_migrations` (
  `bundle` varchar(50) NOT NULL,
  `name` varchar(200) NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`bundle`,`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `laravel_migrations`
--

LOCK TABLES `laravel_migrations` WRITE;
/*!40000 ALTER TABLE `laravel_migrations` DISABLE KEYS */;
INSERT INTO `laravel_migrations` VALUES ('application','2012_10_21_161314_create_session_table',1);
/*!40000 ALTER TABLE `laravel_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login_attempts`
--

DROP TABLE IF EXISTS `login_attempts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `login_attempts` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `ip_address` varbinary(16) NOT NULL,
  `login` varchar(100) NOT NULL,
  `time` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_attempts`
--

LOCK TABLES `login_attempts` WRITE;
/*!40000 ALTER TABLE `login_attempts` DISABLE KEYS */;
/*!40000 ALTER TABLE `login_attempts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `notifications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Type` enum('friend_request','rejected','friend','added_transaction','deleted_transaction') NOT NULL DEFAULT 'added_transaction',
  `Timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `SenderId` int(11) NOT NULL,
  `ReceiverId` int(11) NOT NULL,
  `Viewed` int(1) NOT NULL DEFAULT '0',
  `Status` enum('active','inactive') NOT NULL DEFAULT 'active',
  `TransactionId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
INSERT INTO `notifications` VALUES (30,'friend_request','2012-08-14 03:17:40',2,3,1,'inactive',NULL),(31,'friend','2012-08-14 03:18:13',3,2,1,'inactive',NULL),(32,'friend_request','2012-08-14 03:20:27',2,4,1,'inactive',NULL),(33,'rejected','2012-08-14 03:20:54',4,2,1,'inactive',NULL),(34,'friend_request','2012-08-14 23:56:37',2,4,1,'inactive',NULL),(35,'friend','2012-08-14 23:56:48',4,2,1,'inactive',NULL),(36,'added_transaction','2012-08-15 00:30:00',2,3,1,'active',NULL),(37,'added_transaction','2012-08-15 00:36:09',2,3,1,'active',NULL),(38,'added_transaction','2012-08-15 00:48:07',3,2,1,'',NULL),(39,'added_transaction','2012-08-15 00:55:01',3,2,1,'active',15),(40,'friend_request','2012-08-15 03:02:49',8,9,0,'active',NULL);
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sessions` (
  `id` varchar(40) NOT NULL,
  `last_activity` int(11) NOT NULL,
  `data` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('rryN0w4fDyvHJoeiHjTOF25Kw8ltXuG02tPS9WmC',1350951473,'a:3:{s:5:\":new:\";a:0:{}s:5:\":old:\";a:0:{}s:10:\"csrf_token\";s:40:\"3EGfDqhzTryMo2dttXSEcadQ0PsgI4cCAYJaTV9b\";}');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transactions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Borrower` int(11) NOT NULL,
  `Lender` int(11) NOT NULL,
  `Amount` double NOT NULL COMMENT 'In CAD',
  `Timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Title` varchar(30) NOT NULL,
  `Description` varchar(255) NOT NULL,
  `Reporter` int(11) NOT NULL,
  `Status` enum('active','deleted') NOT NULL DEFAULT 'active',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
INSERT INTO `transactions` VALUES (9,3,2,100,'2012-08-15 00:16:46','Test','Test',2,'active'),(10,2,4,123.123,'2012-08-15 00:19:09','Test','Test',2,'active'),(11,2,3,123.123,'2012-08-15 00:19:39','Test','Test again',2,'active'),(12,2,3,123123,'2012-08-15 00:30:00','Test','Testestst',2,'active'),(13,3,2,123123.567,'2012-08-15 00:36:09','Test','test',2,'active'),(14,2,3,123.123,'2012-08-15 00:48:07','Test','Test',3,'active'),(15,3,2,123123,'2012-08-15 00:55:01','Test','Test',3,'active');
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userrelationships`
--

DROP TABLE IF EXISTS `userrelationships`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `userrelationships` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `UserID1` int(11) NOT NULL COMMENT 'Friend requests must be from this column',
  `UserID2` int(11) NOT NULL,
  `Type` enum('friend','blocked','friend_request','rejected') NOT NULL DEFAULT 'friend_request',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userrelationships`
--

LOCK TABLES `userrelationships` WRITE;
/*!40000 ALTER TABLE `userrelationships` DISABLE KEYS */;
INSERT INTO `userrelationships` VALUES (26,2,3,'friend'),(27,2,4,'friend'),(28,2,4,'friend'),(29,8,9,'friend_request');
/*!40000 ALTER TABLE `userrelationships` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `ip_address` varbinary(16) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(40) NOT NULL,
  `salt` varchar(40) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `activation_code` varchar(40) DEFAULT NULL,
  `forgotten_password_code` varchar(40) DEFAULT NULL,
  `forgotten_password_time` int(11) unsigned DEFAULT NULL,
  `remember_code` varchar(40) DEFAULT NULL,
  `created_on` int(11) unsigned NOT NULL,
  `last_login` int(11) unsigned DEFAULT NULL,
  `active` tinyint(1) unsigned DEFAULT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `company` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `facebook_user_id` varchar(100) DEFAULT NULL,
  `facebook_username` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'\0\0','administrator','59beecdf7fc966e2f17fd8f65a4a9aeb09d4a3d4','9462e8eee0','admin@admin.com','',NULL,NULL,NULL,1268889823,1344710432,1,'Admin','istrator','ADMIN','0',NULL,NULL),(2,'\0\0','first1 last1','f4cb3f2e91c4ae99444ff0f0cc59790d00169662',NULL,'user1@email.com',NULL,NULL,NULL,NULL,1344662788,1344992313,1,'first1','last1',NULL,NULL,NULL,NULL),(3,'\0\0','first2 last2','0aa0c7b87340287a372de36705620ea66ecae545',NULL,'user2@email.com',NULL,NULL,NULL,NULL,1344662804,1344990627,1,'first2','last2',NULL,NULL,NULL,NULL),(4,'\0\0','first3 last3','923eb893963c488cd54b78b9f7d7ada315fdbead',NULL,'user3@email.com',NULL,NULL,NULL,NULL,1344662820,1344988577,1,'first3','last3',NULL,NULL,NULL,NULL),(5,'\0\0','First4 Last4','99e9162fbcda6ca49da5ca812ba923c689d3e9a2',NULL,'user4@email.com',NULL,NULL,NULL,NULL,1344671699,1344912706,1,'first4','last4',NULL,NULL,NULL,NULL),(6,'\0\0','First5 Last5','0ceee28b653880d9997e4f82ac5713c055eeadb8',NULL,'user5@email.com',NULL,NULL,NULL,NULL,1344702591,1344702591,1,'first5','last5',NULL,NULL,NULL,NULL),(8,'\0\0','Adhika Mahendra','8186f64ba9d535383b8fbd791096103dfaa8ae21',NULL,'dhimoet@hotmail.com',NULL,NULL,NULL,'8b3ceca80e31c4bab852f46d575951388bd38d07',1344706702,1350771286,1,'Adhika','Mahendra',NULL,NULL,'505947125','dhimoet'),(9,'\0\0','WebDev BetaOne','46a9183c31850bf6738b7c3010d4d32cb916d196',NULL,'webdev.betatwo@facebook.com',NULL,NULL,NULL,'f56bdbd03c0a19b21eb1c3006836c2a5fdab5e24',1344706765,1344996906,1,'WebDev','BetaOne',NULL,NULL,'100000555721710',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_groups`
--

DROP TABLE IF EXISTS `users_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_groups` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` mediumint(8) unsigned NOT NULL,
  `group_id` mediumint(8) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_groups`
--

LOCK TABLES `users_groups` WRITE;
/*!40000 ALTER TABLE `users_groups` DISABLE KEYS */;
INSERT INTO `users_groups` VALUES (1,1,1),(2,1,2),(3,2,2),(4,3,2),(5,4,2),(6,5,2),(7,6,2),(8,7,2),(9,8,2),(10,9,2);
/*!40000 ALTER TABLE `users_groups` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2012-10-23 23:42:32
