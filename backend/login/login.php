<?php
include("../db.php");
session_start();

try {
	$email = $_POST['email'];
	$password = $_POST['password'];

	$sql = "SELECT `password`, `user_type` FROM `login` WHERE `email` = :email";
	$stmt = $conn->prepare($sql);
	$stmt->bindParam(':email', $email);
	$stmt->execute();
	$passRow = $stmt->fetchObject();
	if($passRow) {
		$pass = $passRow->password;
		if ($pass == $password) {
			$_SESSION['email'] = $email;
			$_SESSION['user_type'] = $passRow->user_type;
			echo "success";
		} else {
			echo "Incorrect Password!";
		}
	} else {
		echo "User does not exist";
	}
} catch (PDOException $e) {
	echo $e;
}

$conn = NULL;
