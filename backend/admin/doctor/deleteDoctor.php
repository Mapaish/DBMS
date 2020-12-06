<?php
//include("../../session.php");
include("../../db.php");

try {
	$doctor_ID = $_POST['doctor_ID'];

	$deleteDoctorSQL = 'DELETE FROM `doctor` WHERE `doctor`.`doctor_ID` = :doctor_ID';
	$deleteDoctorSTMT = $conn->prepare($deleteDoctorSQL);
	$deleteDoctorSTMT->bindParam(':doctor_ID', $doctor_ID);
	$deleteDoctorSTMT->execute();
} catch (PDOException $e) {
	echo $e;
}

$conn = NULL;