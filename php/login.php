<?php
    require("connect.php");
    require("vendor/autoload.php");
    use \Firebase\JWT\JWT;
    extract($_POST);
    if($username == "" || $password == ""){
        echo json_encode(array("message"=>"Please Fill All entries.","data"=>"Error.","status"=>false));
    } else{
        if($username == "admin" && $password == "admin"){
            $payload = array(
                "username" => "admin"
            );
            $jwt = JWT::encode($payload,"admin@123");
            $data['username'] = "admin";
            $data['token'] = $jwt;
            echo json_encode(array("message"=>"You have succefully logged in.","data"=>$data,"status"=>true)); 
        }else{
            echo json_encode(array("message"=>"username password wrong.","data"=>"Error.","status"=>false)); 

        }
    }
?>