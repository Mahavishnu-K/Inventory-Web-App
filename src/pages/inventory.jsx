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
      const response = await axios.get("http://localhost:5000/api/inventory");
      const formattedData = response.data.map((item, index) => ({
        serialNo: index + 1,
        productName: item.itemName,
        productId: item.productId,
        quantity: item.quantity,
        expiryDate: item.expiryDate ? new Date(item.expiryDate).toLocaleDateString() : "NA",
        category: item.category,
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
    const newItemData = {
      serialNo: inventoryData.length + 1,
      productName: newItem.itemName,
      productId: newItem.productId,
      quantity: newItem.quantity,
      expiryDate: newItem.expiryDate,
      category: newItem.category,
      status: newItem.quantity > 0 ? "In Stock" : "Out of Stock",
    };
    setInventoryData(prevData => [...prevData, newItemData]);

    setData(prevData => ({
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
