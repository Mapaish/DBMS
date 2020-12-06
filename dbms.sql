-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 06, 2020 at 02:27 PM
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
(1, 1, 1, 'Suite Room', 'Eye', 5000, 1607210222, 2);

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
(1, 'Vaishali', '2020-12-01', 'F', 10000, 'abc@sakec.ac.in', 9876543210, 'Eye', 'Permanent'),
(2, 'John', '2020-12-10', 'M', 500, 'john@sakec.ac.in', 9784563247, 'Liver', 'Visiting'),
(3, 'Shawn', '2020-12-02', 'M', 7000, 'shawn@sakec.ac.in', 9567123978, 'Bone', 'Permanent'),
(4, 'Emmanuel Macron', '2020-12-15', 'M', 35000, 'emmanuelmacron@mail.com', 7845986325, 'Lung', 'Permanent');

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
('abc@sakec.ac.in', '12345678', 'doctor'),
('admin@gmail.com', 'qwer1234', 'admin'),
('emmanuelmacron@mail.com', 'qwer1234', 'doctor'),
('john@sakec.ac.in', '12345678', 'doctor'),
('shawn@sakec.ac.in', 'asdfghjk', 'doctor');

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
(1, 'Raj', '2020-12-01', 'M', 'B+', 'raj@sakec.ac.in	', 9654712365);

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
('Biospy', 10),
('CT Scan', 10),
('Colonoscopy', 10),
('ECG', 10),
('Gastroscopy', 10),
('MRI', 10),
('PET Scan', 10),
('Ultrasound', 10),
('X-Rays', 10);

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
  ADD UNIQUE KEY `treatment_ID` (`treatment_ID`),
  ADD KEY `test_name` (`test_name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `assigned_to`
--
ALTER TABLE `assigned_to`
  MODIFY `treatment_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `doctor`
--
ALTER TABLE `doctor`
  MODIFY `doctor_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `patient`
--
ALTER TABLE `patient`
  MODIFY `patient_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
