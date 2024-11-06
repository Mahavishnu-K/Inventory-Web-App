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
  // Mock data for backend response
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
      legend: { position: "top" },
      title: { display: true, text: "Revenue and Profit" },
    },
  };

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <div className="main-content">
            <div className="first-card">
                {/* Sales Overview Card */}
                <div className="card">
                <h3>Sales Overview</h3>
                <div className="card-item">
                    <span>Revenue</span>
                    <span>{data.salesOverview.revenue}</span>
                </div>
                <div className="card-item">
                    <span>Profit</span>
                    <span>{data.salesOverview.profit}</span>
                </div>
                <div className="card-item">
                    <span>Cost</span>
                    <span>{data.salesOverview.cost}</span>
                </div>
                </div>

                {/* Inventory Summary Card */}
                <div className="card">
                <h3>Inventory Summary</h3>
                <div className="card-item">
                    <span>Quantity in Hand</span>
                    <span>{data.inventorySummary.quantityInHand}</span>
                </div>
                <div className="card-item">
                    <span>To be Received</span>
                    <span>{data.inventorySummary.toBeReceived}</span>
                </div>
                </div>

                {/* Today Sales Card */}
                <div className="card">
                <h3>Today Sales</h3>
                <div className="card-item">
                    <span>Sales</span>
                    <span>{data.todaySales.sales}</span>
                </div>
                </div>
            </div>

            <div className="second-card">
                {/* Purchase Overview Card */}
                <div className="card">
                    <h3>Purchase Overview</h3>
                    <div className="card-item">
                        <span>Purchase</span>
                        <span>{data.purchaseOverview.purchase}</span>
                    </div>
                    <div className="card-item">
                        <span>Cost</span>
                        <span>{data.purchaseOverview.cost}</span>
                    </div>
                    <div className="card-item">
                        <span>Cancel</span>
                        <span>{data.purchaseOverview.cancel}</span>
                    </div>
                    <div className="card-item">
                        <span>Return</span>
                        <span>{data.purchaseOverview.return}</span>
                    </div>
                </div>

                {/* Product Summary Card */}
                <div className="card">
                    <h3>Product Summary</h3>
                    <div className="card-item">
                        <span>Number of Suppliers</span>
                        <span>{data.productSummary.numberOfSuppliers}</span>
                    </div>
                    <div className="card-item">
                        <span>Number of Categories</span>
                        <span>{data.productSummary.numberOfCategories}</span>
                    </div>
                </div>
            </div>

          <div className="chart-container">
            <Bar options={options} data={chartData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;