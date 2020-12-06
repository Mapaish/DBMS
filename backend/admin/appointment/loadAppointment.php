<?php
//include("../../session.php");
include("../../db.php");

try {
	$treatment_type = '%%';
	if(isset($_POST['treatment_type'])) {
		$treatment_type = '%'.$_POST['treatment_type'].'%';
	}
	$loadAppointmentSQL = 'SELECT * FROM `assigned_to` WHERE LOWER(`treatment_type`) LIKE LOWER(:treatment_type)';
	$loadAppointmentSTMT = $conn->prepare($loadAppointmentSQL);
	$loadAppointmentSTMT->bindParam(':treatment_type', $treatment_type);
	$loadAppointmentSTMT->execute();
	while ($row = $loadAppointmentSTMT->fetchObject()) {
		$patient["treatment_ID"] = $row->treatment_ID;
		$patient["patient_ID"] = $row->patient_ID;
		$patient["doctor_ID"] = $row->doctor_ID;
		$patient["room_type"] = $row->room_type;
		$patient["treatment_type"] = $row->treatment_type;
		$patient["fees"] = $row->fees;
		$patient["startTime"] = date('H:i jS M, Y', $row->startTime);;
		$patient["days"] = $row->days;
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
