import React, { useEffect, useState } from 'react'
import './st.css';

const St = () => {
    const [data, setdata] = useState([])
    const getcovid = async () => {
        const res = await fetch('https://api.covid19india.org/data.json')
        const acty = await res.json()
        setdata(acty.statewise)

    }

    useEffect(() => {
        getcovid()

    }, []);


    return (
        <div>

            <div className="container-fluid mt-5">
                <div className="main-heading">
                    <h1 className="mb-5 text-center"> <span className="font-weight-bold">India covid dashboard</span></h1>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>recovered</th>
                                <th>death</th>
                                <th>active</th>
                                <th>updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((curr, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{curr.state}</td>
                                            <td>{curr.confirmed}</td>
                                            <td>{curr.recovered}</td>
                                            <td>{curr.death}</td>
                                            <td>{curr.active}</td>
                                            <td>{curr.lastupdatedtime}</td>
                                        </tr>

                                    )

                                })
                            }


                        </tbody>



                    </table>
                </div>
            </div>


        </div>
    )
}

export default St

