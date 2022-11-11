-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 10, 2022 at 07:12 AM
-- Server version: 8.0.21
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `databaseprojectptw2`
--

-- --------------------------------------------------------

--
-- Table structure for table `drug`
--

DROP TABLE IF EXISTS `drug`;
CREATE TABLE IF NOT EXISTS `drug` (
  `idDrug` int NOT NULL AUTO_INCREMENT,
  `name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `medicine` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `instructions` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` int NOT NULL,
  `type` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`idDrug`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `drug`
--

INSERT INTO `drug` (`idDrug`, `name`, `medicine`, `instructions`, `amount`, `type`) VALUES
(1, '(Itoprid) Ibutop 50 50mg', 'Sáng uống 1.00, Trưa uống 1.00, Chiều uống 1.00', 'Uống trước ăn', 3, 'Viên'),
(2, '(Betahistin) Be-Stedy 24 24mg', 'Sáng uống 1.00,  Chiều uống 1.00', 'Uống sau ăn', 2, 'Viên'),
(3, '(Piracetam) LIFECITA 400 400mg', 'Sáng uống 1.00, Trưa uống 1.00, Chiều uống 1.00', 'Uống sau ăn', 3, 'Viên'),
(4, '(Magnesi trisilicat) ALUSI 2,5g 1,25g + 0,625g', 'Sáng uống 1.00, Trưa uống 1.00, Chiều uống 1.00', 'Uống sau ăn 1 giờ', 3, 'Gói'),
(5, '(L-Cystine 500mg) BLUEMINT ', 'Sáng uống 1.00, Chiều uống 1.00', 'Uống sau ăn', 2, 'Viên'),
(6, '(Paracetamol (acetaminophen)) Partamol Tab 500mg ', 'Sáng uống 1.00, Trưa uống 1.00, Chiều uống 1.00', 'Uống sau ăn', 3, 'Viên'),
(7, '(Mebevẻin hydroclỏid) Verimed 135mg 135mg', 'Sáng uống 1.00, Trưa uống 1.00, Chiều uống 1.00', 'Uống sau ăn', 3, 'Viên');

-- --------------------------------------------------------

--
-- Table structure for table `examination_card`
--

DROP TABLE IF EXISTS `examination_card`;
CREATE TABLE IF NOT EXISTS `examination_card` (
  `idCard` int NOT NULL AUTO_INCREMENT,
  `idUser` int NOT NULL,
  `dateCreate` datetime NOT NULL,
  `dateMedicalExamination` datetime NOT NULL,
  PRIMARY KEY (`idCard`),
  KEY `Fk_idUser` (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `examination_card`
--

INSERT INTO `examination_card` (`idCard`, `idUser`, `dateCreate`, `dateMedicalExamination`) VALUES
(2, 3, '2022-11-09 20:49:54', '2022-11-15 15:49:54'),
(3, 4, '2022-11-09 20:50:36', '2022-11-14 20:50:36'),
(5, 5, '2022-11-09 20:51:01', '2022-11-10 20:51:01'),
(6, 6, '2022-11-04 00:22:34', '2022-11-11 08:50:00');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
CREATE TABLE IF NOT EXISTS `login` (
  `idUser` int NOT NULL,
  `pass` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`idUser`, `pass`) VALUES
(7, '123456');

-- --------------------------------------------------------

--
-- Table structure for table `medical_tests`
--

DROP TABLE IF EXISTS `medical_tests`;
CREATE TABLE IF NOT EXISTS `medical_tests` (
  `idCard` int NOT NULL,
  `primaryKeyVirtual` int NOT NULL AUTO_INCREMENT,
  `idTest` int NOT NULL,
  PRIMARY KEY (`primaryKeyVirtual`),
  KEY `Fk_idTest` (`idTest`),
  KEY `Fk_idCard` (`idCard`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `prescription`
--

DROP TABLE IF EXISTS `prescription`;
CREATE TABLE IF NOT EXISTS `prescription` (
  `idCard` int NOT NULL,
  `primaryKeyVirtual` int NOT NULL AUTO_INCREMENT,
  `idDrug` int NOT NULL,
  PRIMARY KEY (`primaryKeyVirtual`),
  KEY `idCardFK` (`idCard`),
  KEY `Fk_idDrug` (`idDrug`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `prescription`
--

INSERT INTO `prescription` (`idCard`, `primaryKeyVirtual`, `idDrug`) VALUES
(5, 1, 1),
(5, 2, 2),
(5, 3, 3),
(5, 4, 4);

-- --------------------------------------------------------

--
-- Table structure for table `specialist`
--

DROP TABLE IF EXISTS `specialist`;
CREATE TABLE IF NOT EXISTS `specialist` (
  `idSpecialist` int NOT NULL AUTO_INCREMENT,
  `name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `describe` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`idSpecialist`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `specialist`
--

INSERT INTO `specialist` (`idSpecialist`, `name`, `describe`, `image`) VALUES
(1, 'Cơ Xương Khớp', 'Bác sĩ Cơ Xương Khớp giỏi\r\nDanh sách các bác sĩ uy tín đầu ngành Cơ Xương Khớp tại Việt Nam:\r\n\r\nCác chuyên gia có quá trình đào tạo bài bản, nhiều kinh nghiệm\r\nCác giáo sư, phó giáo sư đang trực tiếp nghiên cứu và giảng dạy tại Đại học Y khoa Hà Nội\r\nCác bác sĩ đã, đang công tác tại các bệnh viện hàng đầu Khoa Cơ Xương Khớp - Bệnh viện Bạch Mai, Bệnh viện Hữu nghị Việt Đức,Bệnh Viện E.\r\nLà thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hiệp hội Cơ Xương Khớp, Hội Thấp khớp học,...\r\nĐược nhà nước công nhận các danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...\r\nBệnh Cơ Xương Khớp\r\nGout\r\nThoái hóa khớp: khớp gối, cột sống thắt lưng, cột sống cổ\r\nViêm khớp dạng thấp, Viêm đa khớp, Viêm gân\r\nTràn dịch khớp gối, Tràn dịch khớp háng, Tràn dịch khớp khủy, Tràn dịch khớp vai\r\nLoãng xương, đau nhức xương\r\nViêm xương, gai xương\r\nViêm cơ, Teo cơ, chứng đau mỏi cơ\r\nYếu cơ, Loạn dưỡng cơ\r\nCác chấn thương về cơ, xương, khớp\r\n...', NULL),
(2, 'Thần kinh', 'Danh sách các giáo sư, bác sĩ chuyên khoa Thần kinh giỏi:\r\n\r\nCác giáo sư, bác sĩ uy tín đầu ngành chuyên khoa Thần kinh đã và đang công tác tại các bệnh viện lớn như: Bệnh viện Bạch Mai, Bệnh viện Việt Đức, Bệnh viện 108, Bệnh viện Đại học Y Hà Nội, Bệnh viện 103.\r\nLà thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hội Thần kinh Việt Nam, Hội Phẫu thuật Thần kinh...\r\nĐược nhà nước công nhận các danh hiệu Thầy thuốc nhân dân, thầy thuốc ưu tú, bác sĩ cao cấp.\r\nKhám bệnh chuyên khoa Thần kinh\r\nBại Não   \r\nĐau đầu, chóng mặt, buồn nôn   \r\nBệnh Pakison, bệnh tiền đình   \r\nBị co cơ, căng dây thần kinh       \r\nĐộng kinh, có những cơn vãng ý thức   \r\nBị tê bì nửa mặt, chèn dây thần kinh\r\nBồn chồn, lo lắng, hồi hộp, chân tay run   \r\nCó dấu hiệu tăng động    \r\nCo rút cổ, đau đầu với mặt, chân tay, vã mồ hôi   \r\nChấn thương đầu, dây thần kinh\r\n...', NULL),
(3, 'Tiêu hoá', 'Bác sĩ Chuyên khoa Tiêu hóa\r\nDanh sách các bác sĩ Tiêu hóa uy tín đầu ngành tại Việt Nam:\r\n\r\nCác chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn về chuyên ngành Tiêu hóa tại Hà Nội\r\nCác giáo sư, phó giáo sư là giảng viên Đại học Y khoa Hà Nội\r\nCác bác sĩ đã, đang công tác tại các bệnh viện hàng đầu như Bệnh viện Bạch Mai, Bệnh Viện Việt Đức, Bệnh Viện Nhi Trung ương, Bệnh viện Y học Cổ truyền Việt Nam...\r\nĐược nhà nước công nhận các danh hiệu Thầy thuốc nhân dân, thầy thuốc ưu tú, bác sĩ cao cấp,...\r\nTư vấn, khám và điều trị các Bệnh Tiêu hóa\r\n\r\nĂn uống kém, không ngon\r\nRối loạn tiêu hóa, táo bón, trĩ\r\nNhiễm vi khuẩn HP (Helicobacter pylori)\r\nNội soi dạ dày, đại tràng, tiêu hóa\r\nBuồn nôn, chướng bụng, đầy bụng ợ chua, đầy hơi\r\nCo thắt thực quản, Hội chứng ruột kích thích\r\nĐau bụng, dạ dày, đại tràng, thượng vị\r\nViêm đại tràng, dạ dày, tá tràng\r\nUng thư dạ dày, U nang tuyến tụy\r\nBệnh lý về gan, mật\r\n...', NULL),
(4, 'Tim mạch', 'Bác sĩ tim mạch giỏi\r\nDanh dách các bác sĩ tim mạch uy tín đầu ngành tại Việt Nam:\r\n\r\nCác chuyên gia được đào tạo bài bản về chuyên ngành Tim mạch tại các trường đại học trong nước và quốc tế.\r\nCác giáo sư, phó giáo sư nghiên cứu và giảng dạy tại Đại học Y Hà Nội\r\nCác bác sĩ đã, đang công tác tại các bệnh viện hàng đầu như Viện Tim Mạch Quốc Gia, Bệnh viện Bạch Mai, Bệnh viện Việt Đức, Bệnh Viện E, Bệnh Viện Tim Hà Nội\r\nLà thành viên hoặc lãnh đạo các tổ chức chuyên môn như: Hiệp hội Tim Mạch Việt Nam\r\nĐạt danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...\r\nKhám tư vấn tim mạch\r\n\r\nKhó thở, Đau ngực, đau tim\r\nTăng huyết áp, hạ huyết áp\r\nRối loạn mỡ máu, cao huyết áp, chóng mặt\r\nBệnh van tim (Hẹp hở van tim), Hẹp động mạch chủ\r\nCảm giác hồi hộp, tim đập nhanh   \r\nTim bẩm sinh, có tiền sử bệnh tim to, tiền sử tai biến   \r\nĐã đặt stent tim, nong động mạch vành\r\nGiãn tĩnh mạch chân   \r\n...', NULL),
(5, 'Tai Mũi Họng', 'Bác sĩ Chuyên khoa Tai Mũi Họng\r\nDanh sách các bác sĩ uy tín đầu ngành tại Việt Nam:\r\n\r\nCác chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn về chuyên ngành Tai Mũi Họng tại Hà Nội\r\nCác giáo sư, phó giáo sư là giảng viên Đại học Y khoa Hà Nội\r\nCác bác sĩ đã, đang công tác tại các bệnh viện hàng đầu như Bệnh viện Bạch Mai, Bệnh Viện Tai Mũi Họng Trung ương, Bệnh viện Quân Y 108...\r\nĐược nhà nước công nhận các danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ cao cấp,...\r\nCác bệnh Tai Mũi Họng\r\n\r\nÙ tai, đau tai, chảy máu tai\r\nThủng màng nhĩ, điếc đột ngột\r\nViêm tai giữa\r\nAmidan, V.A\r\nViêm xoang\r\nNghẹt mũi\r\nHay bị chảy máu cam\r\nĐau cổ họng, khó nuốt\r\nHo kéo dài\r\nNgủ ngáy\r\n...', NULL),
(6, 'Cột sống', 'Bác sĩ Chuyên khoa Cột sống\r\nDanh sách các bác sĩ Cột sống uy tín đầu ngành tại Việt Nam.\r\n\r\nCác chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn về chuyên khoa Thần kinh - Cột sống - Xương khớp tại Hà Nội\r\nCác giáo sư, tiến sĩ, bác sĩ là giảng viên Đại học Y khoa Hà Nội, Học viện Quân Y.\r\nCác bác sĩ đã, đang công tác tại chuyên Khoa Thần Kinh, Cột sống, Xương Khớp - Bệnh viện Bạch Mai, Bệnh Viện Việt Đức, Bệnh Viện Trung ương Quân đội 108, Bệnh viện 103...\r\nĐược nhà nước công nhận các danh hiệu Thầy thuốc Nhân dân, Thầy thuốc Ưu tú, Bác sĩ Cao cấp,...\r\nBệnh Thần kinh - Cột sống\r\n\r\nĐau cột sống, đau thắt lưng\r\nChấn thương cột sống\r\nCột sống bị đau, sưng, cong, vẹo\r\nĐau mỏi cổ vai gáy, bả vai\r\nĐau tê mông xuống chân\r\nPhồng đĩa đệm\r\nTê bì tay chân\r\nThóa hóa đốt sống\r\nThoái hóa L4, L5\r\nThoát vị đĩa đệm\r\nVôi hóa cột sống\r\nXẹp cột sống\r\n...', NULL),
(7, 'Y học Cổ truyền', 'Bác sĩ Y học Cổ truyền giỏi\r\nDanh sách các bác sĩ Y học Cổ truyền uy tín đầu ngành tại Việt Nam:\r\nCác chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn về chuyên khoa Y học Cổ truyền\r\nCác bác sĩ đã, đang công tác tại chuyên Khoa Y học Cổ truyền - Bệnh viện Y học Cổ truyền Trung ương, Bệnh viện Bạch Mai, Thanh Nhàn..\r\nĐược nhà nước công nhận các danh hiệu Thầy thuốc nhân dân, thầy thuốc ưu tú, bác sĩ cao cấp,..\r\nTư vấn, khám và điều trị các vấn đề:\r\n\r\nBệnh lý thần kinh: đau đầu, mất ngủ, suy nhược thần kinh...\r\nBệnh lý cơ xương khớp: đau mỏi tay chân, thoái hóa khớp, viêm khớp...\r\nBệnh lý tim mạch: Tăng huyết áp, huyết áp thấp, đau thắt ngực...\r\nBệnh lý đường tiêu hóa: đau bụng, rối loạn chức năng tiêu hóa...', NULL),
(8, 'Châm cứu', 'Bác sĩ Châm cứu giỏi\r\n\r\nBác sĩ Y học Cổ truyền uy tín đầu ngành tại Việt Nam:\r\n\r\nCác chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn về chuyên khoa Y học Cổ truyền\r\nCác bác sĩ đã, đang công tác tại chuyên Khoa Y học Cổ truyền - Bệnh viện Y học Cổ truyền Trung ương, Bệnh viện Bạch Mai, Thanh Nhàn..\r\nĐược nhà nước công nhận các danh hiệu Thầy thuốc nhân dân, thầy thuốc ưu tú, bác sĩ cao cấp,..\r\nTư vấn, khám và điều trị các vấn đề:\r\n\r\nBệnh lý thần kinh: đau đầu, mất ngủ, suy nhược thần kinh...\r\nBệnh lý cơ xương khớp: đau mỏi tay chân, thoái hóa khớp, viêm khớp...\r\nBệnh lý tim mạch: Tăng huyết áp, huyết áp thấp, đau thắt ngực...\r\nBệnh lý đường tiêu hóa: đau bụng, rối loạn chức năng tiêu hóa...', NULL),
(9, 'Sản Phụ khoa', 'Bác sĩ Sản phụ khoa\r\nBookingCare cung cấp thông tin và lịch khám của các bác sĩ chuyên khoa sản giỏi tại Hà Nội.\r\n\r\n Các chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn về chuyên ngành Sản phụ khoa tại Hà Nội\r\nCác chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn tại Hà Nội như: Bệnh viện Phụ sản Trung ương, Bệnh viện Phụ sản Hà Nội, Khoa Sản - Bệnh viện Bạch Mai.\r\nKhám và điều trị\r\n\r\nRối loạn kinh nguyệt, chậm kinh, đau bụng kinh   \r\nTắc hai vòi trứng, Đa nang buồng trứng, Chụp vòi trứng,       \r\nKhám hiếm muộn, vô sinh   \r\nKhám Phụ Khoa   \r\nKhám thai sản   \r\nKhám tiền hôn nhân, Tiền sinh   \r\nKiểm tra phụ khoa   \r\nLoạn dưỡng vú   \r\nRong kinh kéo dài   \r\nSiêu âm thai định kỳ   \r\nThai lưu\r\nU xơ tử cung, Viêm lộ tuyến\r\n...\r\n', NULL),
(10, 'Nhi khoa', 'Bác sĩ chuyên khoa Nhi \r\nDanh sách bác sĩ chuyên khoa Nhi giỏi:\r\n\r\nCác chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn tại Hà Nội\r\nCác giảng viên đã và đang trực tiếp nghiên cứu và giảng dạy tại Đại học Y khoa Hà Nội\r\nCác bác sĩ đã, đang công tác tại các bệnh viện hàng đầu như: Bệnh viện Nhi Trung ương, Khoa Nhi - Bệnh viện Bạch Mai.\r\nKhám và điều trị\r\n\r\nBệnh lý sơ sinh\r\nBệnh tiêu hóa\r\nBệnh tuần hoàn\r\nBệnh hô hấp\r\nBệnh huyết học\r\nBệnh thận Tiết niệu\r\nBệnh thần kinh\r\nBệnh ngoài da\r\nBệnh xương khớp', NULL),
(11, 'Da liễu', 'Bác sĩ Chuyên khoa Da liễu\r\nBookingCare cung cấp thông tin và lịch khám của các bác sĩ chuyên khoa da liễu giỏi tại Hà Nội.\r\n\r\nCác chuyên gia có quá trình đào tạo bài bản, kinh nghiệm công tác tại các bệnh viện lớn tại Hà Nội như: Bệnh viện Da liễu Trung ương, Bệnh viện Da liễu Hà Nội\r\n\r\nKhám và điều trị\r\nBệnh vẩy nến, Da khô, Ngứa da\r\nRám tàn nhang\r\nMụn cóc sinh dục\r\nNấm cơ thể, Nấm da đầu\r\nNấm móng tay, móng chân\r\nRụng tóc, hói đầu\r\nViêm da dị ứng, Viêm da tiếp xúc, Viêm da tiết bã\r\nViêm nang lông\r\nXơ cứng bì\r\nZona thần kinh', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `specialist_doctor`
--

DROP TABLE IF EXISTS `specialist_doctor`;
CREATE TABLE IF NOT EXISTS `specialist_doctor` (
  `idCard` int NOT NULL,
  `consulting` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `node` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`idCard`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `specialist_doctor`
--

INSERT INTO `specialist_doctor` (`idCard`, `consulting`, `node`) VALUES
(5, ' ', 'Tái khám sau7 ngày'),
(6, 'đau bao tử', 'Tái khám sau 7 ngày');

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

DROP TABLE IF EXISTS `test`;
CREATE TABLE IF NOT EXISTS `test` (
  `idTest` int NOT NULL AUTO_INCREMENT,
  `nameTest` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `room` int NOT NULL,
  PRIMARY KEY (`idTest`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`idTest`, `nameTest`, `room`) VALUES
(1, 'Xét nghiệm máu', 101),
(2, 'Xét nghiệm sinh hóa máu', 102),
(3, 'Xét nghiệm nước tiểu', 103),
(4, 'Xét nghiệm tầm soát ung thư như', 104),
(5, 'Xét nghiệm nội tiết tố', 105),
(6, 'Xét nghiệm kiểm tra chức năng tuyến giáp', 106),
(7, 'Xét nghiệm vi sinh', 107),
(8, 'Siêu âm', 108),
(9, 'Siêu âm màu', 108),
(10, 'Nội soi dạ dày - thực quản', 109),
(11, 'Nội soi soang', 1010);

-- --------------------------------------------------------

--
-- Table structure for table `update_information_doctor`
--

DROP TABLE IF EXISTS `update_information_doctor`;
CREATE TABLE IF NOT EXISTS `update_information_doctor` (
  `idUser` int NOT NULL,
  `idSpecialist` int NOT NULL,
  `describe` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`idUser`),
  KEY `Fk_idSpecialist` (`idSpecialist`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `update_information_doctor`
--

INSERT INTO `update_information_doctor` (`idUser`, `idSpecialist`, `describe`) VALUES
(2, 2, 'Nguyên Phó Giám đốc Bệnh viện Quân y 103\r\nChuyên gia về Thần kinh Sọ não và Cột sống\r\nNguyên Phó chủ tịch Hội Phẫu thuật Thần kinh Việt Nam\r\nBác sĩ khám cho người bệnh từ 13 tuổi trở lên'),
(7, 3, 'Chuyên gia trên 35 năm kinh nghiệm trong lĩnh vực bệnh lý Tiêu hóa\nChuyên gia đầu ngành trong lĩnh vực bệnh lý Tiêu hóa\nNguyên Giám đốc Bệnh viện Đại học Y Hà Nội\nBác sĩ khám cho người bệnh từ 3 tuổi trở lên');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `idUser` int NOT NULL AUTO_INCREMENT,
  `userName` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `fullName` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `birthday` date NOT NULL,
  `gender` int NOT NULL,
  `address` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` int NOT NULL,
  PRIMARY KEY (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`idUser`, `userName`, `fullName`, `email`, `phone`, `birthday`, `gender`, `address`, `image`, `role`) VALUES
(1, 'admin', 'admin', 'admin@gmail.com', '0123456789', '2000-10-05', 1, 'Biên Hòa', '', 1),
(2, 'nguyenthu2684', 'Nguyễn Thư', 'hoangpro22@gmail.com@gmail.com', '0388302796', '1991-06-02', 1, 'Biên Hòa', '', 2),
(3, 'vinguyen2272', 'Nguyễn Vi', 'vi.nguyen2272.com@gmail.com', '0795678647', '2005-02-06', 1, 'TP HCM', '', 3),
(4, 'ngocyentxrt', 'Trần Ng Yến', 'ngocyentxrt021201@gmail.com', '0382019864', '2001-12-02', 1, 'Quảng Ngãi', '', 3),
(5, 'khoangayngo', 'Ngô Quang Khoa', 'ngoquangkhoanqk@gmail.com', '0364689715', '2001-02-08', 0, 'Biên Hòa', '', 3),
(6, 'baobao', 'Nguyễn Đình Bảo', 'ndb6272@gmail.com', '0566423058', '2002-07-06', 0, '', '3', 0),
(7, 'banhbao0612', 'Lưu Minh Thùy', 'thuynhi0607@gmail.com', '0566423058', '2000-06-02', 1, 'Nghệ An', ' ', 2);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `examination_card`
--
ALTER TABLE `examination_card`
  ADD CONSTRAINT `Fk_idUser` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `login`
--
ALTER TABLE `login`
  ADD CONSTRAINT `idUser_RK` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `medical_tests`
--
ALTER TABLE `medical_tests`
  ADD CONSTRAINT `Fk_idCard` FOREIGN KEY (`idCard`) REFERENCES `examination_card` (`idCard`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `Fk_idTest` FOREIGN KEY (`idTest`) REFERENCES `test` (`idTest`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `prescription`
--
ALTER TABLE `prescription`
  ADD CONSTRAINT `Fk_idDrug` FOREIGN KEY (`idDrug`) REFERENCES `drug` (`idDrug`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `idCardFK` FOREIGN KEY (`idCard`) REFERENCES `examination_card` (`idCard`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `specialist_doctor`
--
ALTER TABLE `specialist_doctor`
  ADD CONSTRAINT `idCard` FOREIGN KEY (`idCard`) REFERENCES `examination_card` (`idCard`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `update_information_doctor`
--
ALTER TABLE `update_information_doctor`
  ADD CONSTRAINT `Fk_idSpecialist` FOREIGN KEY (`idSpecialist`) REFERENCES `specialist` (`idSpecialist`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `idUser` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
