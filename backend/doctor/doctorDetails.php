<?php
include("../session.php");
include("../db.php");

try {
	$email = $_SESSION['email'];
	$loadDoctorSQL = 'SELECT * FROM `doctor` WHERE `email` = :email';
	$loadDoctorSTMT = $conn->prepare($loadDoctorSQL);
	$loadDoctorSTMT->bindParam(':email', $email);
	$loadDoctorSTMT->execute();
	$doctor = $loadDoctorSTMT->fetchObject();

	echo json_encode($doctor);
} catch (PDOException $e) {
	echo $e;
}

$conn = NULL;
