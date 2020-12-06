<?php
//include("../../session.php");
include("../../db.php");

try {
	$patient_ID = $_POST['patient_ID'];
	$loadPatientSQL = 'SELECT * FROM `patient` WHERE `patient_ID` = :patient_ID';
	$loadPatientSTMT = $conn->prepare($loadPatientSQL);
	$loadPatientSTMT->bindParam(':patient_ID', $patient_ID);
	$loadPatientSTMT->execute();
	$patient = $loadPatientSTMT->fetchObject();

	echo json_encode($patient);
} catch (PDOException $e) {
	echo $e;
}

$conn = NULL;
