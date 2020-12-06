<?php
include("../../session.php");
include("../../db.php");

try {
	$loadPatientSQL = 'SELECT * FROM `patient`';
	$loadPatientSTMT = $conn->prepare($loadPatientSQL);
	$loadPatientSTMT->execute();
	while ($row = $loadPatientSTMT->fetchObject()) {
		$patient["patient_ID"] = $row->patient_ID;
		$patient["name"] = $row->name;
		$patient["dob"] = $row->dob;
		$patient["gender"] = $row->gender;
		$patient["blood_group"] = $row->blood_group;
		$patient["email"] = $row->email;
		$patient["mobile"] = $row->mobile;
		$data[] = $patient;
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
