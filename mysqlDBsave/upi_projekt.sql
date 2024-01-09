-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 09, 2024 at 06:18 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `upi_projekt`
--

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `ID` bigint(20) UNSIGNED NOT NULL,
  `name` tinytext NOT NULL,
  `start` datetime NOT NULL,
  `end` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`ID`, `name`, `start`, `end`) VALUES
(1, 'Marinov rodendan', '2023-12-12 00:00:00', '2024-01-09 17:34:13');

-- --------------------------------------------------------

--
-- Table structure for table `event_reminder`
--

CREATE TABLE `event_reminder` (
  `reminder` bigint(20) NOT NULL,
  `event` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `event_reminder`
--

INSERT INTO `event_reminder` (`reminder`, `event`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `reminders`
--

CREATE TABLE `reminders` (
  `ID` bigint(20) UNSIGNED NOT NULL,
  `time` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `reminders`
--

INSERT INTO `reminders` (`ID`, `time`) VALUES
(1, '2023-12-12 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `schedules`
--

CREATE TABLE `schedules` (
  `ID` bigint(20) UNSIGNED NOT NULL,
  `name` tinytext NOT NULL,
  `start` datetime NOT NULL,
  `end` datetime NOT NULL,
  `type` tinytext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `schedules`
--

INSERT INTO `schedules` (`ID`, `name`, `start`, `end`, `type`) VALUES
(1, 'Moj raspored', '2023-12-01 00:00:00', '2024-01-01 00:00:00', 'Mjesecni');

-- --------------------------------------------------------

--
-- Table structure for table `schedule_event`
--

CREATE TABLE `schedule_event` (
  `event` bigint(20) NOT NULL,
  `schedule` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `schedule_event`
--

INSERT INTO `schedule_event` (`event`, `schedule`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID` bigint(20) UNSIGNED NOT NULL,
  `name` tinytext NOT NULL,
  `surname` tinytext NOT NULL,
  `mail` tinytext NOT NULL,
  `password` tinytext NOT NULL,
  `birthday` date NOT NULL,
  `theme` char(1) NOT NULL DEFAULT 'a'
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID`, `name`, `surname`, `mail`, `password`, `birthday`, `theme`) VALUES
(1, 'Marko', 'Maric', 'markomaric@nekimail.com', 'lozinka123', '2000-01-01', 'a'),
(2, 'Nikola', 'Nikoli?', 'nikola@nekimail.com', 'loza123', '1999-12-31', 'a'),
(4, 'Ante', 'Antic', 'ante@nekimail.com', 'loz123', '1989-11-30', 'a');

-- --------------------------------------------------------

--
-- Table structure for table `user_schedule`
--

CREATE TABLE `user_schedule` (
  `schedule` bigint(20) NOT NULL,
  `user` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `user_schedule`
--

INSERT INTO `user_schedule` (`schedule`, `user`) VALUES
(1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `ID` (`ID`);

--
-- Indexes for table `event_reminder`
--
ALTER TABLE `event_reminder`
  ADD PRIMARY KEY (`reminder`);

--
-- Indexes for table `reminders`
--
ALTER TABLE `reminders`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `ID` (`ID`);

--
-- Indexes for table `schedules`
--
ALTER TABLE `schedules`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `ID` (`ID`),
  ADD UNIQUE KEY `ID_2` (`ID`);

--
-- Indexes for table `schedule_event`
--
ALTER TABLE `schedule_event`
  ADD PRIMARY KEY (`event`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD UNIQUE KEY `ID` (`ID`),
  ADD UNIQUE KEY `mail` (`mail`) USING HASH;

--
-- Indexes for table `user_schedule`
--
ALTER TABLE `user_schedule`
  ADD PRIMARY KEY (`schedule`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `reminders`
--
ALTER TABLE `reminders`
  MODIFY `ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `schedules`
--
ALTER TABLE `schedules`
  MODIFY `ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
