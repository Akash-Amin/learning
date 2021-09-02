

import React,{useEffect,useState} from 'react';
import axios from "axios";

function ApiRequest() {






    let [data,setData]=useState([]);
    
   let [selectedBreed,setSelectedBreed]=useState("appenzeller");
   let [images,setImages]=useState([]);
   let [selectedSubBreed,setSelectedSubBreed]=useState([]);

    useEffect(() => {
        
    fetch("https://dog.ceo/api/breeds/list/all").then((result)=>{result.json().then((res)=>{ console.warn("result",res.message)
    
    
    let key=Object.keys(res.message);
    console.warn("keys",key)
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
//console.log(res.data.message.length)
console.log(res.data.message)
setSelectedSubBreed(res.data.message)
       })
    }


    
  // console.log(setImages);


    let len=data.length;
    console.log(len);
    
    let i=0; 
    let j=0; 

    
    function loadSubBreed(){
       var URL = `https://dog.ceo/api/breed/${selectedBreed}/list`;
       
 
        axios.get(URL)
       .then(res=>{
        
//console.log(res.data.message)
//setSelectedSubBreed(res.data.message)
console.log(res.data)
    })}
   

    return (
        <div>       
        <div>
          <select name="select" onChange={
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
           </div>
           <div>
           <select name="selectedSubBreed" onChange={
               (e)=>{
                   setSelectedSubBreed(e.target.value);
                 
                   console.log(e.target.value)
                   loadSubBreed();
                  

               }
               
           }>
         
           {
            selectedSubBreed.map(dat=> <option>{selectedSubBreed[j++]}</option>)
              }
           </select>
           </div>

        </div>
            
        
        )
        
      {/*}  const [num,setNum]=useState();

        useEffect(()=>{
            async function getData(){
                const res = await axios.get("https://dog.ceo/api/breeds/list/all")
            }

        });
    */}
        

}

export default ApiRequest;


/*










//function ApiRequest() {
/*
async function start(){
    const response=await fetch("https://dog.ceo/api/breeds/list/all")
    const data=await response.json()
    createBreadList(data.message)
}
start()

function createBreadList(breedList){

}

}

export default createBreadList;

/*import React,{useEffect,useState} from 'react';
//import axios from "axios";

function ApiRequest() {






   // let [data,setData]=useState([])

   // useEffect(() => {
        
  //  fetch("https://dog.ceo/api/breeds/list/all").then((result)=>{result.json().then((res)=>{ console.warn("result",res.message)
   // setData(res) })

  {/*}
    let key=Object.keys(res.message);


    console.warn("keys",key)
    setData(key)
    console.warn("sss",key[0])
    
    
   //console.warn("aaa",res.message.key)
  // setData(res.message)
   //let change=JSON.parse(data);
   //console.warn("change",change);

   // let change=JSON.parse(res.message);
    //console.warn("change",change)
  //  })
  //  })}, [])
   

    return (
        <div>        
         <ul>
              {
                  data.map(dat=> <li>{dat}</li>)
              }
          </ul>

          <ul>
              <h1>jj</h1>
          </ul>
          
        </div>
        )
        
        const [num,setNum]=useState();

        useEffect(()=>{
            async function getData(){
                const res = await axios.get("https://dog.ceo/api/breeds/list/all")
            }

        });
        

}

export default ApiRequest;*/








/*

    
    function loadImages(){
        
        var URL = `https://dog.ceo/api/breed/${selectedBreed}/images`;
        axios.get(URL)
       .then(res=>{
         //  var tempImages=[];
          // for (var a in res.data.message){
            //   tempImages.push(a)
              // setImages(prev=>[...res.data.message])
          // }
           //console.log(images.length)
//console.log(res.data.message.length)
console.log(res)
       })
    }
    */