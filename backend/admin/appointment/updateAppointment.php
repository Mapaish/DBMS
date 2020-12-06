<?php
include("../../session.php");
include("../../db.php");

try {
	$treatment_ID = $_POST['treatment_ID'];
	$patient_ID = $_POST['patient_ID'];
	$doctor_ID = $_POST['doctor_ID'];
	$room_type = $_POST['room_type'];
	$treatment_type = $_POST['treatment_type'];
	$fees = $_POST['fees'];
	$startTime = $_POST['startTime'];
	$days = $_POST['days'];
	
	$updateAppointmentSQL = 'UPDATE `assigned_to` SET `patient_ID` = :patient_ID, `doctor_ID` = :doctor_ID,
		`room_type` = :room_type, `treatment_type` = :treatment_type, `fees` = :fees, `startTime` = :startTime, `days` = :days
		WHERE `assigned_to`.`treatment_ID` = :treatment_ID';
	$updateAppointmentSTMT = $conn->prepare($updateAppointmentSQL);
	$updateAppointmentSTMT->bindParam(':treatment_ID', $treatment_ID);
	$updateAppointmentSTMT->bindParam(':patient_ID', $patient_ID);
	$updateAppointmentSTMT->bindParam(':doctor_ID', $doctor_ID);
	$updateAppointmentSTMT->bindParam(':room_type', $room_type);
	$updateAppointmentSTMT->bindParam(':treatment_type', $treatment_type);
	$updateAppointmentSTMT->bindParam(':fees', $fees);
	$updateAppointmentSTMT->bindParam(':startTime', $startTime);
	$updateAppointmentSTMT->bindParam(':days', $days);
	$updateAppointmentSTMT->execute();
} catch (PDOException $e) {
	echo $e;
}

$conn = NULL;