import Navbar from "../components/navbar";
import React, { useEffect, useState } from "react";
import '@/styles/suppliers.css';
import { FaArrowLeft } from "react-icons/fa";

const Suppliers = () => {
    const [tableData, setTableData] = useState([]);

    const mockData = [
        {
            serialNumber: 1,
            company: "Company 1",
            supplier: "Supplier 1",
            email: "supplier1@example.com",
            phoneNumber: "123-456-7810",
            gstNumber: "GST001XYZ"
        },
        {
            serialNumber: 2,
            company: "Company 2",
            supplier: "Supplier 2",
            email: "supplier2@example.com",
            phoneNumber: "123-456-7811",
            gstNumber: "GST002XYZ"
        },
        {
            serialNumber: 3,
            company: "Company 3",
            supplier: "Supplier 3",
            email: "supplier3@example.com",
            phoneNumber: "123-456-7812",
            gstNumber: "GST003XYZ"
        }
    ];

    useEffect(() => {
        const fetchData = () => {
            setTimeout(() => {
                setTableData(mockData);
            }, 500);
        };
        fetchData();
    }, []);

    return (
        <div style={{ display: 'flex' }}>
            <Navbar />
            <div style={{ flex: 1, padding: '20px' }}>
                <h1 className="supplier-title">Suppliers</h1>
                <div className="container">
                    <div className="body">
                        <div className="topControls">
                            <div className="leftControls">
                                <FaArrowLeft className="backIcon" />
                                <button className="filterButton">Filter</button>
                            </div>
                            <div className="rightControls">
                                <button className="actionButton">Export PDF</button>
                                <button className="actionButton">Print</button>
                                <button className="addButton">Add Suppliers +</button>
                            </div>
                        </div>
                        <div className="table-container">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Serial Number</th>
                                        <th>Company</th>
                                        <th>Supplier</th>
                                        <th>Email ID</th>
                                        <th>Phone Number</th>
                                        <th>GST No</th>
                                        <th>Profile</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((row, index) => (
                                        <tr key={index}>
                                            <td>{row.serialNumber}</td>
                                            <td>{row.company}</td>
                                            <td>{row.supplier}</td>
                                            <td>{row.email}</td>
                                            <td>{row.phoneNumber}</td>
                                            <td>{row.gstNumber}</td>
                                            <td><a href="#">View Image</a></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Suppliers;
