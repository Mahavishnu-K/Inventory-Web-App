import Navbar from "../components/navbar";
import React from "react";
import { Bar } from "react-chartjs-2";
import '@/styles/dashboard.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  
  const data = {
    salesOverview: {
      revenue: "₹ 18,300",
      profit: "₹ 868",
      cost: "₹ 17,432",
    },
    inventorySummary: {
      quantityInHand: 868,
      toBeReceived: 200,
    },
    todaySales: {
      sales: "₹ 832",
    },
    purchaseOverview: {
      purchase: 82,
      cost: "₹ 13,573",
      cancel: 5,
      return: 7,
    },
    productSummary: {
      numberOfSuppliers: 31,
      numberOfCategories: 21,
    },
  };

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Revenue",
        data: [10000, 15000, 25000, 22000, 17000, 24000, 20000, 22000, 18000, 24000, 15000, 20000],
        backgroundColor: "#428DF7",
      },
      {
        label: "Profit",
        data: [2000, 8000, 15000, 5000, 3000, 12000, 7000, 9000, 4000, 10000, 3000, 5000],
        backgroundColor: "#D91189",

      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "black", 
          font: {
            size: 14,
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "black",
        },
      },
      y: {
        ticks: {
          color: "black", 
        },
      },
    },
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        <Navbar />
        <div className="dashboard-container" style={{ flex: 1, padding: '20px' }}>
          <div className="main-content">
              <div className="first-card">
                  {/* Sales Overview Card */}
                  <div className="card">
                    <h3>Sales Overview</h3>
                    <nav className="data-container">
                      <div className="card-item">
                          <p>Revenue</p>
                          <p>{data.salesOverview.revenue}</p>
                      </div>
                      <div className="card-item">
                          <p>Profit</p>
                          <p>{data.salesOverview.profit}</p>
                      </div>
                      <div className="card-item">
                          <p>Cost</p>
                          <p>{data.salesOverview.cost}</p>
                      </div>
                    </nav>
                  </div>

                  {/* Inventory Summary Card */}
                  <div className="card">
                    <h3>Inventory Summary</h3>
                    <nav className="data-container">
                      <div className="card-item">
                          <p>Quantity in Hand</p>
                          <p>{data.inventorySummary.quantityInHand}</p>
                      </div>
                      <div className="card-item">
                          <p>To be Received</p>
                          <p>{data.inventorySummary.toBeReceived}</p>
                      </div>
                    </nav>
                  </div>

                  {/* Today Sales Card */}
                  <div className="card">
                    <h3>Today Sales</h3>
                    <nav className="data-container">
                      <div className="card-item">
                          <p>Sales</p>
                          <p>{data.todaySales.sales}</p>
                      </div>
                    </nav>
                  </div>
              </div>

              <div className="second-card">
                  {/* Purchase Overview Card */}
                  <div className="card">
                      <h3>Purchase Overview</h3>
                      <nav className="data-container">
                        <div className="card-item">
                            <p>Purchase</p>
                            <p>{data.purchaseOverview.purchase}</p>
                        </div>
                        <div className="card-item">
                            <p>Cost</p>
                            <p>{data.purchaseOverview.cost}</p>
                        </div>
                        <div className="card-item">
                            <p>Cancel</p>
                            <p>{data.purchaseOverview.cancel}</p>
                        </div>
                        <div className="card-item">
                            <p>Return</p>
                            <p>{data.purchaseOverview.return}</p>
                        </div>
                      </nav>
                  </div>

                  {/* Product Summary Card */}
                  <div className="card">
                      <h3>Product Summary</h3>
                      <nav className="data-container">
                        <div className="card-item">
                            <p>Number of Suppliers</p>
                            <p>{data.productSummary.numberOfSuppliers}</p>
                        </div>
                        <div className="card-item">
                            <p>Number of Categories</p>
                            <p>{data.productSummary.numberOfCategories}</p>
                        </div>
                      </nav>
                  </div>
              </div>

            <div className="chart-container">
              <h3>Revenue and Profit</h3>
              <Bar options={options} data={chartData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
