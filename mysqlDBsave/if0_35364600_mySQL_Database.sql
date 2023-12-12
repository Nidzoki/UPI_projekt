-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: sql108.infinityfree.com
-- Generation Time: Dec 11, 2023 at 08:11 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.2.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `if0_35364600_mySQL_Database`
--

-- --------------------------------------------------------

--
-- Table structure for table `EVENT REMINDER`
--

CREATE TABLE `EVENT REMINDER` (
  `reminder` bigint(20) NOT NULL,
  `event` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `EVENT REMINDER`
--

INSERT INTO `EVENT REMINDER` (`reminder`, `event`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `EVENTS`
--

CREATE TABLE `EVENTS` (
  `ID` bigint(20) UNSIGNED NOT NULL,
  `name` tinytext NOT NULL,
  `time` datetime NOT NULL,
  `type` tinytext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `EVENTS`
--

INSERT INTO `EVENTS` (`ID`, `name`, `time`, `type`) VALUES
(1, 'Marinov rodendan', '2023-12-12 00:00:00', 'birthday');

-- --------------------------------------------------------

--
-- Table structure for table `REMINDERS`
--

CREATE TABLE `REMINDERS` (
  `ID` bigint(20) UNSIGNED NOT NULL,
  `time` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `REMINDERS`
--

INSERT INTO `REMINDERS` (`ID`, `time`) VALUES
(1, '2023-12-12 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `SCHEDULE EVENT`
--

CREATE TABLE `SCHEDULE EVENT` (
  `event` bigint(20) NOT NULL,
  `schedule` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `SCHEDULE EVENT`
--

INSERT INTO `SCHEDULE EVENT` (`event`, `schedule`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `SCHEDULES`
--

CREATE TABLE `SCHEDULES` (
  `ID` bigint(20) UNSIGNED NOT NULL,
  `name` tinytext NOT NULL,
  `start` datetime NOT NULL,
  `end` datetime NOT NULL,
  `type` tinytext NOT NULL,
  `style` tinytext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `SCHEDULES`
--

INSERT INTO `SCHEDULES` (`ID`, `name`, `start`, `end`, `type`, `style`) VALUES
(1, 'Moj raspored', '2023-12-01 00:00:00', '2024-01-01 00:00:00', 'Mjesecni', 'dark');

-- --------------------------------------------------------

--
-- Table structure for table `USERS`
--

CREATE TABLE `USERS` (
  `ID` bigint(20) UNSIGNED NOT NULL,
  `name` tinytext NOT NULL,
  `surname` tinytext NOT NULL,
  `mail` tinytext NOT NULL,
  `password` tinytext NOT NULL,
  `birthday` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `USERS`
--

INSERT INTO `USERS` (`ID`, `name`, `surname`, `mail`, `password`, `birthday`) VALUES
(1, '\0\0\0M\0\0\0a\0\0\0r\0\0\0k\0\0\0o', 'Maric', 'markomaric@nekimail.com', 'lozinka123', '2000-01-01');

-- --------------------------------------------------------

--
-- Table structure for table `USER SCHEDULE`
--

CREATE TABLE `USER SCHEDULE` (
  `schedule` bigint(20) NOT NULL,
  `user` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `USER SCHEDULE`
--

INSERT INTO `USER SCHEDULE` (`schedule`, `user`) VALUES
(1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `EVENT REMINDER`
--
ALTER TABLE `EVENT REMINDER`
  ADD PRIMARY KEY (`reminder`);

--
-- Indexes for table `EVENTS`
--
ALTER TABLE `EVENTS`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `ID` (`ID`);

--
-- Indexes for table `REMINDERS`
--
ALTER TABLE `REMINDERS`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `ID` (`ID`);

--
-- Indexes for table `SCHEDULE EVENT`
--
ALTER TABLE `SCHEDULE EVENT`
  ADD PRIMARY KEY (`event`);

--
-- Indexes for table `SCHEDULES`
--
ALTER TABLE `SCHEDULES`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `ID` (`ID`),
  ADD UNIQUE KEY `ID_2` (`ID`);

--
-- Indexes for table `USERS`
--
ALTER TABLE `USERS`
  ADD UNIQUE KEY `ID` (`ID`);

--
-- Indexes for table `USER SCHEDULE`
--
ALTER TABLE `USER SCHEDULE`
  ADD PRIMARY KEY (`schedule`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `EVENTS`
--
ALTER TABLE `EVENTS`
  MODIFY `ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `REMINDERS`
--
ALTER TABLE `REMINDERS`
  MODIFY `ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `SCHEDULES`
--
ALTER TABLE `SCHEDULES`
  MODIFY `ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `USERS`
--
ALTER TABLE `USERS`
  MODIFY `ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
