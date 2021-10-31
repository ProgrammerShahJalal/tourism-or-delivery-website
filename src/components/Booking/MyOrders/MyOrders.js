import React, { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth/useAuth";

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://shrouded-tundra-27347.herokuapp.com/allOrders/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [user?.email]);

    const handleDelete = email => {
        const result = window.confirm('Are you sure to delete?');
        if (result) {
            const url = `https://shrouded-tundra-27347.herokuapp.com/allOrders/${email}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully!')
                        const remaining = orders.filter(pd => pd.email !== email);
                        setOrders(remaining);
                    }
                    console.log(data);
                })
        }

    }

    return (
        <div className='manage-service-box container-fluid'>
            <div>
                <h1>My Orders {orders?.length}</h1>
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
                                <td>{pd?.text}</td>
                                <button onClick={() => handleDelete(pd._id)} className="btn bg-danger text-white p-2">Delete</button>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
        </div>
    );
};

export default MyOrders;