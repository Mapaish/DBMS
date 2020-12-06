<?php
//include("../../session.php");
include("../../db.php");

try {
	$doctor_ID = $_POST['doctor_ID'];
	$loadDoctorSQL = 'SELECT * FROM `doctor` WHERE `doctor_ID` = :doctor_ID';
	$loadDoctorSTMT = $conn->prepare($loadDoctorSQL);
	$loadDoctorSTMT->bindParam(':doctor_ID', $doctor_ID);
	$loadDoctorSTMT->execute();
	$doctor = $loadDoctorSTMT->fetchObject();

	echo json_encode($doctor);
} catch (PDOException $e) {
	echo $e;
}

$conn = NULL;
