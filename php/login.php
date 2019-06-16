<?php
    require("connect.php");
    extract($_POST);
    if($username == "" || $password == ""){
        echo json_encode(array("data"=>"Please Fill All entries.","status"=>false));
    } else{
        if($username == "admin" && $password == "admin"){
            start_session();
            $_SESSION['username'] = "admin";
        }else{
            echo json_encode("username password wrong");
        }
    }
?>