<?php
$categoryId=$_POST['category'];

$mysqli = new mysqli("localhost", "root", "", "big_gym");

if(mysqli_connect_errno()){
    echo "Connection Failed: ".mysqli_connect_error();
    exit();
}
else{
    //echo $categoryId; //mi fa restituire il valore del post
    $myquery = " SELECT * FROM course where categoria=".$categoryId;
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