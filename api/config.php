<?php
function  apiQuery($query){
    $ch=curl_init("https://api.pexels.com");
    curl_setopt($ch,CURLOPT_URL,"https://api.pexels.com/v1/search?query=".$query);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);
    $headers = array(
       "Authorization: n9rsRPJxQg2ehBgJHHhY5MlE6hhm89LUYMX6wJOHe3vnAeQ8EiQJDiTl",
    );
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    $data=curl_exec($ch);
    curl_close($ch);
    return json_decode($data);
}

function getId($id){
   $ch=curl_init("https://api.pexels.com");
    curl_setopt($ch,CURLOPT_URL,"https://api.pexels.com/v1/photos/".$id);
    curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);
    $headers = array(
       "Authorization: n9rsRPJxQg2ehBgJHHhY5MlE6hhm89LUYMX6wJOHe3vnAeQ8EiQJDiTl",
    );
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    $data=curl_exec($ch);
    curl_close($ch);
    return json_decode($data);
}

function apiLocal(){
   return json_decode(file_get_contents('http://localhost/pictures/FILENAME.json'));
}
?>