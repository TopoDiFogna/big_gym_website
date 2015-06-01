<?php
$categoryId=$_POST['category'];

$mysqli = new mysqli("localhost", "biggymproject", "", "my_biggymproject");

if (mysqli_connect_errno()) { //verify connection
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else 
}
else {
    $myquery="";
    switch($categoryId){
        case 0:
            $myquery = " SELECT * FROM category";
            break;
        default:
            $myquery = " SELECT * FROM category where id=".$categoryId;
            break;
    }

    //esecuzione myquery
    $result = $mysqli->query($myquery);
    //if there are data available
//    echo $result->num_rows;
    if($result->num_rows >0)
    {
        $myArray = array();//create an array
        $i=0;
        while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $myArray[] = array_map('utf8_encode', $row);
        }
        echo json_encode($myArray);
    }
    
    //free result
    $result->close();

    //close connection
    $mysqli->close();



}

?>