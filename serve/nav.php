<?php

function addUsersPage()
{
    $file = file_get_contents('../add.html');
    echo json_encode(['page'=>$file]);
}

function UsersListPage()
{
     include 'connect.php';
    $file = file_get_contents('../list.html');
    $get_data = mysqli_query($con, "SELECT * FROM user_info WHERE gender='user'");
    $main_result = [];
    while ($result = mysqli_fetch_assoc($get_data)) {
       $main_result[]=$result;
    }
    echo json_encode(['users'=>$main_result, 'page'=>$file]);
}

if (@$_GET['add']=='user') {
    addUsersPage();
}elseif (@$_GET['list']=='user') {
    UsersListPage();
}
