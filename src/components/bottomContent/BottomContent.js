import React, { useEffect, useState } from 'react';
import './bottomContent.css';

export default function BottomContent() {

    // date variables
    let todayDate = new Date(Date.now() - 86400000); // 1 day - 1000 * 60 * 60 * 24
    let today = todayDate.getMonth() + 1 + '-' + todayDate.getDate() + '-' + todayDate.getFullYear();
    let yesterdayDate = new Date(Date.now() - (86400000 * 2)); // 2 day - 1000 * 60 * 60 * 24
    let yesterday = yesterdayDate.getMonth() + 1 + '-' + yesterdayDate.getDate() + '-' + yesterdayDate.getFullYear();
    //console.log("yest ", yesterday);
    let weekAgoDate = new Date(Date.now() - (86400000 * 7)); // 7 days
    let weekAgo = weekAgoDate.getMonth() + 1 + '-' + weekAgoDate.getDate() + '-' + weekAgoDate.getFullYear();
    //console.log("week", weekAgo);
    let monthAgoDate = new Date(Date.now() - (86400000 * 30)); // 1 month
    let monthAgo = monthAgoDate.getMonth() + 1 + '-' + monthAgoDate.getDate() + '-' + monthAgoDate.getFullYear();
    //console.log("month", monthAgo);
    let yearAgoDate = new Date(Date.now() - (86400000 * 365)); // 1 year
    let yearAgo = yearAgoDate.getMonth() + 1 + '-' + yearAgoDate.getDate() + '-' + yearAgoDate.getFullYear();
    //console.log("year", yearAgo);

    // state
    const [daily, setDaily] = useState({ daily: today });
    const [dailyData, setDailyData] = useState({ data: [] });
    const [loading, setLoading] = useState(true);

    // fetching daily data
    useEffect(() => {
        fetch("https://covid19.mathdro.id/api/daily/" + daily.daily)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                throw res;
            })
            .then(data => {
                //console.log(data);
                setDailyData({ data: data });
            })
            .catch(err => {
                console.error("Error fetching daily data: ", err);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [daily]);

    // end fetching daily data
    if (loading) {
        return (
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        );
    }

    function updateDate(e) {
        //alert(e.target.value);
        setDaily({ daily: e.target.value });
    }

    return (
        <div className="p-3" id='daily-summary' style={{ border: "dotted 2px black" }}>
            <h2>Daily Summary</h2>
            <p><i className="far fa-calendar-alt"></i> Today: {new Date().toDateString()}</p>
            <select defaultValue={'DEFAULT'} className="form-control form-control-sm" onChange={updateDate}>
                <option disabled value="DEFAULT" >Select date</option>
                <option value={today}>Today</option>
                <option value={yesterday}>Yesterday</option>
                <option value={weekAgo}>A week ago / {weekAgo}</option>
                <option value={monthAgo}>A month ago / {monthAgo}</option>
                <option value={yearAgo}>A year ago / {yearAgo}</option>
            </select>
            <div className='container-fluid mt-3'>
                <div className='row'>
                    {
                        dailyData.data.map((region, i) => {
                            if (i < 6) {
                                return (
                                    <div className='col-sm-6 col-md-3 col-lg-4' key={i + region.combinedKey}>
                                        <div className="card mb-3">
                                            <p className="text-center"> Region: <b>{region.combinedKey}</b></p>
                                            <p className="text-left p-2"> Confirmed: {region.confirmed}</p>
                                            <p className="text-left p-2"> Deaths: {region.deaths}</p>
                                            <p className="text-left p-2" title="Is determined by taking the total number of new cases of an event and dividing that by the sum of the person-time of the at-risk population."> Incident Rate: {parseFloat(region.incidentRate).toFixed(2)}</p>
                                            <p className="text-left p-2" title="Is the ratio between confirmed deaths and confirmed cases."> Case Fatality Ratio: {parseFloat(region.caseFatalityRatio).toFixed(2)}</p>
                                            <p className="text-left text-muted"> Last Update: {region.lastUpdate}</p>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <button className='btn btn-success mb-3'>View More</button>
            </div>
        </div>
    )
}