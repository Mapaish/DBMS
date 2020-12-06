<?php
include("../session.php");
include("../db.php");

try {
	$email = $_SESSION['email'];
	$doctorName = $_POST['name'];
	$dob = $_POST['dob'];
	$gender = $_POST['gender'];
	$mobile = $_POST['mobile'];
	$specialisation = $_POST['specialisation'];

	$editDoctorSQL = 'UPDATE `doctor` SET `Name` = :doctorName, `dob` = :dob, `gender` = :gender,
		`mobile` = :mobile, `specialisation` = :specialisation WHERE `doctor`.`email` = :email';
	$editDoctorSTMT = $conn->prepare($editDoctorSQL);
	$editDoctorSTMT->bindParam(':email', $email);
	$editDoctorSTMT->bindParam(':doctorName', $doctorName);
	$editDoctorSTMT->bindParam(':dob', $dob);
	$editDoctorSTMT->bindParam(':gender', $gender);
	$editDoctorSTMT->bindParam(':mobile', $mobile);
	$editDoctorSTMT->bindParam(':specialisation', $specialisation);
	$editDoctorSTMT->execute();
} catch (PDOException $e) {
	echo $e;
}

$conn = NULL;