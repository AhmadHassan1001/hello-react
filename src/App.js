import './App.css';


import {useState,useEffect} from 'react';

import {DataProvider} from './contexts/dataContext';
import search from './functions/search';
import {
  Routes,
  Route,
} from "react-router-dom";

import Home from './components/Home';
import CoursePage from './components/CoursePage';
import UdemyNavBar from './components/UdemyNavBar';
import UdemyFooter from './components/UdemyFooter';


function App() {
  const [data,setData]=useState({"data":[],"isloading":true,"error":""});
  console.log("Parent");
  useEffect(()=>{
    if(data["isloading"]){
      //fetch('http://localhost:4000/homepage')
      fetch('https://api.npoint.io/764e024c93bc594705f2')
    .then((response)=>{
      return response.json();
    })
    .then((json)=>{
      console.log("json1");
      console.log(json);
      let json2={"data":json["homepage"],"isloading":false,"error":""};
      ///let json2={"data":json,"isloading":false,"error":""};
      setData(json2);
      console.log(json2);
      
    });
    }
    
  },[]);

  
    return (

      <DataProvider value={data}>
        <div className="App">
          <UdemyNavBar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/courses/:courseId' element={<CoursePage/>}></Route>
          </Routes>
          <UdemyFooter/>
        </div>

      </DataProvider>
    );

}

export default App;
