<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Max-Age: 1000");
    header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
    header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");  


    $dbuser = "root";
    $password = "";
    $server  = "localhost";
    $db = "student_manager";
    $conn = new mysqli($server,$dbuser,$password,$db);
    if($conn->connect_error){
        die("connection failed.");
    }
?>