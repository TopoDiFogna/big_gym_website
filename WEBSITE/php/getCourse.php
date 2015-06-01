<?php
$courseName=$_POST['key'];

$mysqli = new mysqli("localhost", "biggymproject", "", "my_biggymproject");

if(mysqli_connect_errno()){
    echo "Connection failed: ".mysqli_connect_error();
    exit();
}
else{
    $myquery="";
    switch($courseName){
        case "alfa":
            $myquery="SELECT * FROM course order by nome";
        break;
        case "liv":
            $myquery="SELECT * FROM course order by livello";
        break;
        default:
            $myquery="SELECT * FROM course join category on course.categoria=category.id where nome='".$courseName."'";
    }
    $result = $mysqli->query($myquery);
    if($result->num_rows >0){
        $myArray = array();
        while($row=$result->fetch_array(MYSQL_ASSOC)){
            $myArray[] = array_map('utf8_encode', $row);
        }
        echo json_encode($myArray);
    }else{
        echo "Niente";
    }
}

//chiudo le risorse
$result->close();
$mysqli->close();

?>