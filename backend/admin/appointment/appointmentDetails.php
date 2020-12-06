<?php
//include("../../session.php");
include("../../db.php");

try {
	$treatment_ID = $_POST['treatment_ID'];
	$loadAppointmentSQL = 'SELECT * FROM `assigned_to` WHERE `treatment_ID` = :treatment_ID';
	$loadAppointmentSTMT = $conn->prepare($loadAppointmentSQL);
	$loadAppointmentSTMT->bindParam(':treatment_ID', $treatment_ID);
	$loadAppointmentSTMT->execute();
	$appointment = $loadAppointmentSTMT->fetchObject();

	echo json_encode($appointment);
} catch (PDOException $e) {
	echo $e;
}

$conn = NULL;
