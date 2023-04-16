<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./public/styles/main.css">
    <title>Home</title>
</head>
<body>
    <div class="main">
      <?php
      include('template/nav.php')
      ?>
      <section class="main-section">
          <header>Search,Download and Edit</header>
          <p>picture is a webbsite where you can look for images and downlaod or you can choose a filter to add this images before downlaod it, this webiste use api pexels to get all images and use it in this website for you can use our services </p>
      </section>
    </div>
    <div class="info">
      <!-- more information  -->
      <section>
        <header>ABOUT THIS WEB SITE</header>
        <p>this website is a project, so it has a time limit on how many users can use it, so if that work to all users get to visit this website, this project will probably continue to develop to have more things,this depends on you and users, here, below is the source code, if you want to know how the website is build, you can see how the website is built and the api documentation.</p>
        <ul>
          <li><a href="#"><img src="public/img/github.png" alt="image of github"></a></li>
          <li><a href="#"><img src="public/img/pexels.png" alt="image of pexels"></a></li>
        </ul>
      </section>

      <!-- about my social network -->
      <section>
         <header>SOCIAL NETWORK</header>
         <p>You can see my social newtworks where I publish information about the websites is to develop and there a comunity about programming if you ara a programer:</p>
         <ul>
           <li><a href="#"><img src="public/img/facebook.png" alt="image of facebook"></a></li>
           <li><a href="#"><img src="public/img/instagram.png" alt="image of instagram" ></a></li>
           <li><a href="#"><img src="public/img/discord.png" alt="image of discord"></a></li>
         </ul>
      </section>
    </div>
    <!-- catalogo de fotos-->
    <!-- <div class="gallery"></div> -->
    <script type="module"src="./public/javaScript/main.js"></script>
</body>
</html>