<?php
    require("connect.php");
    $sql = "SELECT student_id,username,email,phone FROM students ORDER BY register_date DESC";
    if($res = $conn->query($sql)){
        if($res->num_rows > 0){
            $arr = array();
            while($row = $res->fetch_assoc()){
                array_push($arr,$row);
            }
            echo json_encode(array("data"=>$arr,"status"=>true));
        }else{
            echo json_encode(array("data"=>"No data.","status"=>false));
        }
    }else{            
        echo json_encode(array("data"=>$conn->error,"status"=>false));
    }
?>