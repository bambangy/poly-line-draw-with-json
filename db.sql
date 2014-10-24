-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Inang: localhost
-- Waktu pembuatan: 19 Apr 2014 pada 13.56
-- Versi Server: 5.5.24-log
-- Versi PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Basis data: `test_map`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `polyline`
--

CREATE TABLE IF NOT EXISTS `polyline` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `number` int(10) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `lat` varchar(100) DEFAULT NULL,
  `lng` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data untuk tabel `polyline`
--

INSERT INTO `polyline` (`id`, `number`, `name`, `lat`, `lng`) VALUES
(1, 1, 'Point 1', '-6.009459', '106.048279'),
(2, 2, 'Point 2', '-6.12417', '106.158142'),
(3, 3, 'Point 3', '-6.217012', '106.608582'),
(4, 4, 'Point 4', '-6.222473', '106.861267'),
(5, 5, 'Point 5', '-6.271618', '107.135925');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
