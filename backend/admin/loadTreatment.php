<?php
include("../session.php");
include("../db.php");

try {
	$loadTreatmentSQL = 'SELECT `treatment_type` FROM `assigned_to` GROUP BY `treatment_type`';
	$loadTreatmentSTMT = $conn->prepare($loadTreatmentSQL);
	$loadTreatmentSTMT->execute();
	while ($row = $loadTreatmentSTMT->fetchObject()) {
		$treatment["treatment_type"] = $row->treatment_type;
		$data[] = $treatment;
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
