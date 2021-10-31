import React, { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth/useAuth";

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://shrouded-tundra-27347.herokuapp.com/myOrders/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [user.email]);

    console.log(orders);
    return (
        <div className='my-5 text-center'>
            <h1 className=''>My Orders</h1>
            <h3>My Orders : {orders.length} as {user.email}</h3>
        </div>
    );
};

export default MyOrders;