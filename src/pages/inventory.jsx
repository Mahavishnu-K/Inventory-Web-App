import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
import { LuFilter } from "react-icons/lu";
import InventoryTable from '../components/inventoryTable';
import Navbar from '../components/navbar';
import { AddNewItem } from '../components/additems';
import styles from '@/styles/inventory.module.css';

const Inventory = () => {
  const [inventoryData, setInventoryData] = useState([]);
  const [data, setData] = useState({
    totalProducts: 0,
    outOfStock: 0,
    inStock: 0,
  });
  const [showOverlay, setShowOverlay] = useState(false);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        console.error('No token found. Please log in again.');
        window.location.href = '/login';
        return;
      }
  
      const response = await axios.get('http://localhost:5000/api/inventory', {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      console.log("Backend Response:", response.data);
  
      const formattedData = response.data.map((item, index) => ({
        serialNo: index + 1,
        productName: item.itemName || "Unknown",
        productId: item.productId || "N/A",
        quantity: item.quantity || 0,
        expiryDate: item.expiryDate ? new Date(item.expiryDate).toLocaleDateString() : "NA",
        category: item.category || "Uncategorized",
        status: item.quantity > 0 ? "In Stock" : "Out of Stock",
      }));
  
      setInventoryData(formattedData);
  
      setData({
        totalProducts: formattedData.length,
        outOfStock: formattedData.filter(item => item.status === "Out of Stock").length,
        inStock: formattedData.filter(item => item.status === "In Stock").length,
      });
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };
  
  
  useEffect(() => {
    fetchData();
  }, []);

  const handleItemAdded = (newItem) => {
    console.log("New Item Added:", newItem);
  
    const newItemData = {
      serialNo: inventoryData.length + 1,
      productName: newItem.itemName || "Unknown",
      productId: newItem.productId || "N/A",
      quantity: newItem.quantity || 0,
      expiryDate: newItem.expiryDate ? new Date(newItem.expiryDate).toLocaleDateString() : "NA",
      category: newItem.category || "Uncategorized",
      status: newItem.quantity > 0 ? "In Stock" : "Out of Stock",
    };
  
    setInventoryData((prevData) => {
      const updatedData = [...prevData, newItemData];
      console.log("Updated Inventory Data:", updatedData);
      return updatedData;
    });
  
    setData((prevData) => ({
      ...prevData,
      totalProducts: prevData.totalProducts + 1,
      inStock: newItem.quantity > 0 ? prevData.inStock + 1 : prevData.inStock,
      outOfStock: newItem.quantity === 0 ? prevData.outOfStock + 1 : prevData.outOfStock,
    }));
  };
  

  const toggleOverlay = () => setShowOverlay(!showOverlay);

  return (
    <>
      <div style={{ display: 'flex' }}>
        <Navbar />
        <div style={{ flex: 1, padding: '20px' }} className={showOverlay ? styles.blurBackground : ''}>
          <div className={styles.page}>
            <div className={styles.productStatusContainer}>
              <h1 className={styles.title}>Products</h1>
              <div className={styles.statusContainer}>
                <div className={styles.statusBox}>
                  <p>Total Products</p>
                  <h2>{data.totalProducts}</h2>
                </div>
                <div className={styles.line}></div>
                <div className={`${styles.statusBox} ${styles.outOfStock}`}>
                  <p>Out of Stock</p>
                  <h2>{data.outOfStock}</h2>
                </div>
                <div className={styles.line}></div>
                <div className={`${styles.statusBox} ${styles.inStock}`}>
                  <p>In Stock</p>
                  <h2>{data.inStock}</h2>
                </div>
              </div>
              
              <div className={styles.container}>
                <input
                  type="text"
                  placeholder="Search Products..."
                  className={styles.searchInput}
                />
                <div className={styles.buttonContainer}>
                  <button className={styles.button}>
                    Filter by <span className={styles.dropdownArrow}><LuFilter /></span>
                  </button>
                  <button className={styles.button} onClick={toggleOverlay}>
                    Add Items <span className={styles.addIcon}><FaPlus /></span>
                  </button>
                </div>
              </div>

              <div className={styles.table}>
                <InventoryTable products={inventoryData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <AddNewItem isOpen={showOverlay} onClose={() => setShowOverlay(false)} onItemAdded={handleItemAdded} />
    </>
  );
};

export default Inventory;
