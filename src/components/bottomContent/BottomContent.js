import React from 'react';
import './bottomContent.css';

export default function BottomContent() {

    let date = new Date().toDateString();
    let today = new Date().getMonth() + 1 + '-' + new Date().getDate() + '-' + new Date().getFullYear();
    console.log("tod", today);
    let yesterdayDate = new Date(Date.now() - 86400000); // 1 day - 1000 * 60 * 60 * 24
    let yesterday = yesterdayDate.getMonth() + 1 + '-' + yesterdayDate.getDate() + '-' + yesterdayDate.getFullYear();
    console.log("yest ", yesterday);
    let weekAgoDate = new Date(Date.now() - (86400000 * 7)); // 7 days
    let weekAgo = weekAgoDate.getMonth() + 1 + '-' + weekAgoDate.getDate() + '-' + weekAgoDate.getFullYear();
    console.log("week", weekAgo);
    let monthAgoDate = new Date(Date.now() - (86400000 * 30)); // 1 month
    let monthAgo = monthAgoDate.getMonth() + 1 + '-' + monthAgoDate.getDate() + '-' + monthAgoDate.getFullYear();
    console.log("month", monthAgo);
    let yearAgoDate = new Date(Date.now() - (86400000 * 365)); // 1 year
    let yearAgo = yearAgoDate.getMonth() + 1 + '-' + yearAgoDate.getDate() + '-' + yearAgoDate.getFullYear();
    console.log("year", yearAgo);

    return (
        <div className="m-3" id='daily-summary' style={{ border: "dotted 2px black" }}>
            <h2>Daily Summary</h2>
            <p>Today: {date}</p>
            <select defaultValue={'DEFAULT'} className="form-control form-control-sm">
                <option disabled value="DEFAULT" >Select date</option>
                <option>Today</option>
                <option>Yesterday</option>
                <option>A week ago</option>
                <option>A month ago</option>
                <option>A year ago</option>
            </select>
            <div className='container-fluid mt-3'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className="card mb-3">
                            <p className="text-center"> Title country </p>
                            <p className="text-left p-2"> Confirmed: </p>
                            <p className="text-left p-2"> Deaths: </p>
                            <p className="text-left p-2"> Incident Rate: </p>
                            <p className="text-left p-2"> Case Fatality Ratio: </p>
                            <p className="text-left text-muted">Last Update: </p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card mb-3">
                            <p className="text-center"> Title country </p>
                            <p className="text-left p-2"> Confirmed: </p>
                            <p className="text-left p-2"> Deaths: </p>
                            <p className="text-left p-2"> Incident Rate: </p>
                            <p className="text-left p-2"> Case Fatality Ratio: </p>
                            <p className="text-left text-muted">Last Update: </p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="card mb-3">
                            <p className="text-center"> Title country </p>
                            <p className="text-left p-2"> Confirmed: </p>
                            <p className="text-left p-2"> Deaths: </p>
                            <p className="text-left p-2"> Incident Rate: </p>
                            <p className="text-left p-2"> Case Fatality Ratio: </p>
                            <p className="text-left text-muted">Last Update: </p>
                        </div>
                    </div>
                </div>
                <button className='btn btn-success mb-3'>View More</button>
            </div>
        </div>
    )
}