import { useState, useEffect } from 'react';
import react from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import countriesData from './countries.json';
import axios from 'axios';


function App() {
  const [countries, setCountries] = useState(countriesData)

  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then(result => 
      setCountries(result.data))
  }, [])
  return (
  <div className="App">
      <Navbar></Navbar>
      <div className="container">
        {/* <!-- Bootstrap row wrapper div --> */}
        <div className="row">
          {/* <!-- Countries List (Bootstrap column) --> */}
          <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
            <div className="list-group">
             <CountriesList countries={countries}/>
            </div>
          </div> 
          <Routes>
            <Route path='/:alpha3Code' element={<CountryDetails countries={countries}></CountryDetails>}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;