<?php 


if(isset($_POST["imgupload"])){
    $img = $_POST['baseimg'];
    $img = str_replace('data:image/png;base64,', '', $img);
    $img = str_replace(' ', '+', $img);
    $data = base64_decode($img);
    $file = 'img/'.uniqid().'.png';
    $success = file_put_contents($file, $data);
}