export class murphy{
   constructor(canvas,ctx){
       this.canvas=canvas;
       this.ctx=ctx;
       this.img=new Image();
       this.origin;
       this.saveF=null;

       this.ang=0;
       //context of excution 
       this.RenderImgOnCanva = this.RenderImgOnCanva.bind(this);
   }

   RenderImgOnCanva(path){
     this.img.src=path;
      this.img.addEventListener('load',()=>{
         const {width,height}=this.img;
         this.canvas.width=width;
         const aspectRadio=height/width;
         this.canvas.height=this.canvas.width * aspectRadio;
         this.ctx.drawImage(this.img,0,0,width,height,0,0,this.canvas.width,this.canvas.height);
         this.origin=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height);
      
      })
   }

   //fillters
   //test
   fillters(){
    const imageData=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height)
    const data=imageData.data;

      return {
          saturaction:()=>{

          },
          InvertColor:()=>{
            for(let i=0;i<data.length;i+=4){
                data[i]=255-data[i];
                data[i+1]=255-data[i+1];
                data[i+2]=255-data[i+2];
            }
            this.saveF=imageData;
            this.ctx.putImageData(imageData,0,0);
          },

          grayscale:()=>{
            for(let i=0;i<data.length;i+=4){
              let red=data[i];
              let green=data[i+1];
              let blue=data[i+2];

              let gray=(red+green+blue)/3;
              data[i]=gray;
              data[i+1]=gray;
              data[i+2]=gray;
          }
          this.saveF=imageData;
          this.ctx.putImageData(imageData,0,0);
          },
          sepia:()=>{
            for(let i=0;i<data.length;i+=4){
              let red=data[i];
              let green=data[i+1];
              let blue=data[i+2];

              let tr = 0.393*red + 0.769*green + 0.189*blue;
              let tg = 0.349*red + 0.686*green + 0.168*blue;
              let tb = 0.272*red + 0.534*green + 0.131*blue;
             
              //condition to change color red
              if(tr>255)
                 data[i]=255;
              else
                data[i]=tr

              //condition to change  color green
              if(tg>255)
                  data[i+1]=255;
              else
                data[i+1]=tg;
              
              //condition to change  color blue
              if(tb>255)
                  data[i+2]=255;
              else 
                data[i+2]=tb;
            }
            this.saveF=imageData;
            this.ctx.putImageData(imageData,0,0);

          },
          normal:()=>{
            this.ctx.putImageData(this.origin,0,0);
          }
      }
   };
    
   imgData(){
    return this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height);
   }

   async  ReadFileAsUrl(url,callback=this.RenderImgOnCanva){
         console.log(url);
         let response =  await fetch(url);
         let path = await response.blob();
         let link=URL.createObjectURL(path);
         callback(link);
   }

   
   ReadFileAsLocal(file,callback=this.RenderImgOnCanva){
        const fileReader=new FileReader();
        fileReader.onload=()=>{
            callback(fileReader.result);
        }

        fileReader.readAsDataURL(file);
   }

  DownloadImg(){
     let img = document.createElement("a");
     img.href=this.canvas.toDataURL("image/png");
     img.download="image.png";
     img.click();
     img.remove();
  }
  
  
  // rotate(){  
  // }

  // //method in test
  
  //  Crop(){

  //  }

  // Drop(){
  //   //variables to defined paths in canvas
  //   const imageData=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height);

  //   let isDragging=false;
  //    let proportion=.8,
  //        cw=this.canvas.width,
  //        ch=this.canvas.height;
  //   let cx=cw/2;
  //   let cy=ch/2;
  //   //
  //   let sy=3;
  //   let sx=3;
  //   let sw=this.canvas.width;
  //   let sh=this.canvas.height;

  //   let r=4;

  //   let mousePos1={
  //     x:0,
  //     y:0
  //   }


  //   let mouserPos2={
  //     x:0,
  //     y:0
  //   }


  //   var o={
  //       "sx":{
  //         color:"black",
  //         x:0,
  //         y:0,
  //         w:cw,
  //         h:r,
  //         bool:false
  //       },
  //       "sy":{
  //         color:"yellow",
  //         x:0,
  //         y:0,
  //         w:r,
  //         h:ch,
  //         bool:false
  //       },
  //       "sw":{
  //         color:"orange",
  //         x:0,
  //         y:sh-sy,
  //         w:cw,
  //         h:r,
  //         bool:false
  //       },
  //       "sh":{
  //         color:"red",
  //         x:sw-sx,
  //         y:0,
  //         w:r,
  //         h:ch,
  //         bool:false
  //       }
  //   }

  //   let d = {
  //     x: ~~(cx - sw * proportion / 2),
  //     y: ~~(cy - sh * proportion / 2)
  //   }
     

  //   //excution all private methods
  //   this.#drwGuides(o);
  //   this.canvas.addEventListener('mousedown',(e)=>{
  //       isDragging=true;
  //       mousePos1=this.#oMousePos(e);
        
  //       for (let k in o) {
  //         this.ctx.beginPath();
  //         this.ctx.rect(o[k].x - 10, o[k].y - 10, o[k].w + 20, o[k].h + 20);
  //         if (this.ctx.isPointInPath(mousePos1.x, mousePos1.y)) {
  //           o[k].bool = true;
  //           if (k == "sx" || k == "sw") {
  //             o[k].y = mousePos1.y;
  //           } else {
  //             o[k].x = mousePos1.x;
  //           }
  //           break;
  //         } else {
  //           o[k].bool = false;
  //         }
  //       }
  //       this.ctx.putImageData(imageData,0,0)
  //   },false)//end to event

  //   this.canvas.addEventListener('mousemove',(e)=>{
  //     mousePos1=this.#oMousePos(e);
  //     this.#cursorStyle(o,mousePos1);

  //     if(isDragging==true){
  //       this.ctx.clearRect(0,0,cw,ch);
         
  //       for (let k in o) {
  //         if (o[k].bool) {
  //           if (k == "sx" || k == "sw") {
  //             o[k].y = mousePos1.y;
  //           } else {
  //             o[k].x = mousePos1.x;
  //           }
  //           break;
  //         }
  //       }
  //       this.ctx.putImageData(imageData,0,0)
  //       this.#drwGuides(o);

  //     }
  //   },false)


  //   // mouseup ***************************
  //   this.canvas.addEventListener('mouseup', (e) =>{
  //     isDragging = false;
  //     for (let k in o) {
  //       o[k].bool = false;
  //     }
  //    }, false); 

  //    // mouseout ***************************
  //    this.canvas.addEventListener('mouseout', (e) =>{
  //      isDragging = false;
  //      for (let k in o) {
  //        o[k].bool = false;
  //      }
  //     }, false);
  // }

  // //functions to method drop
  // #drwGuides(lines){
  //       //draw guides in pictures
  //   for(let k in lines){
  //     this.ctx.fillStyle=lines[k].color;
  //     this.ctx.beginPath();
  //     this.ctx.fillRect(lines[k].x,lines[k].y,lines[k].w,lines[k].h);
  //   }
  // }
  
  // #imgNew(o,d,proportion){
  //   return {
  //      sx:o.sy.x,
  //      sy:o.sx.y,
  //      sw:o.sh.x-o.sy.x,
  //      sh:o.sw.y-o.sx.y,
  //      w: ~~((o.sh.x - o.sy.x) * proportion),
  //      h: ~~((o.sw.y - o.sx.y) * proportion),
  //      x: d.x,
  //      y: d.y
  //   }
  // }

  // #cursorStyle(o,mousePos){
  //    this.canvas.style.cursor="default";
     
  //    for (let k in o) { //o[k].bool = false;
  //     this.ctx.beginPath();
  //     this.ctx.rect(o[k].x - 10, o[k].y - 10, o[k].w + 20, o[k].h + 20);
  //     if (this.ctx.isPointInPath(mousePos.x, mousePos.y)) {
  //       if (k == "sx" || k == "sw") {
  //         this.canvas.style.cursor = "row-resize";
  //       } else {
  //         this.canvas.style.cursor = "col-resize";
  //       }
  //       break;
  //     } else {
  //       this.canvas.style.cursor = "default";
  //     }
  //   }
  // }

  // #oMousePos(evt){
  //   let rect=this.canvas.getBoundingClientRect();
  //   return{
  //     x:Math.round(evt.clientX-rect.left),
  //     y:Math.round(evt.clientY-rect.top)
  //   }
  // }
  
  //nota del programador 
  //falta mejorar el drop y agregar rotacion

}