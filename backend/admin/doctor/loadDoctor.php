<?php
//include("../../session.php");
include("../../db.php");

try {
	$minSal = '';
	$maxSal = '';
	$doctorType = '%%';
	if(isset($_POST['minSal'])) {
		$minSal = $_POST['minSal'];
		$maxSal = $_POST['maxSal'];
		$doctorType = '%'.$_POST['doctorType'].'%';
	}
	if($minSal && $maxSal) {
		$loadDoctorSQL = 'SELECT * FROM `doctor` WHERE `Salary` BETWEEN :minSal AND :maxSal AND type LIKE :doctorType';
		$loadDoctorSTMT = $conn->prepare($loadDoctorSQL);
		$loadDoctorSTMT->bindParam(':minSal', $minSal);
		$loadDoctorSTMT->bindParam(':maxSal', $maxSal);
		$loadDoctorSTMT->bindParam(':doctorType', $doctorType);
	} else if ($minSal) {
		$loadDoctorSQL = 'SELECT * FROM `doctor` WHERE `Salary`
			BETWEEN :minSal AND (SELECT MAX(Salary) FROM `doctor`) AND type LIKE :doctorType';
		$loadDoctorSTMT = $conn->prepare($loadDoctorSQL);
		$loadDoctorSTMT->bindParam(':minSal', $minSal);
		$loadDoctorSTMT->bindParam(':doctorType', $doctorType);
	} else if ($maxSal) {
		$loadDoctorSQL = 'SELECT * FROM `doctor` WHERE `Salary`
			BETWEEN (SELECT MIN(Salary) FROM `doctor`) AND :maxSal AND type LIKE :doctorType';
		$loadDoctorSTMT = $conn->prepare($loadDoctorSQL);
		$loadDoctorSTMT->bindParam(':maxSal', $maxSal);
		$loadDoctorSTMT->bindParam(':doctorType', $doctorType);
	} else {
		$loadDoctorSQL = 'SELECT * FROM `doctor` WHERE `Salary`
			BETWEEN (SELECT MIN(Salary) FROM `doctor`) AND (SELECT MAX(Salary) FROM `doctor`) AND type LIKE :doctorType';
		$loadDoctorSTMT = $conn->prepare($loadDoctorSQL);
		$loadDoctorSTMT->bindParam(':doctorType', $doctorType);
	}

	$loadDoctorSTMT->execute();
	while ($row = $loadDoctorSTMT->fetchObject()) {
		$doctor["doctor_ID"] = $row->doctor_ID;
		$doctor["name"] = $row->Name;
		$doctor["dob"] = $row->dob;
		$doctor["gender"] = $row->gender;
		$doctor["salary"] = $row->Salary;
		$doctor["email"] = $row->email;
		$doctor["mobile"] = $row->mobile;
		$doctor["specialisation"] = $row->specialisation;
		$doctor["type"] = $row->type;
		$data[] = $doctor;
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
