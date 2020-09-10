import React, {useState ,useEffect} from 'react';
import {Route} from "react-router-dom";
import axios from "axios"
import './App.css';
import DashBoard from './components/dashboard';
import Country from './components/Country';

function App() {
  const [cData, setCData] = useState([])

  useEffect(() => {
    axios({
      "method":"GET",
      "url":"https://restcountries-v1.p.rapidapi.com/all",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"restcountries-v1.p.rapidapi.com",
      "x-rapidapi-key":"d99e177f0cmsh5c3cc2147cd5808p1ad5dcjsnd3c8290db918",
      "useQueryString":true
      }
      })
      .then((response)=>{
        console.log(response)
        setCData(response.data)
      })
      .catch((error)=>{
        console.log(error)
      })
  },[])

  return (
    <div className="App">
      <Route exact path="/"
      render={props => <DashBoard {...props} cData={cData}/>}
      />
      <Route 
      path ="/location/:name"
      render={props => <Country {...props} cData={cData} />} />
    </div>
  );
}

export default App;
