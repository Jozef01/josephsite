<?php
include('connect.php');

if(isset($_GET['id'])){

$id=$_GET['id'];
$deleteOption = "DELETE FROM user_info WHERE if id='$id'";
$result = mysqli_query($con, $deleteOption);
  if($result){
echo "Deleted successfully";
 }

}

?>
