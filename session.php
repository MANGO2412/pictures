<?php
session_start();


//configuration
//code got in this url https://codepen.io/dericksozo/post/fetch-api-json-php by Derick sozo Ruiz
$contentType=isset($_SERVER["CONTENT_TYPE"])?
trim($_SERVER["CONTENT_TYPE"]):'';

if($contentType=="application/json"){
  $content=trim(file_get_contents("php://input"));
  $decoded=json_decode($content,true);

  $_SESSION["save"]= $decoded["data"];
}else if(empty($_SESSION["save"]) ){
   $_SESSION["save"]="apple";
}



if(!empty($_REQUEST["busq"]) || $contentType=="application/json" ){
   echo $_SESSION["save"];
 }else{
  echo "nothing";
 }

?>