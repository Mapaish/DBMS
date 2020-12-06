<?php
//include("../../session.php");
include("../../db.php");

try {
	$patientName = $_POST['name'];
	$dob = $_POST['dob'];
	$gender = $_POST['gender'];
	$blood_group = $_POST['blood_group'];
	$email = $_POST['email'];
	$mobile = $_POST['mobile'];

	$insertPatientSQL = 'INSERT INTO `patient` (`name`, `dob`, `gender`, `blood_group`, `email`, `mobile`)
		VALUES (:patientName, :dob, :gender, :blood_group, :email, :mobile)';
	$insertPatientSTMT = $conn->prepare($insertPatientSQL);
	$insertPatientSTMT->bindParam(':patientName', $patientName);
	$insertPatientSTMT->bindParam(':dob', $dob);
	$insertPatientSTMT->bindParam(':gender', $gender);
	$insertPatientSTMT->bindParam(':blood_group', $blood_group);
	$insertPatientSTMT->bindParam(':email', $email);
	$insertPatientSTMT->bindParam(':mobile', $mobile);
	$insertPatientSTMT->execute();
} catch (PDOException $e) {
	echo $e;
}

$conn = NULL;