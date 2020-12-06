<?php
include("../../session.php");
include("../../db.php");

try {
	$patient_ID = $_POST['patient_ID'];
	$patientName = $_POST['name'];
	$dob = $_POST['dob'];
	$gender = $_POST['gender'];
	$blood_group = $_POST['blood_group'];
	$email = $_POST['email'];
	$mobile = $_POST['mobile'];
	
	$updatePatientSQL = 'UPDATE `patient` SET `name` = :patientName, `dob` = :dob, `gender` = :gender,
		`blood_group` = :blood_group, `email` = :email, `mobile` = :mobile WHERE `patient`.`patient_ID` = :patient_ID';
	$updatePatientSTMT = $conn->prepare($updatePatientSQL);
	$updatePatientSTMT->bindParam(':patient_ID', $patient_ID);
	$updatePatientSTMT->bindParam(':patientName', $patientName);
	$updatePatientSTMT->bindParam(':dob', $dob);
	$updatePatientSTMT->bindParam(':gender', $gender);
	$updatePatientSTMT->bindParam(':blood_group', $blood_group);
	$updatePatientSTMT->bindParam(':email', $email);
	$updatePatientSTMT->bindParam(':mobile', $mobile);
	$updatePatientSTMT->execute();
} catch (PDOException $e) {
	echo $e;
}

$conn = NULL;