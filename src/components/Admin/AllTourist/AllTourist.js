import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";


const AllTourist = () => {
    const [tourist, setTourist] = useState([]);

    useEffect(() => {
        fetch("https://shrouded-tundra-27347.herokuapp.com/allTourst")
            .then((res) => res.json())
            .then((data) => setTourist(data));
    }, []);

    return (
        <div>
            <h1>AllTourist {tourist?.length}</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {tourist?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd?.name}</td>
                            <td>{pd?.email}</td>
                            <td>{pd?.date}</td>
                            <button className="btn bg-danger p-2">Delete</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default AllTourist;