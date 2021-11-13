import React from 'react';

const Card = (props) => {
    const country = props.country;
    console.log(country);   
    return (
        
            <li className="card">
                <img src="https://flagicons.lipis.dev/flags/4x3/ar.asvg" alt="country.flag"/>
                <div className="data-container">
                    <ul>
                        <li>{country.name['common']}</li>
                        <li>{country.capital}</li>
                        <li>Pop : {country.population}</li>
                        <li>{country.region}</li>
                    </ul>
                </div>
            </li>
        
    );
};

export default Card;