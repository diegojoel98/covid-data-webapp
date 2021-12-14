import React, { useEffect, useState } from 'react';

export default function Footer() {

    // state
    const [data, setData] = useState({ source: '', lastUpdate: '' });

    useEffect(() => {
        fetch("https://covid19.mathdro.id/api")
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            .then(data => {
                setData({ source: data.source, lastUpdate: data.lastUpdate });
            })
            .catch(err => {
                console.error("Error fetching source data: ", err);
            })
    }, [])

    return (
        <div className="container-fluid p-3" style={{ backgroundColor: "#C8E6C9" }}>
            <div className="row">
                <div className="col-12 col-md-4">
                    <i className="fas fa-database"></i> <b>Data source:</b> <a className='text-dark' href={data.source} target="_blank" rel="noreferrer">{data.source}</a>
                </div>
                <div className="col-12 col-md-4">
                    <i className="fas fa-address-book"></i> <b>Contact me: </b> dgongoragamboa@gmail.com
                </div>
                <div className="col-12 col-md-4">
                    <i className="fas fa-wrench"></i> <b>Last Update:</b> {data.lastUpdate}
                </div>
            </div>
        </div>
    )
}