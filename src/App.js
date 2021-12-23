import React,{createRef, useEffect, useState} from 'react'
import './App.css';
import axios from "axios";



const baseURL = "http://api.weatherstack.com/current?access_key=b4dbd06255b0a8c68674f6979f8723af&query=";
let textInput=createRef()
//console.log(textInput)

function App() {
  const [post, setPost] = useState(null);
  const [val,setVal]=useState('mumbai')
  function texting(e) {
    console.log(textInput.current.value)
     setVal(textInput.current.value)
  }
  


  useEffect(() => {
    axios.get(`${baseURL}${val}`).then((response) => {
      console.log(response.data)
       return setPost(response.data);
    });
  },[]);

  if (!post) return null;

  return (
    <div className='App'>
    <input type='text' ref={textInput} /> <button onClick={texting}>click</button>
      <h1>AreaName:{post.location.name}</h1>
      <h4>CurrentTemperature:{post.current.temperature}*C</h4>
     
    </div>
  );
}


export default App;


//"http://api.weatherstack.com/current?access_key=f83963ecb7bb6a0c3a1eb9b428b25816&query=Mumbai"