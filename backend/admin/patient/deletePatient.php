<?php
include("../../session.php");
include("../../db.php");

try {
	$patient_ID = $_POST['patient_ID'];

	$deletePatientSQL = 'DELETE FROM `patient` WHERE `patient`.`patient_ID` = :patient_ID';
	$deletePatientSTMT = $conn->prepare($deletePatientSQL);
	$deletePatientSTMT->bindParam(':patient_ID', $patient_ID);
	$deletePatientSTMT->execute();
} catch (PDOException $e) {
	echo $e;
}

$conn = NULL;