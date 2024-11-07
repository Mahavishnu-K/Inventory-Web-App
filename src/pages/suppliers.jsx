import Navbar from "../components/navbar";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import '@/styles/suppliers.css';
import { LuFilter } from "react-icons/lu";
import { FaFileExport } from "react-icons/fa6";
import { BsFillPrinterFill } from "react-icons/bs";


const Suppliers = () => {
    const [tableData, setTableData] = useState([]);

    const mockData = [
      { serialNumber: 1, company: "Company 1", supplier: "Supplier 1", email: "supplier1@example.com", phoneNumber: "123-456-7810", gstNumber: "GST001XYZ" },
      { serialNumber: 2, company: "Company 2", supplier: "Supplier 2", email: "supplier2@example.com", phoneNumber: "123-456-7811", gstNumber: "GST002XYZ" },
      { serialNumber: 3, company: "Company 3", supplier: "Supplier 3", email: "supplier3@example.com", phoneNumber: "123-456-7812", gstNumber: "GST003XYZ" },
      { serialNumber: 4, company: "Company 4", supplier: "Supplier 4", email: "supplier4@example.com", phoneNumber: "123-456-7813", gstNumber: "GST004XYZ" },
      { serialNumber: 5, company: "Company 5", supplier: "Supplier 5", email: "supplier5@example.com", phoneNumber: "123-456-7814", gstNumber: "GST005XYZ" },
      { serialNumber: 6, company: "Company 6", supplier: "Supplier 6", email: "supplier6@example.com", phoneNumber: "123-456-7815", gstNumber: "GST006XYZ" },
      { serialNumber: 7, company: "Company 7", supplier: "Supplier 7", email: "supplier7@example.com", phoneNumber: "123-456-7816", gstNumber: "GST007XYZ" },
      { serialNumber: 8, company: "Company 8", supplier: "Supplier 8", email: "supplier7@example.com", phoneNumber: "123-456-7816", gstNumber: "GST007XYZ" },
      { serialNumber: 9, company: "Company 9", supplier: "Supplier 9", email: "supplier7@example.com", phoneNumber: "123-456-7816", gstNumber: "GST007XYZ" },
      { serialNumber: 10, company: "Company 10", supplier: "Supplier 10", email: "supplier7@example.com", phoneNumber: "123-456-7816", gstNumber: "GST007XYZ" },
      { serialNumber: 11, company: "Company 11", supplier: "Supplier 11", email: "supplier7@example.com", phoneNumber: "123-456-7816", gstNumber: "GST007XYZ" }
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
              <div className="container">
                <h1 className="supplier-title">Suppliers</h1>
                <div className="buttons">
                  <div className="leftControls">
                    <button className="filterButton">Filter <LuFilter size={18}/></button>
                  </div>
                  <div className="rightControls">
                    <button className="actionButton-export">Export PDF <FaFileExport /> </button>
                    <button className="actionButton-print">Print <BsFillPrinterFill /> </button>
                    <button className="addButton">Add Suppliers <FaPlus/> </button>
                  </div>
                </div>
                  <div className="tableContainer">
                    <div className="tableScrollable">
                      <table>
                        <thead>
                          <tr>
                            <th>Serial Number</th>
                            <th>Company</th>
                            <th>Supplier</th>
                            <th>Email ID</th>
                            <th>Phone Number</th>
                            <th>GST No</th>
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
