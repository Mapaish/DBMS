<?php
//include("../../session.php");
include("../../db.php");

try {
	$treatment_ID = $_POST['treatment_ID'];

	$deleteAppointmentSQL = 'DELETE FROM `assigned_to` WHERE `assigned_to`.`treatment_ID` = :treatment_ID';
	$deleteAppointmentSTMT = $conn->prepare($deleteAppointmentSQL);
	$deleteAppointmentSTMT->bindParam(':treatment_ID', $treatment_ID);
	$deleteAppointmentSTMT->execute();
} catch (PDOException $e) {
	echo $e;
}

$conn = NULL;