import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";


const AllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("https://shrouded-tundra-27347.herokuapp.com/allOrders")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    const handleDelete = id => {
        const result = window.confirm('Are you sure to delete?');
        if (result) {
            const url = `https://shrouded-tundra-27347.herokuapp.com/allOrders/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully!')
                        const remaining = orders.filter(pd => pd._id !== id);
                        setOrders(remaining);
                    }
                    console.log(data);
                })
        }

    }

    return (
        <div className='manage-service-box container-fluid'>
            <div>
                <h1>All Orders {orders?.length}</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Orders Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {orders?.map((pd, index) => (
                        <tbody>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{pd?.name}</td>
                                <td>{pd?.email}</td>
                                <td>{pd?.destination}</td>
                                <button onClick={() => handleDelete(pd._id)} className="btn bg-danger text-white p-2">Delete</button>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
        </div>
    );
};

export default AllOrders;