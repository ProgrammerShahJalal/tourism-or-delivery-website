import React, { useState } from "react";
import AddTourist from "../../AddTourist/AddTourist";
import AddService from "../../Booking/AddService/AddService";
import ManageServices from "../../Booking/ManageServices/ManageServices";
import AllTourist from "../AllTourist/AllTourist";

const AdminDashboard = () => {
    const [control, setControl] = useState("allTourist");

    console.log(control);
    return (
        <div className="admin-container">
            <div className="dashboard">
                <div className="admin-box">
                    <div className="row admin-container">
                        <div className="col-md-3 ">
                            <div className="admin-area p-1">
                                <h6>Dashboard</h6>
                                <div className="all-menu mt-5">
                                    <li
                                        onClick={() => setControl("allTourist")}
                                        className="admin-menu p-2"
                                    >
                                        All Tourist
                                    </li>
                                    <li
                                        onClick={() => setControl("addTourist")}
                                        className="admin-menu p-2"
                                    >
                                        Add Tourist
                                    </li>
                                    <li
                                        onClick={() => setControl("addService")}
                                        className="admin-menu p-2"
                                    >
                                        Add Service
                                    </li>
                                    <li
                                        onClick={() => setControl("allService")}
                                        className="admin-menu p-2"
                                    >
                                        Manage Services
                                    </li>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 text-center  text-center">
                            {control === "allTourist" && <AllTourist></AllTourist>}
                            {control === "allService" && <ManageServices></ManageServices>}
                            {control === "addService" && <AddService></AddService>}
                            {control === "addTourist" && <AddTourist></AddTourist>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;