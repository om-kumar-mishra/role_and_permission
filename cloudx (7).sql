-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 02, 2023 at 09:22 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cloudx`
--

-- --------------------------------------------------------

--
-- Table structure for table `banners`
--

CREATE TABLE `banners` (
  `id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `sub_title` varchar(255) DEFAULT NULL,
  `details` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `banners`
--

INSERT INTO `banners` (`id`, `image`, `title`, `sub_title`, `details`, `createdAt`, `updatedAt`) VALUES
(16, 'no_image.jpg', 'sdf', NULL, ' fdg', '2023-06-15 08:46:30', '2023-06-15 08:46:30');

-- --------------------------------------------------------

--
-- Table structure for table `common_banners`
--

CREATE TABLE `common_banners` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `common_banners`
--

INSERT INTO `common_banners` (`id`, `title`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'common banner 1', 'comman_banner-1686754784488-119546289-blog3.jpg', '2023-05-22 05:01:07', '2023-06-14 14:59:44');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `fax` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `linkedIn` varchar(255) DEFAULT NULL,
  `map` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `email2` varchar(255) DEFAULT NULL,
  `summary` varchar(255) DEFAULT NULL,
  `phone2` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `address`, `email`, `phone`, `fax`, `facebook`, `instagram`, `linkedIn`, `map`, `createdAt`, `updatedAt`, `email2`, `summary`, `phone2`) VALUES
(16, 'faridabad', 'omkumar.alobha@gmail.com', '7035054266', NULL, 'http://cyberdev.alobhaitsolution.com/about/', 'https://cyberdev.alobhaitsolution.com/about/', 'http://cyberdev.alobhaitsolution.com/about/', 'http://cyberdev.alobhaitsolution.com/about/', '2023-06-14 11:31:59', '2023-06-16 09:46:27', 'omkrrmi3s33hra123@gmail.com', '<p>aferetert</p>\r\n', '7065054289');

-- --------------------------------------------------------

--
-- Table structure for table `contact_banners`
--

CREATE TABLE `contact_banners` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact_banners`
--

INSERT INTO `contact_banners` (`id`, `title`, `image`, `createdAt`, `updatedAt`) VALUES
(2, 'banner1   ', 'image-1686824391586-262581354-client1.jpg', '2023-05-22 09:59:25', '2023-06-15 11:40:24');

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

CREATE TABLE `contact_us` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact_us`
--

INSERT INTO `contact_us` (`id`, `name`, `email`, `phone`, `company_name`, `description`, `createdAt`, `updatedAt`) VALUES
(20, 'om kumar', 'omkumar.alobha@gmail.com', '7265154287', 'agdfywrwdywerwergu', '=========werwrwerewrewrwerwerew', '2023-04-24 07:05:42', '2023-04-24 07:05:42'),
(21, 'om', 'omkrmishra@gmail.com', '7065054289', NULL, NULL, '2023-05-24 12:45:20', '2023-05-24 12:45:20'),
(22, 'om', 'omkrmishra123@gmail.com', '7065054282', NULL, NULL, '2023-05-24 12:50:46', '2023-05-24 12:50:46'),
(23, 'kaustubh', 'kaustubh.alobha@gmail.com', '8949905935', 'alobha', 'Best company I am Working for', '2023-05-24 12:55:58', '2023-05-24 12:55:58'),
(24, 'kaustubh', 'kausstubh.alobha@gmail.com', '8949905965', 'alobhfa', 'Best company I am Working for', '2023-05-24 12:56:57', '2023-05-24 12:56:57'),
(25, 'om', 'omkrmishra123@gmail.com', '7065054289', 'alobha', 'fdsssssssssdsd', '2023-05-31 06:36:44', '2023-05-31 06:36:44'),
(26, 'om', 'omkrmishra123@gmail.com', '7065054289', 'alobha', 'fdsssssssssdsd', '2023-05-31 06:36:49', '2023-05-31 06:36:49'),
(27, 'om', 'omkrmishra123@gmail.com', '7065054289', 'alobha', 'fdsssssssssdsd', '2023-05-31 06:36:53', '2023-05-31 06:36:53');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `title`, `image`, `createdAt`, `updatedAt`) VALUES
(6, 'event1 ', 'image-1686307254052-737611442-expert-team.png', '2023-05-26 09:19:56', '2023-06-09 10:40:54'),
(7, 'event2  ', 'image-1686303810896-953602955-choose-1.jpg', '2023-05-26 10:11:17', '2023-06-09 09:43:30'),
(8, 'evenet3', 'image-1686303793556-172226099-expert-team.png', '2023-06-09 09:43:13', '2023-06-09 09:43:13'),
(9, 'tt', 'image-1686815934180-306282147-client1.jpg', '2023-06-15 07:58:54', '2023-06-15 07:58:54'),
(10, 'sfsd', 'image-1686815956019-915792449-client2.jpg', '2023-06-15 07:59:16', '2023-06-15 07:59:16'),
(11, 'rewerer', 'no_image', '2023-06-15 08:01:37', '2023-06-15 08:01:37');

-- --------------------------------------------------------

--
-- Table structure for table `event_images`
--

CREATE TABLE `event_images` (
  `id` int(11) NOT NULL,
  `event_id` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `event_images`
--

INSERT INTO `event_images` (`id`, `event_id`, `image`, `createdAt`, `updatedAt`) VALUES
(15, 7, 'image-1686304297091-575741985-expert-team.png', '2023-05-26 10:11:34', '2023-06-09 09:51:37'),
(17, 6, 'image-1686307280063-559966475-home1-banner.jpg', '2023-05-29 09:17:22', '2023-06-09 10:41:20'),
(18, 6, 'blog2.jpg', '2023-05-29 09:17:22', '2023-05-29 09:17:22'),
(19, 6, 'home1-banner.jpg', '2023-05-29 09:17:22', '2023-05-29 09:17:22'),
(21, 6, 'choose-1.jpg', '2023-05-29 09:20:19', '2023-05-29 09:20:19'),
(22, 6, 'product-jpeg-500x500.webp', '2023-05-29 09:20:19', '2023-05-29 09:20:19'),
(23, 6, 'solution-img2.jpg', '2023-05-29 09:20:19', '2023-05-29 09:20:19'),
(24, 6, 'hospital.png', '2023-05-29 09:20:19', '2023-05-29 09:23:19');

-- --------------------------------------------------------

--
-- Table structure for table `gallary_banners`
--

CREATE TABLE `gallary_banners` (
  `id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gallary_banners`
--

INSERT INTO `gallary_banners` (`id`, `image`, `title`, `createdAt`, `updatedAt`) VALUES
(3, 'image-1686754784476-896321591-client3.jpg', 'fdsd 2332', '2023-06-14 14:58:24', '2023-06-14 14:59:44');

-- --------------------------------------------------------

--
-- Table structure for table `happy_customers`
--

CREATE TABLE `happy_customers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `degination` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `sequence` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `happy_customers`
--

INSERT INTO `happy_customers` (`id`, `name`, `description`, `degination`, `createdAt`, `updatedAt`, `image`, `sequence`) VALUES
(5, 'om kumar mishra1212 ff', 'ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddgfyttd\r\n', 'dev dddddddddddd', '2023-05-25 09:02:04', '2023-06-17 06:17:21', 'image-1686982641794-289788386-client3.jpg', 0);

-- --------------------------------------------------------

--
-- Table structure for table `how_we_make`
--

CREATE TABLE `how_we_make` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `how_we_make`
--

INSERT INTO `how_we_make` (`id`, `title`, `image`, `description`, `createdAt`, `updatedAt`) VALUES
(3, 'wqdq rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr', 'client1.jpg', '<p><s>asAS</s></p>\r\n', '2023-02-03 07:25:55', '2023-05-18 06:41:04'),
(5, 'wdeqw', 'background_image.webp', '<p>adweadwe</p>\r\n', '2023-02-13 06:58:52', '2023-02-13 06:58:52');

-- --------------------------------------------------------

--
-- Table structure for table `how_we_makes`
--

CREATE TABLE `how_we_makes` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `how_we_makes`
--

INSERT INTO `how_we_makes` (`id`, `title`, `image`, `description`, `createdAt`, `updatedAt`) VALUES
(3, 'how we make 23', 'download.jpg', '<p>how we make 23how we make 23how we make 23how we make 23</p>\r\n', '2023-05-23 11:33:41', '2023-05-25 05:35:08'),
(4, 'ee', 'home1-banner.jpg', '<p>e</p>\r\n', '2023-05-26 11:36:53', '2023-05-26 11:36:53'),
(5, 'rerw', 'pharma.png', '', '2023-05-26 11:37:06', '2023-05-26 11:37:06'),
(7, 'ewew', 'solution-img6.jpg', '', '2023-05-26 11:37:33', '2023-05-26 11:37:33'),
(9, 'ertewwrw', 'image-1686890433202-314493631-client3.jpg', '<p>werewreww</p>\r\n', '2023-06-16 04:40:33', '2023-06-16 04:40:33');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`id`, `image`, `createdAt`, `updatedAt`) VALUES
(4, 'client1.jpg', '2023-05-26 10:48:16', '2023-05-26 10:50:37');

-- --------------------------------------------------------

--
-- Table structure for table `industry_banners`
--

CREATE TABLE `industry_banners` (
  `id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `industry_banners`
--

INSERT INTO `industry_banners` (`id`, `image`, `title`, `createdAt`, `updatedAt`) VALUES
(1, 'image-1686819991826-695907188-client1.jpg', 'Industry 2        ', '2023-05-19 07:52:55', '2023-06-15 09:06:37'),
(3, 'download.jpg', 'gallary banner ', '2023-05-19 13:01:15', '2023-05-25 06:38:24');

-- --------------------------------------------------------

--
-- Table structure for table `industry_boxes`
--

CREATE TABLE `industry_boxes` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `industry_boxes`
--

INSERT INTO `industry_boxes` (`id`, `title`, `description`, `icon`, `createdAt`, `updatedAt`) VALUES
(3, 'ete', '<p>dfd</p>\r\n', 'image-1690959685754-993116458-tree-736885__340.jpg', '2023-08-02 07:01:25', '2023-08-02 07:01:25');

-- --------------------------------------------------------

--
-- Table structure for table `industry_main_title_pages`
--

CREATE TABLE `industry_main_title_pages` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `industry_main_title_pages`
--

INSERT INTO `industry_main_title_pages` (`id`, `title`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'Industry wdqw', 'main title       aa', '2023-05-19 09:38:37', '2023-06-15 09:06:37'),
(3, 'we', '<p>wewe</p>\r\n', '2023-05-25 12:09:42', '2023-05-25 12:09:42'),
(4, 'fsd', ' fdd', '2023-06-14 13:19:12', '2023-06-14 13:19:12'),
(5, '', ' ', '2023-06-14 13:20:35', '2023-06-14 13:20:35'),
(6, 'seere', ' ewrw', '2023-06-14 13:20:40', '2023-06-14 13:20:40'),
(7, 'dasd', ' sdssad', '2023-06-14 13:24:14', '2023-06-14 13:24:14');

-- --------------------------------------------------------

--
-- Table structure for table `map_data`
--

CREATE TABLE `map_data` (
  `id` int(11) NOT NULL,
  `latitude` varchar(255) DEFAULT NULL,
  `longitude` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `map_data`
--

INSERT INTO `map_data` (`id`, `latitude`, `longitude`, `address`, `createdAt`, `updatedAt`, `title`, `description`) VALUES
(2, ' 37.7749', '-122.4194 ', 'faridabad33444  ', '2023-07-07 08:06:13', '2023-07-10 10:24:25', 'map', 'werewre');

-- --------------------------------------------------------

--
-- Table structure for table `ourawesometeams`
--

CREATE TABLE `ourawesometeams` (
  `id` int(11) NOT NULL,
  `Name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `skype` varchar(255) DEFAULT NULL,
  `linkedin` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `sequence` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ourawesometeams`
--

INSERT INTO `ourawesometeams` (`id`, `Name`, `image`, `message`, `designation`, `mail`, `skype`, `linkedin`, `createdAt`, `updatedAt`, `sequence`) VALUES
(3, 'happy customer 2', 'solution-img6.jpg', '<p>fdfereeew</p>\r\n', 'Designer', 'https://mail.google.com/', 'https://www.skype.com/en/', 'https://in.linkedin.com/', '2023-06-05 05:47:45', '2023-06-05 05:47:45', 2),
(5, 'ekte', 'expert-team.png', '', 'Designer', 'https://mail.google.com/', 'https://www.skype.com/en/', 'https://in.linkedin.com/', '2023-06-05 05:48:49', '2023-06-05 05:48:49', 1),
(6, 'om kumar mishra', 'image-1686301567958-924425059-expert-team.png', '<p>sreee</p>\r\n', 'Designer', 'https://mail.google.com/', 'https://www.skype.com/en/', 'https://in.linkedin.com/', '2023-06-09 09:06:08', '2023-06-09 09:06:08', 6),
(7, 'Edit Category 1', 'image-1686301694040-680898305-solution-img5.jpg', '<p>were</p>\r\n', 'Designer', 'om@gmail.com', 'https://www.skype.com/en/', 'https://in.linkedin.com/', '2023-06-09 09:08:14', '2023-06-09 09:13:14', 0),
(8, 'Edit Category 11', 'image-1686301975062-723354934-solution-img5.jpg', '<p>qwewqew</p>\r\n', 'Designer', 'a@gmail.com', 'https://www.skype.com/en/', 'https://in.linkedin.com/', '2023-06-09 09:12:55', '2023-06-09 09:12:55', 1);

-- --------------------------------------------------------

--
-- Table structure for table `ready_to_talks`
--

CREATE TABLE `ready_to_talks` (
  `id` int(11) NOT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ready_to_talks`
--

INSERT INTO `ready_to_talks` (`id`, `icon`, `title`, `description`, `createdAt`, `updatedAt`) VALUES
(2, 'icon-1686744397748-893620232-client4.jpg', 'Ready to talk222', '<p>Ready to talk2Ready to talk2Ready to talk2Ready to talk2Ready to talk2Ready to talk2Ready to talk2</p>\r\n', '2023-05-19 11:50:13', '2023-06-14 12:06:37'),
(3, 'hospital.png', 'Ready to talk', '<p>Ready to talkReady to talkReady to talkReady to talkReady to talkReady to talkReady to talk</p>\r\n', '2023-05-23 06:59:15', '2023-05-23 06:59:15'),
(4, 'home1-banner.jpg', 'Ready to talk2', '<p>Ready to talk2Ready to talk2Ready to talk2Ready to talk2</p>\r\n', '2023-05-23 06:59:34', '2023-05-23 06:59:34');

-- --------------------------------------------------------

--
-- Table structure for table `relax_wes`
--

CREATE TABLE `relax_wes` (
  `id` int(11) NOT NULL,
  `success_champions` varchar(255) DEFAULT NULL,
  `salesforce_certification` varchar(255) DEFAULT NULL,
  `happy_customers` varchar(255) DEFAULT NULL,
  `project_delivered` varchar(255) DEFAULT NULL,
  `go_to_market_solution` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `relax_wes`
--

INSERT INTO `relax_wes` (`id`, `success_champions`, `salesforce_certification`, `happy_customers`, `project_delivered`, `go_to_market_solution`, `createdAt`, `updatedAt`) VALUES
(5, '43222', '656', '76', '867', '67876', '2023-05-26 12:44:34', '2023-06-14 12:17:01');

-- --------------------------------------------------------

--
-- Table structure for table `relax_we_haves`
--

CREATE TABLE `relax_we_haves` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `number` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `relax_we_haves`
--

INSERT INTO `relax_we_haves` (`id`, `title`, `number`, `createdAt`, `updatedAt`) VALUES
(2, 'title 3', 5434, '2023-05-18 12:38:45', '2023-05-18 12:38:45');

-- --------------------------------------------------------

--
-- Table structure for table `remote_staffs`
--

CREATE TABLE `remote_staffs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `remote_staffs`
--

INSERT INTO `remote_staffs` (`id`, `title`, `description`, `icon`, `createdAt`, `updatedAt`) VALUES
(4, 'sdfsd 444444', '<p>dssdsd</p>\r\n', 'image-1686743312049-149761177-client1.jpg', '2023-05-26 07:56:14', '2023-06-14 11:49:32');

-- --------------------------------------------------------

--
-- Table structure for table `see_what_we_cans`
--

CREATE TABLE `see_what_we_cans` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `see_what_we_cans`
--

INSERT INTO `see_what_we_cans` (`id`, `title`, `description`, `icon`, `createdAt`, `updatedAt`) VALUES
(2, 'see what we can22', '<p>see what we can22see what we can22see what we can22</p>\r\n', 'image-1686135447714-720071697-expert-team.png', '2023-05-26 07:12:12', '2023-06-07 10:57:27'),
(3, 'om kumar', '<p>see what we can22see what we can22see what we can22see what we can22</p>\r\n', 'product-jpeg-500x500.webp', '2023-05-26 07:12:25', '2023-05-26 07:12:25'),
(4, 'Compliant By Design', '<p>see what we can22see what we can22see what we can22see what we can22see what we can22</p>\r\n', 'product-jpeg-500x500.webp', '2023-05-26 07:12:40', '2023-05-26 07:12:40'),
(6, 'Continuous Monitoring', '<p>&#39;display: inline-block&#39;&#39;display: inline-block&#39;&#39;display: inline-block&#39;&#39;display: inline-block&#39;&#39;display: inline-block&#39;</p>\r\n', 'asset-manag.png', '2023-05-26 07:27:15', '2023-05-26 07:27:15');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20220518055456-create-super-admin.js'),
('20230131050953-create-banner.js'),
('20230202113641-create-contact.js'),
('20230207090547-create-slug.js'),
('20230208072108-create-contact-us.js'),
('20230214051519-ChangeColumTypeBanner.js'),
('20230424060505-add_column_email_in_contact.js'),
('20230426110030-add_summery_in_contact.js'),
('20230518094724-create-our-awesome-team.js'),
('20230518113020-create-how-we-make.js'),
('20230518120158-create-relax-we-have.js'),
('20230518124654-create-happy-customers.js'),
('20230519052107-create-service-banner.js'),
('20230519060051-create-service-main-title-page.js'),
('20230519064532-create-service-box.js'),
('20230519072944-create-industry-banner.js'),
('20230519080310-create-industry-box.js'),
('20230519091820-create-industry-main-title-page.js'),
('20230519110437-create-see-what-we-can.js'),
('20230519112436-create-remote-staff.js'),
('20230519114239-create-ready-to-talk.js'),
('20230519115306-create-we-belive.js'),
('20230519124615-create-gallary-banner.js'),
('20230522044345-create-common-banner.js'),
('20230522051623-create-video.js'),
('20230522060729-create-images.js'),
('20230522063328-create-event.js'),
('20230522074356-create-event-images.js'),
('20230522093710-create-contact-banner.js'),
('20230522102224-changeColumnNameOfContact.js'),
('20230522104658-changeCoulmnInContactUs.js'),
('20230523090355-addColumnInContact.js'),
('20230523091928-changeColumneNameInContact.js'),
('20230525072511-addColumnInHappyCustomer.js'),
('20230526050139-changeDataTypeInBanner.js'),
('20230526120048-create-relax-we.js'),
('20230605051126-addColumnINOurTeam.js'),
('20230607112058-changeDataTypeInContact.js'),
('20230615061035-addColumnInService.js'),
('20230617050620-add_sequence_in_happy_customer.js'),
('20230707062518-create-map-data.js'),
('20230707065026-add_column_in_mapdata.js'),
('20230710095348-migration-skeleton.js'),
('20230710101555-migration-skeleton1.js');

-- --------------------------------------------------------

--
-- Table structure for table `service_banners`
--

CREATE TABLE `service_banners` (
  `id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `service_banners`
--

INSERT INTO `service_banners` (`id`, `image`, `title`, `createdAt`, `updatedAt`) VALUES
(2, 'image-1686141409167-243015843-expert-team.png', ' text       ee    ', '2023-05-19 05:43:09', '2023-06-15 11:34:37');

-- --------------------------------------------------------

--
-- Table structure for table `service_boxes`
--

CREATE TABLE `service_boxes` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `sequence` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `service_boxes`
--

INSERT INTO `service_boxes` (`id`, `title`, `icon`, `description`, `createdAt`, `updatedAt`, `sequence`) VALUES
(1, 'Service Box 123', 'image-1686810349022-394911764-client1.jpg', '<p>Service Box&nbsp;Service Box&nbsp;Service Box&nbsp;Service Box&nbsp;Service Box&nbsp;Service Box&nbsp;Service Box&nbsp;Service Box&nbsp;Service Box&nbsp;Service Box&nbsp;Service Box&nbsp;Service Box&nbsp;Service Box&nbsp;Service Box&nbsp;Service Box&nbsp;Service Box&nbsp;</p>\r\n', '2023-05-19 07:05:09', '2023-06-15 06:34:22', 3),
(4, 'asdasdasd', 'image-1686810274177-830833149-client2.jpg', '<p>wadadasd</p>\r\n', '2023-06-15 06:24:34', '2023-06-15 06:24:34', 1),
(5, 'fdsdf', 'image-1686810481484-159724665-client1.jpg', '<p>dfdsfdsfd</p>\r\n', '2023-06-15 06:28:01', '2023-06-15 06:34:08', 3),
(6, 'sfrefedcsdf', 'image-1686810825973-651858382-client3.jpg', '<p>eqwrwr</p>\r\n', '2023-06-15 06:33:46', '2023-06-15 06:33:46', 2),
(7, 'sfsdf', 'image-1686811168868-658818277-client3.jpg', '<p>qweqwewq</p>\r\n', '2023-06-15 06:39:28', '2023-06-15 06:40:17', 4);

-- --------------------------------------------------------

--
-- Table structure for table `service_main_title_pages`
--

CREATE TABLE `service_main_title_pages` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `service_main_title_pages`
--

INSERT INTO `service_main_title_pages` (`id`, `title`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'service main title page 12 ttttt', 'sfsefefew222eee\r\n       ', '2023-05-19 06:28:19', '2023-06-15 11:34:37');

-- --------------------------------------------------------

--
-- Table structure for table `slugs`
--

CREATE TABLE `slugs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `slugName` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `slugs`
--

INSERT INTO `slugs` (`id`, `title`, `description`, `slugName`, `createdAt`, `updatedAt`) VALUES
(48, 'Privacy Policy', '<p>sess</p>\r\n', 'privacy_policy', '2023-05-26 06:52:35', '2023-06-15 09:41:02');

-- --------------------------------------------------------

--
-- Table structure for table `superadmins`
--

CREATE TABLE `superadmins` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `superadmins`
--

INSERT INTO `superadmins` (`id`, `name`, `email`, `password`, `mobile`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', 'admin@gmail.com', '$2a$10$YKIYBLK1yoEIxHdfBQIIiewF9xUd6UFnPcBHPsK9AdV8gUvx1Wtcm', '7065054288', '2023-01-31 13:19:12', '2023-06-09 10:38:58');

-- --------------------------------------------------------

--
-- Table structure for table `videos`
--

CREATE TABLE `videos` (
  `id` int(11) NOT NULL,
  `video` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `videos`
--

INSERT INTO `videos` (`id`, `video`, `createdAt`, `updatedAt`) VALUES
(2, 'upload_file-1653643607831-560197222-slideshow.webm', '2023-05-23 07:22:24', '2023-05-26 11:11:00');

-- --------------------------------------------------------

--
-- Table structure for table `we_belives`
--

CREATE TABLE `we_belives` (
  `id` int(11) NOT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `we_belives`
--

INSERT INTO `we_belives` (`id`, `icon`, `createdAt`, `updatedAt`) VALUES
(3, 'image-1686301463016-727829294-expert-team.png', '2023-05-19 12:16:03', '2023-06-09 09:04:23'),
(5, 'camera.jpeg', '2023-05-25 04:52:16', '2023-05-25 04:55:04'),
(8, 'expert-team.png', '2023-05-25 05:03:23', '2023-05-25 05:03:23'),
(9, 'Inkastblueshirt.jpg', '2023-05-25 05:05:09', '2023-05-25 05:05:09'),
(10, 'Inkastlightblueshirt.jpg', '2023-05-25 05:07:25', '2023-05-25 05:07:25'),
(11, 'Inkastshirt.jpg', '2023-05-25 05:07:39', '2023-05-25 05:07:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `common_banners`
--
ALTER TABLE `common_banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_banners`
--
ALTER TABLE `contact_banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `event_images`
--
ALTER TABLE `event_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gallary_banners`
--
ALTER TABLE `gallary_banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `happy_customers`
--
ALTER TABLE `happy_customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `how_we_make`
--
ALTER TABLE `how_we_make`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `how_we_makes`
--
ALTER TABLE `how_we_makes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `industry_banners`
--
ALTER TABLE `industry_banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `industry_boxes`
--
ALTER TABLE `industry_boxes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `industry_main_title_pages`
--
ALTER TABLE `industry_main_title_pages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `map_data`
--
ALTER TABLE `map_data`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ourawesometeams`
--
ALTER TABLE `ourawesometeams`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ready_to_talks`
--
ALTER TABLE `ready_to_talks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `relax_wes`
--
ALTER TABLE `relax_wes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `relax_we_haves`
--
ALTER TABLE `relax_we_haves`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `remote_staffs`
--
ALTER TABLE `remote_staffs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `see_what_we_cans`
--
ALTER TABLE `see_what_we_cans`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `service_banners`
--
ALTER TABLE `service_banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `service_boxes`
--
ALTER TABLE `service_boxes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `service_main_title_pages`
--
ALTER TABLE `service_main_title_pages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `slugs`
--
ALTER TABLE `slugs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `superadmins`
--
ALTER TABLE `superadmins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `we_belives`
--
ALTER TABLE `we_belives`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `banners`
--
ALTER TABLE `banners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `common_banners`
--
ALTER TABLE `common_banners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `contact_banners`
--
ALTER TABLE `contact_banners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `contact_us`
--
ALTER TABLE `contact_us`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `event_images`
--
ALTER TABLE `event_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `gallary_banners`
--
ALTER TABLE `gallary_banners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `happy_customers`
--
ALTER TABLE `happy_customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `how_we_make`
--
ALTER TABLE `how_we_make`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `how_we_makes`
--
ALTER TABLE `how_we_makes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `industry_banners`
--
ALTER TABLE `industry_banners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `industry_boxes`
--
ALTER TABLE `industry_boxes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `industry_main_title_pages`
--
ALTER TABLE `industry_main_title_pages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `map_data`
--
ALTER TABLE `map_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `ourawesometeams`
--
ALTER TABLE `ourawesometeams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `ready_to_talks`
--
ALTER TABLE `ready_to_talks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `relax_wes`
--
ALTER TABLE `relax_wes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `relax_we_haves`
--
ALTER TABLE `relax_we_haves`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `remote_staffs`
--
ALTER TABLE `remote_staffs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `see_what_we_cans`
--
ALTER TABLE `see_what_we_cans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `service_banners`
--
ALTER TABLE `service_banners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `service_boxes`
--
ALTER TABLE `service_boxes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `service_main_title_pages`
--
ALTER TABLE `service_main_title_pages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `slugs`
--
ALTER TABLE `slugs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `superadmins`
--
ALTER TABLE `superadmins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `videos`
--
ALTER TABLE `videos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `we_belives`
--
ALTER TABLE `we_belives`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
