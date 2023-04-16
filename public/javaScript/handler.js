import {app} from './murphy/main.js';

$(document).ready(function (){
    let idimg=window.location.search.replace("?idImg=","");
    let editjs = app({
        canvas:document.getElementById('photo')
     });


     $.ajax({
         url:'image.php',
         type:'GET',
         data:{imgs:"all",idImg:idimg},
         success:function (request){
              let data=JSON.parse(request);
               
              //when the page reload
              data.forEach(element => {
                 let key=Object.keys(element)
                 if(key[0]=="original"){
                   editjs.ReadFileAsUrl(element[key[0]]);
                  };
              });

              //action when input select change
              document.getElementById("sizeImages").addEventListener("change",(e)=>{
                 let val=e.target.value;
                 data.forEach(element => {
                    let key=Object.keys(element)
                    if(key[0]==val){
                      editjs.ReadFileAsUrl(element[key[0]]);
                      document.getElementById("filter").value="normal";
                     };
                 });

                
              })//end this event 

              document.getElementById("btnDown").addEventListener("click",()=>{
                 editjs.DownloadImg();
              })


              document.getElementById("filter").addEventListener("change",(e)=>{
                    let fil=e.target.value;

                    switch (fil) {
                        case "normal":
                            editjs.fillters().normal();
                            break;

                        case "sepia":
                            editjs.fillters().sepia();
                            break;
                        
                        case "grayscale":
                            editjs.fillters().grayscale();
                            break;
                        
                        case "invert":
                          editjs.fillters().InvertColor();
                          break;
                    
                        default:
                            break;
                    }
              })
         }
     });//end to  query
})