import React,{useEffect,useState} from 'react';
import axios from "axios";
//import "./design.css";
import  "./design.css";

function ApiRequest() {






    let [data,setData]=useState([]);
   let [selectedBreed,setSelectedBreed]=useState("appenzeller");
   let [images,setImages]=useState([]);
   let [selectedSubBreed,setSelectedSubBreed]=useState([]);
   let [length,setLength]=useState();
   let [selectedSubBreedImages,setSelectedSubBreedImages]=useState([ ]);
   
   let [selectedBreedImage,setSelectedBreedImage]=useState([ ]);

    useEffect(() => {
        
    fetch("https://dog.ceo/api/breeds/list/all").then((result)=>{result.json().then((res)=>{ console.warn("result",res.message)
    
    
    let key=Object.keys(res.message);
    //console.warn("keys",key)
   setData(key)




})

    })}, [])

    
    function loadImages(){
        
       // var URL = `https://dog.ceo/api/breed/${selectedBreed}/list`;
        //https://dog.ceo/api/breed/hound/list
        var URL = `https://dog.ceo/api/breed/${selectedBreed}/list`;
 
        axios.get(URL)
       .then(res=>{
         //  var tempImages=[];
          // for (var a in res.data.message){
            //   tempImages.push(a)
              // setImages(prev=>[...res.data.message])
          // }
           //console.log(images.length)
console.log(res.data.message.length)
setLength(res.data.message.length)
//console.log("FFFF",res.data)
setSelectedSubBreed(res.data.message)
       })

       var URL2 =`https://dog.ceo/api/breed/${selectedBreed}/images`;
       axios.get(URL2)
       .then(res=>{
       setSelectedBreedImage(res.data.message)
      // console.log(res.data.message)
       //console.log("aaaaa",selectedBreedImage)
       
       })
     
    }


    
  // console.log(setImages);


    let len=data.length;
    console.log(len);
    
    let i=0; 
    let j=0; 
    let k=0;
{/*}
    
    function loadSubBreed(){
       var URL = `https://dog.ceo/api/breed/${selectedBreed}/list`;
       
 
        axios.get(URL)
       .then(res=>{
        
//console.log(res.data.message)
//setSelectedSubBreed(res.data.message)
console.log(res.data)
    })}
*/}

    return (
        <div className="main">       
        <h1 className="main-heading">DOG-WORLD</h1>
      
        <div className="breed-select-main">
       
       
          <select className="breed-select" name="select" onChange={
               (e)=>{
                   setSelectedBreed(e.target.value);
                 
                   console.log(e.target.value)
                   loadImages();

               }
               
           }>
         
           {
                  data.map(dat=> <option>{data[i++]}</option>)
              }
           </select>
           <h4 className="breed-count">TOTAL SUB BREEDS   -    {length}</h4>
       
           </div>
           <div className="breed-count-data" >
           {/*}
           <select name="selectedSubBreed" onChange={
               (e)=>{
                   setSelectedSubBreed(e.target.value);
                 
                   console.log(e.target.value)
                   loadSubBreed();
                  

               }
               
           }>*/}
         <ul className="breed-count-data">
         
           {
            selectedSubBreed.map(dat=> <option>{selectedSubBreed[j++]}</option>)
              }
              </ul>
          {/*} </select>*/}
           </div>
           <div className="image-main">
        
      
        <div className="image-sub">
               {
                   
                selectedBreedImage.map(i=>{
                       return (
                           <img className="all-img" src={selectedBreedImage[k++]}/>
                       )
                   })
                   
               }
               </div>
        </div>

        </div>
            
        
        )

}

export default ApiRequest;
