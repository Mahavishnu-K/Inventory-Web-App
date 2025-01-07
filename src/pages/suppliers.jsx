import Navbar from "../components/navbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
import '@/styles/suppliers.css';
import { LuFilter } from "react-icons/lu";
import { FaFileExport } from "react-icons/fa6";
import { BsFillPrinterFill } from "react-icons/bs";
import { AddSupplier } from "../components/addSuppliers";
import { SupplierDetail } from "../components/supplierDetail";

const Suppliers = () => {
    const [supplierData, setSupplierData] = useState([]);

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
      console.log("New Supplier Added:", newSupplier);
    
      const newSupplierData = {
        sNo: supplierData.length + 1,
        company: newSupplier.company || "Unknown",
        supplierName: newSupplier.supplierName || "N/A",
        emailId: newSupplier.emailId || "Unknown",
        phoneNumber: newSupplier.phoneNumber || "Unknown",
        gstNo: newSupplier.gstNo || "N/A",
        category: newSupplier.category || "Uncategorized"
      };
    
      setSupplierData((prevData) => [...prevData, newSupplierData]); 
      console.log("Updated Supplier Data:", [...supplierData, newSupplierData]);

    };
    
    const [showOverlay, setShowOverlay] = useState(false);
    const [showOverlayAdd, setShowOverlayAdd] = useState(false);
  
  
    const toggleOverlay = () => setShowOverlay(!showOverlay);
    const toggleOverlayAdd = () => setShowOverlayAdd(!showOverlayAdd);

    return (
      <>
        <div style={{ display: 'flex' }}>
          <Navbar />
          <div style={{ flex: 1, padding: '20px' }}>
              <div className="container">
                <h1 className="supplier-title">Suppliers</h1>
                <div className="supplier-buttons">
                  <div className="leftControls">
                    <button className="filterButton">Filter <LuFilter size={18}/></button>
                  </div>
                  <div className="rightControls">
                    <button className="actionButton-export">Export PDF <FaFileExport /> </button>
                    <button className="actionButton-print">Print <BsFillPrinterFill /> </button>
                    <button className="addButton" onClick={toggleOverlayAdd}>Add Suppliers <FaPlus/> </button>
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
                              <td><button className="viewButton" onClick={toggleOverlay}>View Detail</button></td>
                              
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
          </div>
        </div>
        <AddSupplier isOpen={showOverlayAdd} onClose={() => setShowOverlayAdd(false)} onSupplierAdded={handleSupplierAdded}/>
        <SupplierDetail isOpen={showOverlay} onClose={() => setShowOverlay(false)}/>
        </>
    );
};

export default Suppliers;
