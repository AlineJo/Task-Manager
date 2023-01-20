<?php

$PROD_DB_NAME = "poc_tasks";
$PROD_DB_USER = "root";
$PROD_DB_PASSWORD = "";

$dbName = $PROD_DB_NAME; 
$user = $PROD_DB_USER;   
$password = $PROD_DB_PASSWORD;  
$host = "localhost";
$cnn = new PDO("mysql:dbname=$dbName;host=$host", $user, $password);
?>