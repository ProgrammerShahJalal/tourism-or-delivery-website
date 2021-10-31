import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://shrouded-tundra-27347.herokuapp.com/tours')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleDelete = id => {
        const result = window.confirm('Are you sure to delete?');
        if (result) {
            const url = `https://shrouded-tundra-27347.herokuapp.com/tours/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Deleted Successfully!')
                        const remaining = services.filter(service => service._id !== id);
                        setServices(remaining);
                    }
                    console.log(data);
                })
        }

    }
    return (
        <div className="text-center mx-5">
            <h2 className='title'>Manage Services</h2>
            {
                services.map(service => <div key={service._id}>
                    <div className="row border rounded border-primary mb-3 py-3 d-flex justify-content-center align-items-center">
                        <img className='col-md-4 special-img' src={service.img} alt="" />
                        <h4 className='col-md-4'>{service.name}</h4>
                        <button className='mb-3 h-25 regular-btn col-md-4' onClick={() => handleDelete(service._id)}>Delete</button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ManageServices;