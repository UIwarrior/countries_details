/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Countries from './Countries';
import { Container, Row, Col } from 'react-bootstrap';
import '../stylesheets/App.css';
import Axios from 'axios';
import SearchBar from './Search';
import Sort from './Sort';

const Home = () => {

    const [countries, setCountries] = useState([]);
    const [regionArr,setRegions] = useState([]);
    const [loading, setLoading] = useState(true);
    let countriesArr = [];

    useEffect(async ()=> {
       Axios.get('https://restcountries.eu/rest/v2/all')
           .then((response) => {
                countriesArr = [...response.data];
                console.log(countriesArr);
                setCountries(response.data);
               let regions = response.data.map( val => val.region)
                    .filter((item,index,self) => {
                    return self.indexOf(item) === index
                })
                console.log(regions);
                setRegions(regions);
                setLoading(false);
           }) 
    }, [])


    const onSearchFunc = (e) =>{
        console.log(e.target.value);
        console.log(countriesArr);
        if(e.target.value === ''){
           setCountries(countriesArr); 
        }
        else {
            let filteredCountries = countries.filter( el => el.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1);
            console.log(filteredCountries);
            setCountries(filteredCountries);
        }
      
    }
}

export default Home;
