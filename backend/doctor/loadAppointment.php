<?php
include("../session.php");
include("../db.php");

try {
	$email = $_SESSION['email'];
	
	$loadAppointmentSQL = 'SELECT `assigned_to`.*, `patient`.`name` FROM `assigned_to`
		INNER JOIN `doctor` ON `assigned_to`.`doctor_ID` = `doctor`.`doctor_ID`
		INNER JOIN `patient` ON `assigned_to`.`patient_ID` = `patient`.`patient_ID`
		WHERE `doctor`.`email` = :email';
	$loadAppointmentSTMT = $conn->prepare($loadAppointmentSQL);
	$loadAppointmentSTMT->bindParam(':email', $email);
	$loadAppointmentSTMT->execute();
	while ($row = $loadAppointmentSTMT->fetchObject()) {
		$patient["treatment_ID"] = $row->treatment_ID;
		$patient["patient_name"] = $row->name;
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
