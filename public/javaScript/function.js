const pexelApi=async(url,apikey)=>{
       let resp=await fetch(url,{
         headers:{
            "Authorization":apikey
         }
       })
       let data= await resp.json();
       return data;
}

//render img
const render=(imgTag)=>{
    imgTag.forEach(element => {
        let img=element.src;
        let url;
        element.src="";
        element.style.background=element.getAttribute('color');

        //render img with fetch
        fetch(img)
             .then(resp=>resp.blob())
             .then(blob=>{
                url=URL.createObjectURL(blob);
             })
             .catch(error=>{
                console.log(error);
             })
             .finally(()=>{
                element.style.background="white";
                element.src=url;
             })
    });
}


//send and get session values
const ajax =async (url,method,callback,data=null)=>{
    let  resp;
   if(method=="GET"){
       resp=await fetch(url,{
         method:method,
         headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
         },
      })
   }else if(method=="POST"){
       resp=await fetch(url,{
         method:method,
         mode:"same-origin",
         credentials:"same-origin",
         headers:{
            'Content-Type': 'application/json',
         },
         body:JSON.stringify(data)
      })

   }
   

   callback(await resp.text());
}

//img functions
const search=(query)=>{
    return pexelApi("https://api.pexels.com/v1/search?query="+query+"",'n9rsRPJxQg2ehBgJHHhY5MlE6hhm89LUYMX6wJOHe3vnAeQ8EiQJDiTl')
}


//downlaod img
async function download(imageSrc,name){
   const image = await fetch(imageSrc);
   const imageBlog=await image.blob();
   const imageURL=URL.createObjectURL(imageBlog);
  
   alert("ya se inicio la descarga");
   const link=document.createElement('a');
   link.href=imageURL;
   link.download=name;
   document.body.appendChild(link);
   link.click();
   document.body.removeChild(link);
}



export{render,ajax,search,download};