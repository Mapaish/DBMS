<?php
include("../../session.php");
include("../../db.php");

try {
	$doctorName = $_POST['name'];
	$dob = $_POST['dob'];
	$gender = $_POST['gender'];
	$salary = $_POST['salary'];
	$email = $_POST['email'];
	$mobile = $_POST['mobile'];
	$specialisation = $_POST['specialisation'];
	$type = $_POST['type'];

	$insertDoctorLoginSQL = 'INSERT INTO `login` (`email`, `user_type`) VALUES (:email, "doctor")';
	$insertDoctorLoginSTMT = $conn->prepare($insertDoctorLoginSQL);
	$insertDoctorLoginSTMT->bindParam(':email', $email);
	$insertDoctorLoginSTMT->execute();

	$insertDoctorSQL = 'INSERT INTO `doctor` (`Name`, `dob`, `gender`, `Salary`, `email`, `mobile`, `specialisation`, `type`)
	VALUES (:doctorName, :dob, :gender, :salary, :email, :mobile, :specialisation, :type)';
	$insertDoctorSTMT = $conn->prepare($insertDoctorSQL);
	$insertDoctorSTMT->bindParam(':doctorName', $doctorName);
	$insertDoctorSTMT->bindParam(':dob', $dob);
	$insertDoctorSTMT->bindParam(':gender', $gender);
	$insertDoctorSTMT->bindParam(':salary', $salary);
	$insertDoctorSTMT->bindParam(':email', $email);
	$insertDoctorSTMT->bindParam(':mobile', $mobile);
	$insertDoctorSTMT->bindParam(':specialisation', $specialisation);
	$insertDoctorSTMT->bindParam(':type', $type);
	$insertDoctorSTMT->execute();
} catch (PDOException $e) {
	echo $e;
}

$conn = NULL;