<?php
include("../../session.php");
include("../../db.php");

try {
	$doctor_ID = $_POST['doctor_ID'];
	$doctorName = $_POST['name'];
	$dob = $_POST['dob'];
	$gender = $_POST['gender'];
	$salary = $_POST['salary'];
	$mobile = $_POST['mobile'];
	$specialisation = $_POST['specialisation'];
	$type = $_POST['type'];

	$updateDoctorSQL = 'UPDATE `doctor` SET `Name` = :doctorName, `dob` = :dob, `gender` = :gender, `Salary` = :salary,
		`mobile` = :mobile, `specialisation` = :specialisation, `type` = :type WHERE `doctor`.`doctor_ID` = :doctor_ID';
	$updateDoctorSTMT = $conn->prepare($updateDoctorSQL);
	$updateDoctorSTMT->bindParam(':doctor_ID', $doctor_ID);
	$updateDoctorSTMT->bindParam(':doctorName', $doctorName);
	$updateDoctorSTMT->bindParam(':dob', $dob);
	$updateDoctorSTMT->bindParam(':gender', $gender);
	$updateDoctorSTMT->bindParam(':salary', $salary);
	$updateDoctorSTMT->bindParam(':mobile', $mobile);
	$updateDoctorSTMT->bindParam(':specialisation', $specialisation);
	$updateDoctorSTMT->bindParam(':type', $type);
	$updateDoctorSTMT->execute();
} catch (PDOException $e) {
	echo $e;
}

$conn = NULL;