-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 16, 2024 at 11:38 AM
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
  `start` tinytext NOT NULL,
  `end` tinytext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`ID`, `name`, `start`, `end`) VALUES
(7, 'adf', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, '<xy', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 'y', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 'dsfaa', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 'yxdfa', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 'asdf', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 'SDFASF', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 'asfas', '31. 10. 2023.', '31. 10. 2023.'),
(15, 'asfas', '31. 10. 2023.', '31. 10. 2023.'),
(16, 'asdfasdf', '31. 10. 2023.', '31. 10. 2023.'),
(17, '', '', ''),
(18, 'asdfsafsd', '16. 01. 2024.', '16. 01. 2024.'),
(19, 'asdfasdfs', '10. 01. 2024.', '10. 01. 2024.');

-- --------------------------------------------------------

--
-- Table structure for table `event_reminder`
--

CREATE TABLE `event_reminder` (
  `reminder` bigint(20) NOT NULL,
  `event` bigint(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reminders`
--

CREATE TABLE `reminders` (
  `ID` bigint(20) UNSIGNED NOT NULL,
  `time` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `schedules`
--

CREATE TABLE `schedules` (
  `ID` bigint(20) UNSIGNED NOT NULL,
  `name` tinytext NOT NULL,
  `type` tinytext NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `schedules`
--

INSERT INTO `schedules` (`ID`, `name`, `type`) VALUES
(57, 'conflictschedule', 'asg'),
(58, 'dfgadg', 'Month'),
(59, 'novi ', 'Month'),
(60, 'asfas', 'Month'),
(61, 'asdfa', 'Month'),
(62, 'asfa', 'Month'),
(63, 'eag', 'Month'),
(64, 'asdfasdfas', 'Month');

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
(7, 58),
(9, 58),
(8, 58),
(10, 58),
(11, 58),
(12, 58),
(13, 58),
(14, 58),
(15, 58),
(16, 58),
(17, 64),
(18, 64),
(19, 64);

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
(12, 'ante', 'antic', 'doubleante@nesto.com', 'stajaznamvise', '2024-01-23', 'a'),
(11, 'ante', 'antic', 'ante@nesto.com', 'stajaznamvise', '2024-01-23', 'a'),
(13, 'Luka', 'Lukic', 'luka@nesto.com', 'lukas pass', '2024-01-22', 'a'),
(14, 'Luka', 'Lukic', 'drugiluka@nesto.com', 'lukas pass', '2024-01-22', 'a'),
(15, 'Luka', 'Lukic', 'treciluka@nesto.com', 'lukas pass', '2024-01-22', 'a'),
(16, 'Nikola', 'Vidovi?', 'antuka@nesto.com', '12345678', '2024-01-22', 'a'),
(17, 'ime', 'asf', 'luk@onion.com', '12345678', '2024-01-22', 'a'),
(18, 'Nikola', 'Vidovi?', 'sdfgdag@gmail.com', '12345678', '2024-01-22', 'a'),
(19, 'Nikola', 'Vidovi?', 'sdfgdag@gmai', '123456789', '2024-01-22', 'a'),
(20, 'Nikola', 'Vidovi?', 'gdag@gmail.com', '1234567890', '2024-01-22', 'a'),
(21, 'Nikola', 'Vidovi?', 'sdfgag@gmail.com', '123456789', '2024-01-22', 'a'),
(22, 'Nikola', 'Vidovi?', 'nlavidovic01@gmail.com', '123456789', '2024-01-22', 'a'),
(23, 'Nikola', 'Vidovi?', 'novi@mail.vomaf', '123456789', '2024-01-22', 'a');

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
(58, 11),
(59, 11),
(57, 11),
(64, 11),
(63, 11),
(62, 11),
(61, 11),
(60, 11);

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
  MODIFY `ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `reminders`
--
ALTER TABLE `reminders`
  MODIFY `ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `schedules`
--
ALTER TABLE `schedules`
  MODIFY `ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
