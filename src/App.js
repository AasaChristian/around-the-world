import React, {useState ,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import DashBoard from './components/dashboard';

function App() {
  const [cData, setCData] = useState([])

  useEffect(() => {
    axios
    .get('https://restcountries-v1.p.rapidapi.com/all')
    .then(res => {
      console.log(res.data)
      setCData(res.data)
    })
    .catch(error => {
      console.log(error)
    })
  },[])

  console.log(cData, "cData")
  return (
    <div className="App">
      {cData.map(countries => (
        <DashBoard
        name ={countries.name}
        key = {countries.area}
        />
      ))}
    </div>
  );
}

export default App;
