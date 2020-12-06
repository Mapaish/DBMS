<?php
include("../session.php");
include("../db.php");

try {
	$loadRoomSQL = 'SELECT * FROM `room`';
	$loadRoomSTMT = $conn->prepare($loadRoomSQL);
	$loadRoomSTMT->execute();
	while ($row = $loadRoomSTMT->fetchObject()) {
		$room["room_type"] = $row->room_type;
		$data[] = $room;
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
