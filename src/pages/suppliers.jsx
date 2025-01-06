import Navbar from "../components/navbar";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import '@/styles/suppliers.css';
import { LuFilter } from "react-icons/lu";
import { FaFileExport } from "react-icons/fa6";
import { BsFillPrinterFill } from "react-icons/bs";
import { AddSupplier } from "../components/addSuppliers";
import { SupplierDetail } from "../components/supplierDetail";

const Suppliers = () => {
    const [tableData, setTableData] = useState([]);

    const mockData = [
      { serialNumber: 1, company: "Tech Solutions Ltd.", supplier: "Alpha Supplies Co.", email: "alpha@supplies.com", phoneNumber: "987-654-3210", gstNumber: "GSTALPHA1234" },
      { serialNumber: 2, company: "Eco Builders Inc.", supplier: "Green Materials Ltd.", email: "green@materials.com", phoneNumber: "984-651-2210", gstNumber: "GSTGREEN5678" },
      { serialNumber: 3, company: "Urban Decorators LLC", supplier: "Metro Paints", email: "metro@paints.com", phoneNumber: "981-651-8810", gstNumber: "GSTMETRO9101" },
      { serialNumber: 4, company: "Modern Electronics", supplier: "PowerTech Distributors", email: "powertech@distributors.com", phoneNumber: "980-123-4410", gstNumber: "GSTPOWER4321" },
      { serialNumber: 5, company: "Prime Logistics", supplier: "Speedy Couriers", email: "speedy@couriers.com", phoneNumber: "989-654-2233", gstNumber: "GSTSPEED1234" },
      { serialNumber: 6, company: "BlueWave Solutions", supplier: "Digital Partners Ltd.", email: "digital@partners.com", phoneNumber: "990-555-3311", gstNumber: "GSTDIGITAL6789" },
      { serialNumber: 7, company: "SteelWorks Inc.", supplier: "IronForge Supplies", email: "ironforge@supplies.com", phoneNumber: "987-123-1212", gstNumber: "GSTIRON1212" },
      { serialNumber: 8, company: "AgriTech Solutions", supplier: "Farmers First", email: "farmers@first.com", phoneNumber: "992-456-7890", gstNumber: "GSTFARM4567" },
      { serialNumber: 9, company: "Global Traders", supplier: "Oceanic Imports", email: "oceanic@imports.com", phoneNumber: "981-789-4560", gstNumber: "GSTOCEAN7890" },
      { serialNumber: 10, company: "Solar Energy Corp.", supplier: "Renewable Panels Ltd.", email: "renewable@panels.com", phoneNumber: "983-654-7899", gstNumber: "GSTSOLAR5678" },
      { serialNumber: 11, company: "Foodie's Delight", supplier: "Organic Grocers", email: "organic@grocers.com", phoneNumber: "980-123-4567", gstNumber: "GSTFOOD1234" }
  ];
  
  const [showOverlay, setShowOverlay] = useState(false);
  const [showOverlayAdd, setShowOverlayAdd] = useState(false);
  
    useEffect(() => {
      const fetchData = () => {
        setTimeout(() => {
          setTableData(mockData);
        }, 500);
      };
      fetchData();
    }, []);
  
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
                          {tableData.map((row, index) => (
                            <tr key={index}>
                              <td>{row.serialNumber}</td>
                              <td>{row.company}</td>
                              <td>{row.supplier}</td>
                              <td>{row.email}</td>
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
        <AddSupplier isOpen={showOverlayAdd} onClose={() => setShowOverlayAdd(false)}/>
        <SupplierDetail isOpen={showOverlay} onClose={() => setShowOverlay(false)}/>
        </>
    );
};

export default Suppliers;
