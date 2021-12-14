import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './mainContent.css';

export default function MainContent() {
    // useState dataCountry, all countries, specific country and variable loading
    const [dataCountry, setDataCountry] = useState({ confirmed: 0, deaths: 0, lastUpdate: '' });
    const [country, setCountry] = useState({ countryISO: 'MX', country: 'Mexico' });
    const [allCountries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    // fetching countries
    useEffect(() => {
        fetch("https://covid19.mathdro.id/api/countries/")
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            .then(data => {
                //console.log("data Countries: ", data.countries);
                setCountries(data.countries);
            })
            .catch(err => {
                console.error("Error fetching the countries: ", err);
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);

    // fetching data
    useEffect(() => {
        fetch("https://covid19.mathdro.id/api/countries/" + country.countryISO)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            .then(data => {
                //console.log(data);
                setDataCountry({ confirmed: data.confirmed.value, deaths: data.deaths.value, lastUpdate: data.lastUpdate.toString() })
            })
            .catch(err => {
                console.error("Error fetching the country data: ", err);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [country]);

    // end fetching data
    if (loading) {
        return (
            <div className="spinner-border text-danger" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        );
    }

    function updateCountry(e) {
        //alert(e.target.value);        
        //console.log(e.target.value.split(' '));
        let country = e.target.value.split('*');
        setCountry({ countryISO: country[0], country: country[1] });
    }

    return (
        <div className="p-3" id='covid-country'>
            <hr />
            <h2>Covid-19 in {country.country}</h2>
            <select className="form-control" defaultValue={'DEFAULT'} onChange={updateCountry}>
                <option disabled value="DEFAULT" >Select country</option>
                {
                    allCountries.map((country, i) => {
                        if (country.iso3 !== undefined) {
                            return <option key={i + country} value={country.iso3 + '*' + country.name}> {country.name} </option>
                        }
                    })
                }
            </select>
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col-md-6'>
                        <p className='item-main-content'> <i className="fas fa-user-times mr-2"></i> Confirmed: {dataCountry.confirmed}</p>
                    </div>
                    <div className='col-md-6'>
                        <p className='item-main-content'> <i className="fas fa-clinic-medical mr-2"></i> Deaths: {dataCountry.deaths}</p></div>
                </div>
            </div>

            <Link to={`/covid-data-webapp/${country.countryISO}/region`}>
                <button className='btn btn-success mb-3'>View regions in {country.country}</button>
            </Link>
            <p className='text-left text-muted'>Last Update: {dataCountry.lastUpdate}</p>
        </div>
    )
}