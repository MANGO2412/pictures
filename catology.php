<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="public/styles/main.css">
    <link rel="stylesheet" href="public/styles/page.css">
    <title>Download</title>
</head>
<body>
    <?php
     include('template/nav.php');
    ?>
    <!-- main content -->
    <div class="container">
      <form action="">
         <input type="search" name="" id="look" placeholder="what images do you think">
         <input type="submit" value="buscar" id="btnSearch">
      </form>
      <section class="lateral">
         <!-- Messenger Chat Plugin Code -->
         <a href="#"><img src="public/img/facebook.png" alt="image of facebook"></a>
         <a href="#"><img src="public/img/instagram.png" alt="image of instagram" ></a>
         <a href="#"><img src="public/img/discord.png" alt="image of discord"></a>
    </section>
      <!-- the gallery of images -->
      <div class="big_gallery"></div>
    </div>
    <script type="module" src="public/javaScript/main.js"></script>
</body>
</html>
