import React, { useState, useEffect } from "react";
import axios from "axios";
import { LuFilter } from "react-icons/lu";
import { FaRupeeSign } from "react-icons/fa";
import { BiSolidPackage } from "react-icons/bi";
import { TbArrowsSort } from "react-icons/tb";
import styles from '@/styles/reports.module.css';
import ReportTable from "../components/reportTable";
import Navbar from '../components/navbar'

const Reports = () => {
    const [data, setData] = useState({
        totalValue: 0,
        StockQuantity: 0,
    });

    useEffect(() => {
      const fetchData = async () => {
        try {
          const mockData = {
            totalValue: 24389,
            StockQuantity: 25,
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

    const [dat, setDat] = useState([]);

    useEffect(() => {
        const mockDat = [
            { id: 1, item: "Item1", status: "Approved" },
            { id: 2, item: "Item2", status: "Disapproved" },
            { id: 3, item: "Item3", status: "Approved" },
            { id: 4, item: "Item4", status: "Pending" },
        ];

        setTimeout(() => {
            setDat(mockDat);
        }, 500);
    }, []);

    return (
      <>
        <div style={{ display: 'flex' }}>
          <Navbar/>
          <div style={{ flex: 1, padding: '20px' }}>
            <div className={styles.page}>
              <div className={styles.reportPage}>
                <h1 className={styles.title}>Reports</h1>
                
                <div className={styles.reports}>
                  <nav>
                    <h3>Inventory Report</h3>
                    <div className={styles.reportContainer}>
                      <div className={styles.reportBox}>
                        <p>Total Inventory Value</p>
                        <h2 className={styles.rupee}>
                          <span><FaRupeeSign size={24} /></span>
                          {data.totalValue}
                        </h2>
                      </div>
                      <div className={styles.reportBox}>
                        <p>Stock Quantity</p>    
                        <h2 className={styles.stock}>
                          <span><BiSolidPackage size={30} /></span>
                          {data.StockQuantity}
                        </h2>
                      </div>
                    </div>
                  </nav>

                  <nav className={styles.returnTable}>
                    <h3>Return Status Report</h3>
                    <div className={styles.returnReport}>
                      <table>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Item</th>
                                <th>Return Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dat.map((row, index) => (
                                <tr key={row.id}>
                                    <td>{index + 1}</td>
                                    <td>{row.item}</td>
                                    <td className={
                                      row.status === "Approved" ? styles.approved :
                                      row.status === "Disapproved" ? styles.disapproved :
                                      styles.pending
                                    }>
                                        {row.status}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                      </table>
                    </div> 
                  </nav>
                </div>   

                <div className={styles.container}>
                  <div><h3>Purchase Report</h3></div>
                  <div className={styles.buttonContainer}>
                      <button className={styles.button}>
                        Filter by <span className={styles.downArrow}><LuFilter /></span>
                      </button>
                      <button className={styles.button}>
                        Sort by <span className={styles.sortIcon}><TbArrowsSort /></span>
                      </button>
                  </div>
                </div>

                <div className={styles.reportTable}>
                  <ReportTable/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Reports;
