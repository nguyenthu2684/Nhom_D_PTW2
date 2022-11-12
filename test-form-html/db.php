<?php
$servername = "localhost";
$database = "databaseprojectptw2";
$username = "root";
$password = "";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";

$sql = "SELECT * FROM `users`";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
// Load dữ liệu lên website
while($row = $result->fetch_assoc()) { echo "idUser: " . $row["idUser"]. " - userName : " . $row["userName"]. " " . $row["fullName"]. " - Email: ". $row["email"]. "<br>";
}
} else {
echo "0 results";
}
// $conn->close();
mysqli_close($conn);


?>