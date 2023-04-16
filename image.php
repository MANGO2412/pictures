<?php
include('api/config.php');
if(!empty($_REQUEST['idImg']) &&  !empty($_REQUEST["imgs"])){
  $data=getId($_REQUEST['idImg']);
  $name="pexels-photo-".$data->id; 
  $images=array();
  foreach($data->src as $key => $value){
         $images[]=array(
           $key=>$value
         );          
   }
  echo json_encode($images);
  
}else if(!empty($_REQUEST['idImg'])){
?>  
<!DOCTYPE html>
<html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" href="public/styles/page.css">
     <title>Document</title>
   </head>
   <body class="backImg">
    <?php
     $data=getId($_REQUEST['idImg']);
     $name="pexels-photo-".$data->id;
    ?>
    <div class="container">
       <!-- controls -->
         <div class="ctr">
             <!-- options of images -->
              <select class="btn" id="sizeImages">
                <?php
                  foreach($data->src as $key => $value){
                    echo "<option>".$key."</option>";
                  }
                ?>
              </select>
               <!-- edit of image -->
             <select class="btn" id="filter">
                 <option value="normal">normal</option>
                 <option value="sepia">sepia</option>
                 <option value="grayscale">grayscale</option>
                 <option value="invert">invert</option>
             </select>

             <!-- download -->
             <button id="btnDown" class="btn">Download</button>
             <!-- close -->  
              <a class="btn" href="./catology.php">close 2</a>
         </div>
         <!-- images -->
         <div class="pictures">
             <canvas id="photo"></canvas>
         </div>
    </div>
    
   </body>

  
   <script src="public/javaScript/jquery-3.6.4.js.js"></script>
   <script type="module" src="public/javaScript/handler.js"></script>
</html>
<?php
}else{
   echo "no hay datos";
}
?>