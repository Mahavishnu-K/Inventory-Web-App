import Navbar from "../components/navbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
import '@/styles/suppliers.css';
import { LuFilter } from "react-icons/lu";
import { FaFileExport } from "react-icons/fa6";
import { AddSupplier } from "../components/addSuppliers";
import { SupplierDetail } from "../components/supplierDetail";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Suppliers = () => {
    const [supplierData, setSupplierData] = useState([]);
    const [selectedSupplier, setSelectedSupplier] = useState(null);

    const fetchData = async () => {
        try {
            const token = localStorage.getItem('authToken');
            if (!token) {
                console.error('No token found. Please log in again.');
                window.location.href = '/login';
                return;
            }

            const response = await axios.get('http://localhost:5000/api/suppliers', {
                headers: { Authorization: `Bearer ${token}` },
            });

            console.log("Backend Response:", response.data);

            const formattedData = response.data.map((item, index) => ({
                _id: item._id, 
                sNo: index + 1,
                company: item.company || "Unknown",
                supplierName: item.supplierName || "N/A",
                emailId: item.emailId || "Unknown",
                phoneNumber: item.phoneNumber || "Unknown",
                gstNo: item.gstNo || "N/A",
                category: item.category || "Uncategorized"
            }));

            setSupplierData(formattedData);

        } catch (error) {
            console.error("Error fetching product data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSupplierAdded = (newSupplier) => {
        setSupplierData((prevData) => [
            ...prevData,
            {
                _id: newSupplier._id, 
                sNo: prevData.length + 1,
                company: newSupplier.company || "Unknown",
                supplierName: newSupplier.supplierName || "N/A",
                emailId: newSupplier.emailId || "Unknown",
                phoneNumber: newSupplier.phoneNumber || "Unknown",
                gstNo: newSupplier.gstNo || "N/A",
                category: newSupplier.category || "Uncategorized",
            },
        ]);
    };

    const [showOverlay, setShowOverlay] = useState(false);
    const [showOverlayAdd, setShowOverlayAdd] = useState(false);

    const toggleOverlayAdd = () => setShowOverlayAdd(!showOverlayAdd);

    const handleViewDetail = (supplier) => {
        if (!supplier._id) {
            console.error("Selected supplier does not have an _id:", supplier);
            return;
        }
        setSelectedSupplier(supplier);
        setShowOverlay(true);
    };

    const handleExportPDF = () => {
        const doc = new jsPDF();

        doc.text("Supplier Details", 14, 10);

        const tableColumn = ["S No", "Company", "Supplier Name", "Email ID", "Phone Number", "GST No", "Category"];
        const tableRows = supplierData.map((row) => [
            row.sNo,
            row.company,
            row.supplierName,
            row.emailId,
            row.phoneNumber,
            row.gstNo,
            row.category,
        ]);

        doc.autoTable({
            head: [tableColumn],
            body: tableRows,
            startY: 20, 
        });

        doc.save("Supplier_Details.pdf");
    };

    return (
        <>
            <div style={{ display: 'flex' }}>
                <Navbar />
                <div style={{ flex: 1, padding: '20px' }}>
                    <div className="container">
                        <h1 className="supplier-title">Suppliers</h1>
                        <div className="supplier-buttons">
                            <div className="leftControls">
                                <button className="filterButton">Filter <LuFilter size={18} /></button>
                            </div>
                            <div className="rightControls">
                                <button className="actionButton-export" onClick={handleExportPDF}>
                                    Export PDF <FaFileExport />
                                </button>
                                <button className="addButton" onClick={toggleOverlayAdd}>
                                    Add Suppliers <FaPlus />
                                </button>
                            </div>
                        </div>
                        <div className="tableContainer">
                            <div className="tableScrollable">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>S No</th>
                                            <th>Company</th>
                                            <th>Supplier Name</th>
                                            <th>Email ID</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {supplierData.map((row, index) => (
                                            <tr key={index}>
                                                <td>{row.sNo}</td>
                                                <td>{row.company}</td>
                                                <td>{row.supplierName}</td>
                                                <td>{row.emailId}</td>
                                                <td>
                                                    <button
                                                        className="viewButton"
                                                        onClick={() => handleViewDetail(row)}
                                                    >
                                                        View Detail
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AddSupplier
                isOpen={showOverlayAdd}
                onClose={() => setShowOverlayAdd(false)}
                onSupplierAdded={handleSupplierAdded}
            />
            <SupplierDetail
                isOpen={showOverlay}
                onClose={() => setShowOverlay(false)}
                supplier={selectedSupplier}
                onSupplierDeleted={(id) => {
                    setSupplierData((prev) => prev.filter((sup) => sup._id !== id));
                }}
                onSupplierUpdated={(updatedSupplier) => {
                    setSupplierData((prev) =>
                        prev.map((sup) => (sup._id === updatedSupplier._id ? updatedSupplier : sup))
                    );
                }}
            />
        </>
    );
};

export default Suppliers;
