<?php
include("./conn.php");

$data = json_decode(file_get_contents('php://input'), true);

$id = $data['id'];
$title = $data['title'];
$status = $data['status'];
$importance = $data['importance'];
$details = $data['details'];
//get current epoch time
$lastUpdate = time();

$query = "UPDATE `tasks` SET " 
."`title`='$title',`importance`='$importance',`status`='$status',"
."`details`='$details',`lastUpdated`='$lastUpdate' WHERE id = $id";

echo $query;

//execute query
$stmt = $cnn->prepare($query);
$stmt->execute();


$jsonResponse = new stdClass();
$jsonResponse->is_ok = true;
$jsonResponse->taskId = $id;
$jsonResponse->taskTitle = $title;

echo json_encode($jsonResponse);
?>