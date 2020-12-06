<?php
include("../../session.php");
include("../../db.php");

try {
	$patient_ID = $_POST['patient_ID'];
	$doctor_ID = $_POST['doctor_ID'];
	$room_type = $_POST['room_type'];
	$treatment_type = $_POST['treatment_type'];
	$fees = $_POST['fees'];
	$startTime = $_POST['startTime'];
	$days = $_POST['days'];
	
	$addAppointmentSQL = 'INSERT INTO `assigned_to` (`patient_ID`, `doctor_ID`, `room_type`, `treatment_type`, `fees`, `startTime`, `days`)
		VALUES (:patient_ID, :doctor_ID, :room_type, :treatment_type, :fees, :startTime, :days)';
	$addAppointmentSTMT = $conn->prepare($addAppointmentSQL);
	$addAppointmentSTMT->bindParam(':patient_ID', $patient_ID);
	$addAppointmentSTMT->bindParam(':doctor_ID', $doctor_ID);
	$addAppointmentSTMT->bindParam(':room_type', $room_type);
	$addAppointmentSTMT->bindParam(':treatment_type', $treatment_type);
	$addAppointmentSTMT->bindParam(':fees', $fees);
	$addAppointmentSTMT->bindParam(':startTime', $startTime);
	$addAppointmentSTMT->bindParam(':days', $days);
	$addAppointmentSTMT->execute();
} catch (PDOException $e) {
	echo $e;
}

$conn = NULL;