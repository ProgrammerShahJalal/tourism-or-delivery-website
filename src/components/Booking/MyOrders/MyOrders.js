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
        <div>
            <h1>My Orders : {orders.length} of {user.email}</h1>
        </div>
    );
};

export default MyOrders;