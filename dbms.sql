-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2020 at 02:10 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbms`
--

-- --------------------------------------------------------

--
-- Table structure for table `assigned_to`
--

CREATE TABLE `assigned_to` (
  `treatment_ID` int(11) NOT NULL,
  `patient_ID` int(11) NOT NULL,
  `doctor_ID` int(11) NOT NULL,
  `room_type` varchar(20) COLLATE utf8mb4_bin NOT NULL,
  `treatment_type` varchar(15) COLLATE utf8mb4_bin NOT NULL,
  `fees` int(11) DEFAULT NULL,
  `startTime` bigint(14) NOT NULL,
  `days` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `assigned_to`
--

INSERT INTO `assigned_to` (`treatment_ID`, `patient_ID`, `doctor_ID`, `room_type`, `treatment_type`, `fees`, `startTime`, `days`) VALUES
(1, 1, 10, 'Deluxe Room', 'Osteoporosis', 50000, 1607280225, 4),
(2, 5, 9, 'Deluxe Room', 'Fever', 600, 1607280353, 8),
(3, 7, 8, 'Single Room', 'Acne', 5000, 1607280417, 1),
(4, 12, 4, 'Deluxe Room', 'Arrhythmia', 100000, 1607280456, 5),
(5, 11, 6, 'Twin Sharing Room', 'Fever', 500, 1607280524, 3),
(6, 9, 3, 'Twin Sharing Room', 'Acne', 3000, 1607280553, 8),
(7, 13, 4, 'Suite Room', 'Chest Pain', 80000, 1607280588, 9),
(8, 10, 8, 'Single Room', 'Acne', 2500, 1607280672, 6),
(9, 8, 5, 'Single Room', 'Fever', 500, 1607280705, 11),
(10, 6, 9, 'Deluxe Room', 'Back Pain', 10000, 1607280750, 8),
(11, 4, 8, 'Deluxe Room', 'Acne', 4000, 1607280788, 1),
(12, 3, 7, 'Suite Room', 'Toothache', 4000, 1607280849, 6),
(13, 2, 3, 'Single Room', 'Acne', 4000, 1607280910, 6),
(14, 14, 1, 'Suite Room', 'Asthma', 70000, 1607280944, 5);

-- --------------------------------------------------------

--
-- Table structure for table `doctor`
--

CREATE TABLE `doctor` (
  `doctor_ID` int(11) NOT NULL,
  `Name` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `dob` date NOT NULL,
  `gender` varchar(1) COLLATE utf8mb4_bin NOT NULL,
  `Salary` int(11) NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `mobile` bigint(15) NOT NULL,
  `specialisation` varchar(25) COLLATE utf8mb4_bin NOT NULL,
  `type` varchar(10) COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `doctor`
--

INSERT INTO `doctor` (`doctor_ID`, `Name`, `dob`, `gender`, `Salary`, `email`, `mobile`, `specialisation`, `type`) VALUES
(1, 'Vaishali Chavan', '1995-12-09', 'F', 1000000, 'vaishali@sakec.ac.in', 7585874838, 'Pulmonologist', 'Permanent'),
(2, 'Sahil Mane', '1993-12-17', 'M', 2000000, 'sahil@sakec.ac.in', 7368729428, 'Eye surgeon', 'Permanent'),
(3, 'Ruudra Patel', '1999-12-15', 'M', 7000000, 'ruudra@sakec.ac.in', 9364892538, 'Skin surgeon', 'Permanent'),
(4, 'Parth Mundhe', '1998-12-09', 'M', 2000000, 'parth@sakec.ac.in', 9024702385, 'Heart surgeon ', 'Permanent'),
(5, 'Manjunath Naik', '1997-11-09', 'M', 700000, 'manjunath@sakec.ac.in', 8928493472, 'Physician ', 'Permanent'),
(6, 'Manav Parmar', '1997-07-15', 'M', 900000, 'manav@sakec.ac.in', 8092084207, 'Physician', 'Visiting'),
(7, 'Krutik Patel', '1998-10-12', 'M', 400000, 'krutik@sakec.ac.in', 8375372058, 'Dentist', 'Visiting'),
(8, 'Karan Dubey', '1994-08-03', 'F', 400000, 'karan@sakec.ac.in', 9204329745, 'Skin surgeon', 'Visiting'),
(9, 'Ishwar Palav', '1999-05-12', 'M', 900000, 'ishwar@sakec.ac.in', 9000342214, 'Physician', 'Permanent'),
(10, 'Ishika Diwan', '2000-09-14', 'F', 8000000, 'ishika@sakec.ac.in', 9124185071, 'Orthopedist', 'Permanent');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `email` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `password` varchar(15) COLLATE utf8mb4_bin NOT NULL DEFAULT 'qwer1234',
  `user_type` varchar(10) COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`email`, `password`, `user_type`) VALUES
('admin@gmail.com', 'qwer1234', 'admin'),
('ishika@sakec.ac.in', 'ishika1234', 'doctor'),
('ishwar@sakec.ac.in', 'ishwar1234', 'doctor'),
('karan@sakec.ac.in', 'karan1234', 'doctor'),
('krutik@sakec.ac.in', 'krutik1234', 'doctor'),
('manav@sakec.ac.in', 'manav1234', 'doctor'),
('manjunath@sakec.ac.in', 'manjunath1234', 'doctor'),
('parth@sakec.ac.in', 'parth1234', 'doctor'),
('ruudra@sakec.ac.in', 'ruudra1234', 'doctor'),
('sahil@sakec.ac.in', 'sahil1234', 'doctor'),
('uday.bhave@sakec.ac.in', 'qwer1234', 'doctor'),
('vaishali@sakec.ac.in', 'vaishali1234', 'doctor');

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `patient_ID` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `dob` date NOT NULL,
  `gender` varchar(1) COLLATE utf8mb4_bin NOT NULL,
  `blood_group` varchar(5) COLLATE utf8mb4_bin NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_bin NOT NULL,
  `mobile` bigint(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`patient_ID`, `name`, `dob`, `gender`, `blood_group`, `email`, `mobile`) VALUES
(1, 'Amit Ramani', '2000-12-08', 'M', 'O-', 'amit@sakec.ac.in', 7474284924),
(2, 'Tulika Jain', '1990-12-16', 'F', 'A+', 'tulika@sakec.ac.in', 9740923479),
(3, 'Shail Shah', '2000-10-05', 'M', 'B+', 'shail@sakec.ac.in', 9237498245),
(4, 'Sanket Unhale', '2002-11-30', 'M', 'B-', 'sanket@sakec.ac.in', 9234792648),
(5, 'Ashish Shethia', '1995-03-02', 'M', 'AB+', 'ashish@sakec.ac.in', 8659284798),
(6, 'Sachin Deshmukh', '1995-04-23', 'M', 'O+', 'sachin@sakec.ac.in', 9234296341),
(7, 'Bhavika Patil', '1996-07-14', 'F', 'A-', 'bhavika@sakec.ac.in', 9242364928),
(8, 'Radhika Sharma', '2001-04-14', 'F', 'AB+', 'radhika@sakec.ac.in', 9284693542),
(9, 'Bhavna Patel', '1992-05-12', 'F', 'B+', 'bhavna@sakec.ac.in', 9093742986),
(10, 'Nidhi Kulkarni', '1993-06-07', 'F', 'AB+', 'nidhi@sakec.ac.in', 9856295967),
(11, 'Dhawal Shah', '1996-05-27', 'M', 'B+', 'dhawal@sakec.ac.in', 9283469228),
(12, 'Harsh Rao', '1990-05-17', 'M', 'B+', 'harsh@sakec.ac.in', 8726429675),
(13, 'Kedar Patil', '1998-12-12', 'M', 'AB+', 'kedar@sakec.ac.in', 9236254235),
(14, 'Yousha Gharpure', '1995-12-22', 'F', 'B+', 'yousha@sakec.ac.in', 9235702936);

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `room_type` varchar(20) COLLATE utf8mb4_bin NOT NULL,
  `charge` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`room_type`, `charge`) VALUES
('Deluxe Room', 2500),
('Single Room', 1000),
('Suite Room', 4000),
('Twin Sharing Room', 800);

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `name` varchar(20) COLLATE utf8mb4_bin NOT NULL,
  `charge` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`name`, `charge`) VALUES
('Blood Test', 900),
('Blue Light Therapy', 30000),
('CT Scan', 4000),
('Colonoscopy', 1000),
('ECG', 250),
('Endoscopy', 2000),
('Gum Surgery', 35000),
('MRI', 5000),
('Microneedling', 8000),
('Sonography', 1500),
('Urine test', 150),
('X-ray', 1500);

-- --------------------------------------------------------

--
-- Table structure for table `test_conducted`
--

CREATE TABLE `test_conducted` (
  `treatment_ID` int(11) NOT NULL,
  `test_name` varchar(20) COLLATE utf8mb4_bin NOT NULL,
  `count` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Dumping data for table `test_conducted`
--

INSERT INTO `test_conducted` (`treatment_ID`, `test_name`, `count`) VALUES
(1, 'MRI', 1),
(2, 'Blood Test', 1),
(2, 'Urine test', 1),
(3, 'Blue Light Therapy', 1),
(4, 'MRI', 1),
(5, 'Blood Test', 1),
(7, 'ECG', 1),
(7, 'MRI', 1),
(9, 'Blood Test', 1),
(9, 'Urine test', 1),
(10, 'Blood Test', 1),
(10, 'CT Scan', 1),
(12, 'Gum Surgery', 1),
(13, 'Blood Test', 2),
(13, 'Blue Light Therapy', 1),
(14, 'MRI', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `assigned_to`
--
ALTER TABLE `assigned_to`
  ADD PRIMARY KEY (`treatment_ID`),
  ADD KEY `patient_ID` (`patient_ID`),
  ADD KEY `doctor_ID` (`doctor_ID`),
  ADD KEY `room_type` (`room_type`);

--
-- Indexes for table `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`doctor_ID`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`patient_ID`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`room_type`);

--
-- Indexes for table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`name`);

--
-- Indexes for table `test_conducted`
--
ALTER TABLE `test_conducted`
  ADD PRIMARY KEY (`treatment_ID`,`test_name`),
  ADD KEY `test_name` (`test_name`),
  ADD KEY `treatment_ID_2` (`treatment_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `assigned_to`
--
ALTER TABLE `assigned_to`
  MODIFY `treatment_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `doctor`
--
ALTER TABLE `doctor`
  MODIFY `doctor_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `patient`
--
ALTER TABLE `patient`
  MODIFY `patient_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `assigned_to`
--
ALTER TABLE `assigned_to`
  ADD CONSTRAINT `assigned_to_ibfk_5` FOREIGN KEY (`room_type`) REFERENCES `room` (`room_type`),
  ADD CONSTRAINT `assigned_to_ibfk_8` FOREIGN KEY (`patient_ID`) REFERENCES `patient` (`patient_ID`) ON DELETE CASCADE,
  ADD CONSTRAINT `assigned_to_ibfk_9` FOREIGN KEY (`doctor_ID`) REFERENCES `doctor` (`doctor_ID`) ON DELETE CASCADE;

--
-- Constraints for table `doctor`
--
ALTER TABLE `doctor`
  ADD CONSTRAINT `doctor_ibfk_1` FOREIGN KEY (`email`) REFERENCES `login` (`email`);

--
-- Constraints for table `test_conducted`
--
ALTER TABLE `test_conducted`
  ADD CONSTRAINT `test_conducted_ibfk_1` FOREIGN KEY (`test_name`) REFERENCES `test` (`name`),
  ADD CONSTRAINT `test_conducted_ibfk_2` FOREIGN KEY (`treatment_ID`) REFERENCES `assigned_to` (`treatment_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
