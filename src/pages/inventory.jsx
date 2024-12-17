import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPlus } from "react-icons/fa";
import { LuFilter } from "react-icons/lu";
import InventoryTable from '../components/inventoryTable';
import Navbar from '../components/navbar';
import { AddNewItem } from '../components/additems';
import styles from '@/styles/inventory.module.css';

const Inventory = () => {
  const [data, setData] = useState({
    totalProducts: 0,
    outOfStock: 0,
    inStock: 0,
  });
  
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("");
        setData(response.data);
        
        const mockData = {
          totalProducts: 100,
          outOfStock: 25,
          inStock: 75,
        };
        
        setTimeout(() => {
          setData(mockData);
        }, 500);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    fetchData();
  }, []);

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
                <InventoryTable />
              </div>
            </div>
          </div>
        </div>
      </div>
      
        
      <AddNewItem isOpen={showOverlay} onClose={() => setShowOverlay(!showOverlay)} />
          

    </>
  );
};

export default Inventory;
