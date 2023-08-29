import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';


function Dashboard() {
    const orgData = [

        {

            id: 101,

            name: 'Abacavir',

            quantity: 25,

            price: 150,

            expiry: 2022

        },

        {

            id: 102,

            name: 'Eltrombopag',

            quantity: 90,

            price: 550,

            expiry: 2021

        },

        {

            id: 103,

            name: 'Meloxicam',

            quantity: 85,

            price: 450,

            expiry: 2025

        },

        {

            id: 104,

            name: 'Allopurinol',

            quantity: 50,

            price: 600,

            expiry: 2023

        },

        {

            id: 105,

            name: 'Phenytoin',

            quantity: 63,

            price: 250,

            expiry: 2021

        },

    ]
    return (
        <React.Fragment>
            <div className='dashboard'>
                <h1 className='mb-5 fs-1'>Dashboard page :-</h1>

                <table>
                    <thead>
                        <tr className='bg-dark '>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Expiry</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orgData.map((item, index) => (
                                <tr key={index}>
                                    <th>{item.id}</th>
                                    <th>{item.name}</th>
                                    <th>{item.quantity}</th>
                                    <th>{item.price}</th>
                                    <th>{item.expiry}</th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <button className='back mt-3 rounded'>
                    <Link className='px-5 py-3 fw-bold fs-5' to='/'>Back</Link>
                </button>
            </div>
        </React.Fragment>
    )
}

export default Dashboard
