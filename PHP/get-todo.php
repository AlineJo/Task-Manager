<?php
include("./conn.php");

//write query
$query = "SELECT * FROM `viewtasks`";

//excute query read from db
$queryResult = $cnn->query($query)->fetchAll(PDO::FETCH_ASSOC);

//print data as JSON
echo json_encode($queryResult);
?>