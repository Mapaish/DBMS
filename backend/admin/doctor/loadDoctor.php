<?php
//include("../../session.php");
include("../../db.php");

try {
	$loadDoctorSQL = 'SELECT * FROM `doctor`';
	$loadDoctorSTMT = $conn->prepare($loadDoctorSQL);
	$loadDoctorSTMT->execute();
	while ($row = $loadDoctorSTMT->fetchObject()) {
		$doctor["doctor_ID"] = $row->doctor_ID;
		$doctor["name"] = $row->Name;
		$doctor["dob"] = $row->dob;
		$doctor["gender"] = $row->gender;
		$doctor["salary"] = $row->Salary;
		$doctor["email"] = $row->email;
		$doctor["mobile"] = $row->mobile;
		$doctor["specialisation"] = $row->specialisation;
		$doctor["type"] = $row->type;
		$data[] = $doctor;
	}

	// Encoding array in JSON format
	if (!isset($data))
		echo FALSE;
	else
		echo json_encode($data);
} catch (PDOException $e) {
	echo $e;
}

$conn = NULL;
