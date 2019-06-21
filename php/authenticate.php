<?php
    require("connect.php");
    require("vendor/autoload.php");
    use \Firebase\JWT\JWT;
    if(!empty($_POST)){
        extract($_POST);
        try{
            $decoded = JWT::decode($token,"admin@123",array('HS256'));
            if($decoded->username == $username){
                echo json_encode(array("message"=>"you have succefully authenticated",'status'=>true));
            }else{
                echo json_encode(array("message"=>"Authentication error!","status"=>false));
            }
        }
        catch(Exception $e){
            echo json_encode($e->getMessage());
        }
        
    }else{
        echo json_encode(array("message"=>"Authentication error!","status"=>false));
    }
?>