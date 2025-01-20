import Navbar from "../components/navbar";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "@/styles/orders.module.css";
import axios from "axios";

function Orders() {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("UPI/Card");
  const [categories, setCategories] = useState([]); 
  const [suppliers, setSuppliers] = useState([]); 
  const [selectedCategory, setSelectedCategory] = useState(""); 
  const [selectedSupplier, setSelectedSupplier] = useState(""); 

  const token = localStorage.getItem('authToken'); 
  useEffect(() => {
      const fetchCategories = async () => {
          try {
              const response = await axios.get('http://localhost:5000/api/suppliers/categories', {
                  headers: {
                      Authorization: `Bearer ${token}`, 
                  },
              });
              setCategories(Array.isArray(response.data) ? response.data : []);
          } catch (error) {
              console.error('Error fetching categories:', error);
          }
      };
  
      const fetchSupplierEmails = async () => {
          try {
              const response = await axios.get('http://localhost:5000/api/suppliers/emails', {
                  headers: {
                      Authorization: `Bearer ${token}`, 
                  },
              });
              setSuppliers(Array.isArray(response.data) ? response.data : []); 
          } catch (error) {
              console.error('Error fetching supplier emails:', error);
          }
      };
  
      fetchCategories();
      fetchSupplierEmails();
  }, [token]); 

  const handlePlaceOrder = async () => {
    if (!product || !quantity || !address || !selectedCategory || !selectedSupplier) {
      alert("Please fill in all required fields.");
      return;
    }
  
    const orderDetails = {
      product,
      quantity,
      address,
      paymentMethod,
      category: selectedCategory,
      supplier: selectedSupplier,
    };
  
    try {
      const response = await axios.post("http://localhost:5000/api/orders", orderDetails, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert(response.data.message);
      console.log("Order placed:", response.data.order);
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    }
  };
  
  return (
    <>
      <div style={{ display: "flex" }}>
        <Navbar className={styles.navbar} />
        <div style={{ flex: 1, padding: "20px" }}>
          <div className={styles.appContainer}>
            <h1 className={styles.titles}>Orders</h1>
            <div className={styles.header}>
              <div className={styles.title}>
                <h2>Place Your Orders Here!</h2>
              </div>

              <div className={styles.actionButton}>
                <Link to="track-page">
                  <button>Track Shipments</button>
                </Link>
                <Link to="/return-page">
                  <button>Request Return</button>
                </Link>
              </div>
            </div>

            <form
              className={styles.orderForm}
              onSubmit={(e) => {
                e.preventDefault();
                handlePlaceOrder();
              }}
            >
              <div className={styles.formGroup}>
                <label className={styles.label1}>
                  Product
                  <h3>:</h3>
                  <input
                    type="text"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    placeholder="Enter the product"
                    className={styles.input}
                    required
                  />
                </label>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label2}>
                  Category
                  <h3>:</h3>
                  <select
                    className={styles.categorySelect}
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    required
                  >
                    <option value="">Select product category</option>
                    {categories.map((category, index) => (
                      <option key={index} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label2}>
                  Supplier
                  <h3>:</h3>
                  <select
                    className={styles.categorySelect}
                    value={selectedSupplier}
                    onChange={(e) => setSelectedSupplier(e.target.value)}
                    required
                  >
                    <option value="">Select supplier mail</option>
                    {suppliers.map((supplier, index) => (
                      <option key={index} value={supplier}>
                        {supplier}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label2}>
                  Quantity
                  <h3>:</h3>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Enter product quantity"
                    className={styles.input}
                    required
                  />
                </label>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label3}>
                  <p>Warehouse Address</p>
                  <h3>:</h3>
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter Address"
                    className={styles.textarea}
                    required
                  />
                </label>
              </div>

              <div className={styles.paymentSection}>
                <p>Payment</p>
                <h3>:</h3>
                <div className={styles.paymentOptions}>
                  <label>
                    <input
                      type="radio"
                      name="payment"
                      value="UPI/Card"
                      checked={paymentMethod === "UPI/Card"}
                      onChange={() => setPaymentMethod("UPI/Card")}
                    />
                    UPI/Card
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="payment"
                      value="Cash on delivery"
                      checked={paymentMethod === "Cash on delivery"}
                      onChange={() => setPaymentMethod("Cash on delivery")}
                    />
                    Cash on delivery
                  </label>
                </div>
              </div>

              <div className={styles.formButtons}>
                <button
                  type="button"
                  className={styles.cancelButton}
                  onClick={() => {
                    setProduct("");
                    setQuantity("");
                    setAddress("");
                    setSelectedCategory("");
                    setSelectedSupplier("");
                    setPaymentMethod("UPI/Card");
                  }}
                >
                  Cancel
                </button>
                <button type="submit" className={styles.placeOrderButton}>
                  Place order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Orders;
