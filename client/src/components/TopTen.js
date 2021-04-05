import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import { CSVLink } from "react-csv";

// input for CSVLink 
const HEADERS = [
    { label: 'Nickname', key: 'player.nickname' },
    { label: 'Score', key: 'score' },
    { label: 'Date', key: 'createdAt' },
];
const API_URL="http://localhost:5000/api";

function TopTen() {

    const [data, setData] = useState([]);
    const [lastUpdated, setLastUpdated] = useState(null);


    // get data from db
    const fetchData = useCallback(async () => {
        try {
            const result = await axios.get(`${API_URL}/scores`);
            setData(result.data);
            const date = new Date(Date.now());
            setLastUpdated(date.toLocaleString());
        } catch (e) {
            console.log('Error while fetching data from api endpoint /api/scores')
        }
    }, [setData])

    useEffect(() => {
        // Bring data for the first time
        fetchData();
        // Set an interval for refreshing data every 10 sec
        const interval = setInterval(() => {
            fetchData();
        }, 10000)

        return () => clearInterval(interval);
    }, [])

    return (
        <div className="col-md-6 offset-md-3">
            <table className="table table-sm">
                <tbody>
                    {data.map(({ _id, player: { nickname }, score }, index) => (
                        <tr key={_id} className="row">
                            <th scope="row" className="col-md-2">{index + 1}</th>
                            <td className="col-md-8">{nickname}</td>
                            <td className="col-md-2 text-center">{score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="text-center p-2">
                <CSVLink
                    data={data}
                    headers={HEADERS}
                    filename={"TopTenScores.csv"}
                    className="btn btn-outline-primary btn-sm"
                    target="_blank">
                    <i className="fa fa-download"></i> CSV
                </CSVLink>
            </div>
            <small className="m-3">Last updated: {lastUpdated}</small>
        </div>
    )
}

export default TopTen
