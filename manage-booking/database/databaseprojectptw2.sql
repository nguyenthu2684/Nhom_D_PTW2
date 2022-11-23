-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 15, 2022 at 04:29 PM
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
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
CREATE TABLE IF NOT EXISTS `category` (
  `idCate` int NOT NULL AUTO_INCREMENT,
  `nameCate` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `describeCate` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`idCate`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`idCate`, `nameCate`, `describeCate`) VALUES
(1, 'Y khoa', 'Tổng hợp những thông tin về y học hiện đại, cổ truyền cùng với sự kếnt hợp đồng tây y, những tin tức mới nhất về các diễn biến, dịch bệnh hay sự phát triển của các mầm mống bệnh mới. Những công tác phát hiện tìm hiểu và chế tạo vacxin phòng và chữa bệnh'),
(2, 'Xã hội', 'Cập nhật những thông tin xã hội mới nhất ảnh hưởng đến nền kinh tế, khoa học, y khoa trên Thế Giới');

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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
CREATE TABLE IF NOT EXISTS `post` (
  `idPost` int NOT NULL AUTO_INCREMENT,
  `namePost` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `idCate` int NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `createPost` date NOT NULL,
  PRIMARY KEY (`idPost`),
  KEY `FK_IdCate` (`idCate`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`idPost`, `namePost`, `idCate`, `content`, `img`, `createPost`) VALUES
(1, 'Tạp chí Y học Cộng đồng', 1, '   Tạp chí Y học Cộng đồng (Journal of Community Medicine) là Tạp chí học thuật trong lĩnh vực Y học, có bình duyệt của Viện sức Khỏe Cộng đồng-Tổng hội Y học Việt Nam. Tạp chí là diễn đàn khoa học cho các học viên, nghiên cứu sinh, giảng viên, nhà khoa học trong và ngoài nước công bố, trao đổi nghiên cứu và học thuật trong khối ngành sức khỏe.\r\n\r\n   Tạp chí được Bộ TTTT cấp phép xuất bản từ năm 2013 bằng ngôn ngữ tiếng việt và tiếng Anh, được Hội đồng chức danh Giáo sư nhà nước và khối ngành sức khỏe đưa vào danh sách các tạp chí khoa học được tính điểm công trình. Đây là tạp chí khoa học uy tín, có bình duyệt, công bố những công trình nghiên cứu gốc, bài tổng quan,  bài bình luận, bài giới thiệu sách, tài liệu và những tin tức, sự kiện liên quan đến tất cả các khía cạnh trong lĩnh vực nghiên cứu, phổ biến chính sách, giáo dục, thực hành, đào tạo, trong lĩnh vực y dược học, y học lâm sàng, y học dự phòng và y tế công cộng.\r\n\r\n   Tạp chí Y học Cộng đồng đã được chấp nhận làm thành viên của tổ chức Crossref – Cơ quan đăng ký nhận dạng đối tượng kỹ thuật số (Digital Object Identifier – DOI) và chính thức của tổ chức DOI quốc tế (International DOI Foundation). Việc này cho phép kết nối các bài báo xuất bản trên tạp chí với mạng lưới toàn cầu gồm 15.072 thành viên từ 118 quốc gia trên thế giới. Tất cả các bài báo được xuất bản sẽ được gắn mã DOI nhằm tăng cường tính dễ tìm kiếm, truy cập, kết nối, trích dẫn của các công trình được công bố trên tạp chí.\r\n\r\nGiấy phép hoạt động báo chí in số 229/GP-BTTTT cấp ngày 19/6/2013\r\nTần suất phát hành: 06 số/năm (không bao gồm số tiếng Anh, phụ bản, số chuyên đề)\r\nNgôn ngữ xuất bản: Tiếng Việt và Tiếng Anh\r\nISSN: 2354 - 0613\r\nDOI prefix: 10.52163\r\nWebside: tapchiyhcd.vn ', '', '2022-11-15'),
(2, 'Nghiên cứu y học ở Việt Nam: Đặc điểm, thiếu sót, và sai sót', 1, '   Sự có mặt của y học Việt Nam trên trường quốc tế còn rất khiêm tốn, bởi vì phần lớn các nghiên cứu y học ở Việt Nam được công bố trong các tạp chí y học trong nước. Trong một phân tích tổng hợp gần đây của tác giả Phạm Duy Hiển, trong thời gian 1995 đến 2004, trung bình hàng năm giới nghiên cứu y khoa Việt Nam công bố khoảng 1000 bài báo y sinh học trong các tập san y học trong và ngoài nước; trong số này chỉ có 5 bài trong các tập san y học quốc tế [1]. Nói cách khác, chỉ có khoảng 0,5% nghiên cứu y học từ Việt Nam có mặt trên các diễn đàn y học quốc tế. Con số này còn rất khiêm tốn nếu so với các nước lân cận như Thái Lan hay Mã Lai.\r\n\r\nCó nhiều lí do tại sao các nghiên cứu chỉ công bố trên các tạp chí địa phương, kể cả sự liên quan của nghiên cứu đối với tình hình và bối cảnh Việt Nam, soạn thảo bằng tiếng Việt, hay không được chấp nhận cho công bố trên các tập san quốc tế. Nhưng hoạt động khoa học là một lĩnh vực phi biên giới, cho nên dù là nghiên cứu từ Việt Nam, nhưng nếu các nghiên cứu có chất lượng tốt (như ý tưởng mới hay phương pháp nghiên cứu đúng tiêu chuẩn khoa học) thì các nghiên cứu đó vẫn có giá trị khoa học, và vẫn có thể xuất hiện trong các tập san y học quốc tế. Do đó, vấn đề chất lượng các nghiên cứu đã công bố trong các tạp chí y học ở Việt Nam cần được đặt ra để tìm một hướng đi tích cực hơn.\r\n\r\nNgười viết bài này đã điểm qua một số bài báo khoa học xuất hiện trong các tạp chí y học thuộc trường Đại học Y Hà Nội, Đại học Y Dược Thành phố Hồ Chí Minh, Tạp chí Y học thực hành, Tạp chí Nghiên cứu Y học, và Tạp chí Dược học. Các bài báo này được công bố trong khoảng thời gian từ 2001 đến 2006. Trong mỗi số và mỗi tạp chí, tôi ngẫu nhiên chọn ra 3 bài ở mục “nghiên cứu y học” (hay tương tự). Tất cả có 56 bài được chọn, và tôi đọc tất cả và ghi chú những điểm cần lưu ý về ý tưởng, phương pháp và cách trình bày kết quả nghiên cứu.\r\n\r\nĐiểm qua các bài báo này, tôi thấy các nhiều nhà nghiên cứu trong nước đã có những công trình nghiên cứu có ích với ý tưởng hay, có thể ứng dụng vào việc chăm sóc bệnh nhân. Chẳng hạn như những công trình nghiên cứu về HIV và so sánh phương pháp xét nghiệm sinh hóa (do các nhà nghiên cứu thuộc Đại học Y Dược TPHCM tiến hành) hay nghiên cứu về độ tuổi mãn kinh và các yếu tố liên quan đến mãn kinh (Đại học Y Hà Nội) mà kết quả rất thú vị và có thể khai triển thêm thành một nghiên cứu có ích cho bệnh nhân. Ngoài ra, còn có một số nghiên cứu mang tính phát triển phương pháp xét nghiệm và chẩn đoán mới với kết quả rất đáng khích lệ. Trong điều kiện hạn hẹp kinh phí và cơ sở vật chất mà các đồng nghiệp trong nước đã tiến hành những nghiên cứu qui mô lớn và công phu như thế quả là một nỗ lực đáng trân trọng. Tôi thiết nghĩ những công trình như thế đáng lẽ phải có mặt trong các tập san y học uy tín trên thế giới, nhưng rất tiếc điều đó chưa xảy ra.\r\n\r\nVấn đề đặt ra là tại sao các nghiên cứu như thế không có mặt trên các diễn đàn y học quốc tế? Điểm qua các nghiên cứu này một cách cẩn thận, tôi cho rằng nguyên nhân là do thiết kế nghiên cứu chưa được thỏa đáng và chưa có hệ thống. Ngoài ra, còn có rất nhiều nghiên cứu với khá nhiều thiếu sót và sai lầm, vì khiếm khuyết trong phương pháp nghiên cứu và do đó chất lượng không mấy cao. Có khi những thiếu sót và sai lầm này rất nghiêm trọng đến độ kết quả nghiên cứu rất khó diễn dịch, và có thể nói là không có giá trị khoa học gì cả. Trong bài viết này, tôi sẽ nêu lên một số thiếu sót phổ biến nhất và sẽ đưa ra một số đề nghị để nâng cao chất lượng nghiên cứu y học ở trong nước.', '', '2022-11-15'),
(3, 'Công ty KCD Việt Nam chậm đóng BHXH cho người lao động', 2, 'Theo đó, Chủ tịch UBND tỉnh Bắc Giang vừa ban hành Quyết định xử phạt vi phạm hành chính trong lĩnh vực Bảo hiểm xã hội đối với Công ty TNHH KCD Việt Nam.\nCụ thể, qua kiểm tra, Đoàn thanh tra phát hiện Công ty TNHH KCD Việt Nam chậm đóng BHXH bắt buộc, BHTN. Tại thời điểm lập Biên bản vi phạm hành chính (hồi 16h00’ ngày 26/9/2022), tổng số tiền BHXH bắt buộc, BHTN Công ty phải đóng là gần 2,5 tỷ đồng, chưa bao gồm tiền lãi chậm đóng, nhưng Công ty chưa đóng.\n\nBên cạnh đó, Đoàn thanh tra phát hiện Công ty TNHH KCD Việt Nam đóng BHYT không đủ số tiền phải đóng (tổng số tiền phải đóng là gần 350 triệu đồng), chưa bao gồm tiền lãi, nhưng Công ty chưa đóng.\n\nTừ những vi phạm trên, Công ty TNHH KCD Việt Nam đã bị xử phạt số tiền 220 triệu đồng. Đồng thời, UBND tỉnh Bắc Giang yêu cầu Công ty TNHH KCD Việt Nam phải thực hiện các biện pháp khắc phục hậu quả, đóng đủ số tiền BHXH bắt buộc, BHTN phải đóng cho cơ quan BHXH số tiền gần 2,5 tỷ đồng. Đồng thời nộp khoản tiền lãi bằng 2 lần mức lãi suất đầu tư quỹ BHXH bình quân của năm trước liền kề tính trên số tiền, thời gian không đóng.\n\nCông ty phải nộp toàn bộ số tiền BHYT chưa đóng đối với cơ quan BHXH, số tiền gần 350 triệu đồng và số tiền lãi của số tiền BHYT đóng thiếu bằng 2 lần mức lãi suất thị trường liên ngân hàng...\n', 'undefined', '0000-00-00');

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
-- Constraints for table `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `FK_IdCate` FOREIGN KEY (`idCate`) REFERENCES `category` (`idCate`) ON DELETE RESTRICT ON UPDATE RESTRICT;

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
