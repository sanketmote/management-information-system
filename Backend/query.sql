-- --------------------------------------------------------
-- Host:                         notice-board.c8jbm3ftr5du.ap-south-1.rds.amazonaws.com
-- Server version:               8.0.27 - Source distribution
-- Server OS:                    Linux
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping data for table ads.Advisor: ~6 rows (approximately)
/*!40000 ALTER TABLE `Advisor` DISABLE KEYS */;
INSERT INTO `Advisor` (`id`, `s_id`, `i_id`, `createdAt`, `updatedAt`) VALUES
	(1, 2, 3, '2022-02-15 13:53:35', '2022-02-15 13:53:35'),
	(2, 1, 3, '2022-02-15 13:53:43', '2022-02-15 13:53:43'),
	(3, 4, 1, '2022-02-15 13:53:48', '2022-02-15 13:53:48'),
	(4, 3, 2, '2022-02-15 13:53:58', '2022-02-15 13:53:58'),
	(5, 2, 1, '2022-02-15 13:55:43', '2022-02-15 13:55:43'),
	(6, 3, 1, '2022-02-15 13:58:22', '2022-02-15 13:58:22');
/*!40000 ALTER TABLE `Advisor` ENABLE KEYS */;

-- Dumping data for table ads.classroom: ~0 rows (approximately)
/*!40000 ALTER TABLE `classroom` DISABLE KEYS */;
/*!40000 ALTER TABLE `classroom` ENABLE KEYS */;

-- Dumping data for table ads.Course: ~0 rows (approximately)
/*!40000 ALTER TABLE `Course` DISABLE KEYS */;
/*!40000 ALTER TABLE `Course` ENABLE KEYS */;

-- Dumping data for table ads.Department: ~2 rows (approximately)
/*!40000 ALTER TABLE `Department` DISABLE KEYS */;
INSERT INTO `Department` (`dept_id`, `dept_name`, `building`, `budget`, `createdAt`, `updatedAt`) VALUES
	(1, 'CSE', '1', 1000, '2022-02-15 13:32:27', '2022-02-15 13:32:27'),
	(2, 'IT', '2', 900, '2022-02-15 13:33:03', '2022-02-15 13:33:03');
/*!40000 ALTER TABLE `Department` ENABLE KEYS */;

-- Dumping data for table ads.Instructor: ~3 rows (approximately)
/*!40000 ALTER TABLE `Instructor` DISABLE KEYS */;
INSERT INTO `Instructor` (`id`, `inst_name`, `dept_name`, `salary`, `createdAt`, `updatedAt`) VALUES
	(1, 'prof. N. L. Gav', 'CSE', 100000, '2022-02-15 13:49:24', '2022-02-15 13:49:24'),
	(2, 'prof. T. Mulla', 'IT', 100000, '2022-02-15 13:50:17', '2022-02-15 13:50:17'),
	(3, 'prof. A. P. pat', 'CSE', 100000, '2022-02-15 13:50:50', '2022-02-15 13:50:50');
/*!40000 ALTER TABLE `Instructor` ENABLE KEYS */;

-- Dumping data for table ads.Prereq: ~0 rows (approximately)
/*!40000 ALTER TABLE `Prereq` DISABLE KEYS */;
/*!40000 ALTER TABLE `Prereq` ENABLE KEYS */;

-- Dumping data for table ads.Section: ~0 rows (approximately)
/*!40000 ALTER TABLE `Section` DISABLE KEYS */;
/*!40000 ALTER TABLE `Section` ENABLE KEYS */;

-- Dumping data for table ads.students: ~0 rows (approximately)
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` (`id`, `name`, `dept_name`, `tot_cred`, `createdAt`, `updatedAt`) VALUES
	(1, 'Sanket Mote', 'CSE', 160, '2022-02-15 13:36:53', '2022-02-15 13:36:53'),
	(2, 'Abhishek Charpa', 'CSE', 170, '2022-02-15 13:37:39', '2022-02-15 13:37:39'),
	(3, 'Krushna Mali', 'CSE', 180, '2022-02-15 13:37:53', '2022-02-15 13:37:53'),
	(4, 'Mayuresh Patil', 'CSE', 180, '2022-02-15 13:39:37', '2022-02-15 13:39:37');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;

-- Dumping data for table ads.takes: ~0 rows (approximately)
/*!40000 ALTER TABLE `takes` DISABLE KEYS */;
/*!40000 ALTER TABLE `takes` ENABLE KEYS */;

-- Dumping data for table ads.teaches: ~0 rows (approximately)
/*!40000 ALTER TABLE `teaches` DISABLE KEYS */;
/*!40000 ALTER TABLE `teaches` ENABLE KEYS */;

-- Dumping data for table ads.time_slot: ~0 rows (approximately)
/*!40000 ALTER TABLE `time_slot` DISABLE KEYS */;
/*!40000 ALTER TABLE `time_slot` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
