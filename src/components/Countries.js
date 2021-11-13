import axios from 'axios';
import React , {useState, useEffect } from 'react';


const Countries = () => {
    const [data,setData] = useState([]);
    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all?fields=name,population,region,capital,flag')
        .then((resp) =>  setData(resp.data));
    },[])
    console.log(data);
    return (
        <div className="countries">
            <ul>
            {data.map((country) =>(
                 <li> {country.name['common']} </li>
                ))}
            </ul>
        </div>
    );
};

export default Countries;