<?php
include("db.php");
session_start();

try{	
	if(isset($_SESSION['email'])) {
		$email = $_SESSION['email'];

		$sql = "SELECT * FROM `login` WHERE `email` = :email";
		$stmt = $conn->prepare($sql);
		$stmt->bindParam(':email', $email);
		$stmt->execute();
	}
} catch (PDOException $e) {
    exit($e);
}

$prefix = isset($_SERVER['HTTPS']) ? 'https://' : 'http://';
$domain = $_SERVER['HTTP_HOST'].'/DBMS';
$relative = '/login.html';
$url = $prefix.$domain.$relative;
if(!isset($_SESSION['email']) || !$stmt->rowCount()){
	header("location:".$url);
}

$conn = null;