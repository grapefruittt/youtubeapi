import React from 'react';
import axios from 'axios';
import {useReducer, useEffect} from 'react';
import { findByLabelText } from '@testing-library/react';
import './Component.css';

function reducer(state,action){
  switch(action.type){
    case 'LOADING':
      return { loading : true, data:null, error:null};
    case 'SUCCESS':
      console.log(action.data);
      return {loading : false, data: action.data, error: null };
    case 'ERROR':
      return {loading : false, data:null, error:null};
    default:
      throw new Error('unhandled action type ${action.type}');

  }
}


function Component3() {
  var url="abc";
  const array =[];
  var value=encodeURI("비오는소리asmr");
  const youtubeurl='https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDFsv1j21WwWmaZyQawt64f_RosQTC6WTY&maxResults=5&q="'+value+'"';

  const[state,dispatch]=useReducer(reducer,{loading: false, data: null, error: null});
  
  const fetchusers = async()=>{
    dispatch({type:'LOADING'});
    try{
      const response = await axios.get(youtubeurl);
      dispatch({type:'SUCCESS', data:response.data})
      console.log(response.data);
    }
    catch(e){
      dispatch({type:'ERROR',error:e});
    }
  }

  useEffect(()=>{
    fetchusers();
  },[]);

  const { loading, data:users, error } = state;
  if(loading) return <div>로딩중..</div>;
  if(error) return <div>에러 발생</div>;
  if(users){
    console.log(users);
    for(let i=0;i<5;i++){
      var abc = users.items[i].id.videoId;
      url="https://www.youtube.com/embed/"+abc;
      array.push(url);
    }
    
  }
  
  


  
  return (
    
    <div className="d">
      <div className="title">비 오는 소리 asmr</div>
      <div>
      {array.map(urls => (
        <iframe name="y" id="ytplayer" type="text/html" width="320" height="180" frameborder="0"
        src={urls}/>
      ))}
      </div>
    </div>
  );

}



export default Component3;
