<?php
include("./conn.php");

$data = json_decode(file_get_contents('php://input'), true);

$title = $data['title'];
$importance = $data['importance'];
$details = $data['details'];
//get current epoch time
$lastUpdate = time();

$query = "INSERT INTO `tasks`( `title`, `importance`, `details`, `lastUpdated`)"
    . "VALUES ('$title','$importance','$details','$lastUpdate')";

//execute query
$stmt = $cnn->prepare($query);
$stmt->execute();

//get the last inserted id
$taskId = $cnn->lastInsertId();

$jsonResponse = new stdClass();
$jsonResponse->is_ok = true;
$jsonResponse->taskId = $taskId;
$jsonResponse->taskTitle = $title;

echo json_encode($jsonResponse);



?>