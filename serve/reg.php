<?php
include 'connect.php';

 extract($_POST);
 if (!empty($username) || !empty($email) || !empty($phone)) {
   $get_data = mysqli_query($con, "SELECT * FROM user_info WHERE email='$email' && phone='$phone'");
  if (mysqli_num_rows( $get_data)>0) {
    $err = 'User With this Creds Already Exist';
   echo json_encode(['error'=>$err]);

  }else{
      $file = $_FILES['profile'];
      if (explode('/',$file['type'])[0]!='image') {
        $err = 'File Type Not Supported';
        echo json_encode(['error'=>$err]);
      }else{
         $upload = move_uploaded_file($file['tmp_name'], '../userUploads/'.$file['name']);
          $filename = $file['name'];
    if ($upload) {
     $get_data = mysqli_query($con, "INSERT INTO user_info (username,email,phone,gender,image) VAlUES('$username','$email','$phone','user','$filename')");
        echo json_encode(['error'=>'successfully Added']);
    }else{
        echo json_encode(['error'=>'DB Connect Failed']);

    }

    }
  }
 }else{
     echo json_encode(['error'=>'All Fields are required']);
 }
