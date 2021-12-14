import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './mainContent.css';

export default function MainContentRegion() {

    const { region } = useParams();

    const [province, setProvince] = useState([]);
    const [loading, setLoading] = useState(true);

    // fetching data
    useEffect(() => {
        fetch("https://covid19.mathdro.id/api/countries/" + region + "/confirmed")
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            .then(data => {
                //console.log(data);
                setProvince(data)
            })
            .catch(err => {
                console.error("Error fetching the province data: ", err);
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);

    // end fetching data
    if (loading) {
        return (
            <div className="spinner-border text-danger" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        );
    }

    return (
        <div className="p-3" id='covid-country'>
            <h2>Covid-19 in {region}</h2>
            <div className='container mt-3'>
                <div className='row'>
                    {
                        province.map((province, i) => {
                            return (
                                <div className='col-12 col-sm-6 col-md-4 mt-2' key={i + province}>
                                    <div className="card" style={{ width: "18rem" }}>
                                        <div className="card-body">
                                            <h5 className="card-title">{province.provinceState}</h5>
                                            <p className='text-muted'>{province.conbinedKey}</p>
                                            <h6 className="card-subtitle mb-2 text-left"><i className="fas fa-head-side-cough mr-1"></i>Active: {province.active}</h6>
                                            <h6 className="card-subtitle mb-2 text-left"><i className="fas fa-clipboard-list mr-1"></i> Confirmed: {province.confirmed}</h6>
                                            <h6 className="card-subtitle mb-2 text-left"><i className="fas fa-cross mr-1"></i> Deaths: {province.deaths}</h6>
                                            <h6 className="card-subtitle mb-2 text-left"><i className="fas fa-calendar-alt mr-1"></i> Cases last 28 days: {province.cases28Days}</h6>
                                            <h6 className="card-subtitle mb-2 text-left"><i className="fas fa-calendar-times mr-1"></i> Deaths last 28 days: {province.deaths28Days}</h6>
                                            <h6 className="card-subtitle mb-2 text-left"><i className="fas fa-chart-line mr-1"></i> Incident rate: {parseFloat(province.incidentRate).toFixed(2)}</h6>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}