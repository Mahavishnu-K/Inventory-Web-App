import '@/styles/inventory.css'
import { FaPlus } from "react-icons/fa";
import { LuFilter } from "react-icons/lu";
import React, { useState, useEffect } from "react";
import axios from "axios";
import InventoryTable from '../components/inventoryTable';
import Navbar from '../components/navbar'

const Inventory = () => {
  const [data, setData] = useState({
    totalProducts: 0,
    outOfStock: 0,
    inStock: 0,
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("")
        setData(response.data)
        
        const mockData = {
          totalProducts: 100,
          outOfStock: 25,
          inStock: 75,
        };

        setTimeout(() => {
          setData(mockData);
        }, 500);
      } catch (error) {
        console.error("Error fetching product data:", error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <div style={{ display: 'flex' }}>
        <Navbar/>
        <div style={{ flex: 1, padding: '20px' }}>
          <div className = 'page'>
            <div className="product-status-container">
              <h1 className="title">Products</h1>
              <div className="status-container">
                <div className="status-box">
                  <p>Total Products</p>
                  <h2>{data.totalProducts}</h2>
                </div>
                <div className="line"></div>
                <div className="status-box out-of-stock">
                  <p>Out of Stock</p>
                  <h2>{data.outOfStock}</h2>
                </div>
                <div className="line"></div>
                <div className="status-box in-stock">
                  <p>In Stock</p>
                  <h2>{data.inStock}</h2>
                </div>
              </div>
                      
              <div className="container">
                <input
                  type="text"
                  placeholder="Search Products..."
                  className="search-input"
                />
                <div className='button-container'>
                    <button className="button">
                      Filter by <span className="dropdown-arrow"><LuFilter /></span>
                    </button>

                    <button className="button">
                      Add Items <span className="add-icon"><FaPlus /></span>
                    </button>
                </div>
              </div>

              <div className='table'>
                <InventoryTable/>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )

}


export default Inventory