<?php
include 'connect.php';

 extract($_POST);
 if (!empty($email) && !empty($phone)) {
   $get_data = mysqli_query($con, "SELECT * FROM user_info WHERE email='$email' && phone='$phone' && gender!='user'");
  if (mysqli_num_rows( $get_data)>0) {
    $result = mysqli_fetch_assoc($get_data);
    // echo json_encode($result);
   $file = file_get_contents('../Dashboards.html');
   echo json_encode(['page'=>$file,'userinfo'=>$result]);
    // file_get_contents()
  }else{
      echo json_encode('invalid');
  }
 }else{
     echo json_encode('empty');
 }
 
