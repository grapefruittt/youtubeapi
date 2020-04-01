import React from 'react';
import axios from 'axios';
import {useReducer, useEffect} from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import './App.css';



function App() {

  

  const dbtest = async()=>{
    const res = await axios.get('/api/test');
    console.log(res.data);
    console.log("aaa");
  }
  
  useEffect(()=>{
    dbtest();
  },[]);
  
  
  
  
  return (
    
    <>
      <Component1></Component1>
      <Component2></Component2>
      <Component3></Component3>
    </>
  );

}



export default App;
