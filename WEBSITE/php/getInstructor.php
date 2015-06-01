<?php

header("Access-Control-Allow-Origin: *"); 

$instructorId=$_POST['instructor'];

$mysqli = new mysqli("localhost", "biggymproject", "", "my_biggymproject");

if(mysqli_connect_errno()){
    echo "Connection Failed: ".mysqli_connect_error();
    exit();
}
else{
    $myquery="";
    switch($instructorId){
        case 0:
            $myquery="SELECT * FROM `instructor`left JOIN award on id_premi=idPremi order by nomeIstruttore";
            break;
        default:
            $myquery = " SELECT * FROM instructor left JOIN award on id_premi=idPremi WHERE id_istruttore=".$instructorId;
            break;
    }
    $result = $mysqli->query($myquery);
    if($result->num_rows >0)
    {
        $myArray = array();//create an array
        
        while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $myArray[] = array_map('utf8_encode', $row);
        }
        echo json_encode($myArray);
    }
    
    //chiudo le risorse
    $result->close();
    $mysqli->close();
    
}
?>