DROP TABLE IF EXISTS `order_statuses`;
CREATE TABLE `order_statuses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
LOCK TABLES `order_statuses` WRITE;
INSERT INTO `order_statuses` VALUES (1,'pending','2022-10-15 09:53:41','2022-10-15 09:53:41',NULL),(2,'order confirmed','2022-10-15 09:53:41','2022-10-15 09:53:41',NULL),(3,'shipped','2022-10-15 09:53:41','2022-10-15 09:53:41',NULL),(4,'delivered','2022-10-15 09:53:41','2022-10-15 09:53:41',NULL),(5,'canceled','2022-10-15 09:53:41','2022-10-15 09:53:41',NULL);
UNLOCK TABLES;