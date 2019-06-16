<?php
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Credentials: true");
 header("Access-Control-Max-Age: 1000");
 header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
 header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");  

 $server = "localhost";
 $user = "root";
 $password = "";
 $db = "student_manager";
  
 $conn = new mysqli($server,$user,$password,$db);
 if($conn->connect_error){
    die("connecteion failed !");
 }

?>