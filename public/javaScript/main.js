import {render,ajax,search,download} from './function.js';
 
 window.addEventListener("load",()=>{
  if(document.getElementById("btnSearch")){
  
    if(localStorage.getItem("search")){
      search(localStorage.getItem("search"))
      .then(data=>{
        let gallery=document.querySelector(".big_gallery");
        gallery.innerHTML="";
        let i=1;


        data["photos"].forEach(element => {
           gallery.innerHTML+=`
             <a class="gallery-items gallery__item--${i}" href="./image.php?idImg=${element.id}"><img class="gallery-img  img" width='100' height='100' src="${element.src.original}" color="${element.avg_color}"></a>         
           `; 
           i++;  
        });
        
        let imgs=document.querySelectorAll('.img');
        render(imgs);

      })
    };


    document.getElementById("btnSearch").addEventListener("click",(e)=>{
      e.preventDefault();
      let input=document.getElementById("look").value;  
      if(input !==" " && input!==""){
        //solo de prueba 
        localStorage.setItem("search",input);
        search(input)
        .then(data=>{
          let gallery=document.querySelector(".big_gallery");
          gallery.innerHTML="";
          let i=1;


          data["photos"].forEach(element => {
             gallery.innerHTML+=`
               <a class="gallery-items gallery__item--${i}" href="./image.php?idImg=${element.id}"><img class="gallery-img  img" width='100' height='100' src="${element.src.original}" color="${element.avg_color}"></a>         
             `; 
             i++;  
          });
          
          let imgs=document.querySelectorAll('.img');
          render(imgs);
        })

      }else{
          alert("no dejes el buscador vacio");
      }
  
  })
  
  }else if(document.querySelector(".gallery")){
    // ajax('http://localhost/pictures/session.php?busq=true','GET',(resp)=>{
    //   search(resp)
    //     .then(data=>{
    //       let gallery=document.querySelector(".gallery");
    //       gallery.innerHTML="";
    //       let i=1;


    //       data["photos"].forEach(element => {
    //          gallery.innerHTML+=`
    //            <a class="gallery-items gallery__item--${i}" href="./image.php?idImg=${element.id}"><img class="gallery-img  img" width='100' height='100' src="${element.src.original}" color="${element.avg_color}"></a>         
    //          `; 
    //          i++;  
    //       });
         
    //       let imgs=document.querySelectorAll('.img');
    //       render(imgs);

    //     })
    // })
  }//end to first conditional     


  //strenge code
  // if(document.querySelector("")){

  // }


  if(document.querySelectorAll(".imgs")){
    let imgs = document.querySelectorAll(".imgs");
    let opt = document.getElementById("sizeImages");
    let down = document.getElementById("btnDown");



    opt.addEventListener("change",(e)=>{
       let size=e.target.value;
       imgs.forEach(value=>{
           if(value.classList.contains("hid")==false){
              value.classList.add("hid")
           }          
       })//end the first loop

       imgs.forEach(value =>{
           if(value.id == size){
              value.classList.remove("hid");
           }
       })//end the second loop
    })//end the event change from a tag select 


    //action to download a  picture
    down.addEventListener("click",()=>{
      imgs.forEach(value=>{
        if(value.classList.contains("hid")==false){
          download(value.src,value.alt);    
       }
      })//end the first loop

    })
  }


 })


