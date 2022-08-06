import React, { useState, useEffect } from 'react';
import './Styles.css'
 
function TableData () {
    const [data, getData] = useState([])
    const URL = 'https://dummy.ngbots.com/student/by-state/Delaware';
 
    useEffect(() => {
        fetchData()
    }, [])
 
 
    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())
 
            .then((response) => {
                console.log(response);
                getData(response);
            })
 
    }
 
    return (
        <>
            <h1>Displaying the details of students in the state of Delaware</h1>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>SSN</th>
                    <th>University</th>
                    <th>Address</th>
                </tr>
                {data.map((item, i) => (
                    <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.ssn}</td>
                        <td>{item.university}</td>
                        <td>{`${item.address.buildingNbr}, ${item.address.streetName}, ${item.address.city}, ${item.address.state}, 
                        ${item.address.country}, ${item.address.pincode}`}</td>
                    </tr>
                ))}
            </tbody>
 
        </>
    );
}
 
export default TableData;