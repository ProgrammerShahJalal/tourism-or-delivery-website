import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";


const AllTourist = () => {
    const [tourist, setTourist] = useState([]);

    useEffect(() => {
        fetch("https://shrouded-tundra-27347.herokuapp.com/allTourist")
            .then((res) => res.json())
            .then((data) => setTourist(data));
    }, []);

    const handleDelete = id => {
        const result = window.confirm('Are you sure to delete?');
        if (result) {
            const url = `https://shrouded-tundra-27347.herokuapp.com/allTourist/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully!')
                        const remaining = tourist.filter(pd => pd._id !== id);
                        setTourist(remaining);
                    }
                    console.log(data);
                })
        }

    }

    return (
        <div className='manage-service-box container-fluid'>
            <div>
                <h1>AllTourist {tourist?.length}</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {tourist?.map((pd, index) => (
                        <tbody>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{pd?.name}</td>
                                <td>{pd?.email}</td>
                                <td>{pd?.date}</td>
                                <button onClick={() => handleDelete(pd._id)} className="btn bg-danger p-2">Delete</button>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
        </div>
    );
};

export default AllTourist;