<?php

header("Access-Control-Allow-Origin: *"); 

$categoryId=$_POST['category'];

$mysqli = new mysqli("localhost", "biggymproject", "", "my_biggymproject");

if(mysqli_connect_errno()){
    echo "Connection Failed: ".mysqli_connect_error();
    exit();
}
else{
    //echo $categoryId; //mi fa restituire il valore del post
    $myquery = " SELECT * FROM course join category on course.categoria=category.id where categoria=".$categoryId;
//    echo $myquery; //restituisce la query
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