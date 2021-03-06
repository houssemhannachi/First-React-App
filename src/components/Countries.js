import axios from 'axios';
import React , {useState, useEffect } from 'react';
import Card from './Card';


const Countries = () => {
    const [data,setData] = useState([]);
    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all?fields=name,population,region,capital,flag')
        .then((resp) =>  setData(resp.data));
    },[])
    console.log(data);
    return (
        <div className="countries">
            <ul className="countries-list">
            {data.map((country) =>(
                //  <li> {} </li>
                <Card country={country} key={country.name['common']}/>
                ))}
            </ul>
        </div>
    );
};

export default Countries;