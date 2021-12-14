import React, { useEffect, useState } from 'react';
import './topContent.css';

export default function TopContent() {
    // useState, dataCovid and variable loading
    const [dataCovid, setDataCovid] = useState({ confirmed: 0, deaths: 0, lastUpdate: '' });
    const [loading, setLoading] = useState(true);

    // fetching data
    useEffect(() => {
        fetch("https://covid19.mathdro.id/api")
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw res;
            })
            .then(data => {
                setDataCovid({ confirmed: data.confirmed.value, deaths: data.deaths.value, lastUpdate: data.lastUpdate });
            })
            .catch(err => {
                console.error("Error fetching the data: ", err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    // end fetching
    if (loading) {
        return (
            <div className="spinner-border text-primary mt-2" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        );
    }

    return (
        <div className='m-2' id='covid-world'>
            <h1 className="title-section mt-3">Covid-19 in the World</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-2">
                        <p>Confirmed: </p>
                        <div className="circle-wrap">
                            <div className="circle">
                                <div className="mask full">
                                    <div className="fill"></div>
                                </div>
                                <div className="mask half">
                                    <div className="fill"></div>
                                </div>
                                <div className="inside-circle"> {dataCovid.confirmed} </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-2">
                        <p>Deaths: </p>
                        <div className="circle-wrap">
                            <div className="circle">
                                <div className="mask mask-red full">
                                    <div className="fill fill-red"></div>
                                </div>
                                <div className="mask mask-red half">
                                    <div className="fill fill-red"></div>
                                </div>
                                <div className="inside-circle inside-circle-red"> {dataCovid.deaths} </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='text-muted text-left'>Last Update: {dataCovid.lastUpdate}</p>
            </div>
        </div>
    )
}