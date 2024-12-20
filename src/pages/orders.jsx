import Navbar from "../components/navbar";
import React, { useState, useEffect } from "react";
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import styles from "@/styles/orders.module.css";


function Orders(){

    const [product, setProduct] = useState("");
    const [quantity, setQuantity] = useState("");
    const [address, setAddress] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("UPI/Card");
    const [suppliers, setSuppliers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        /*
        fetch("http://localhost:5000/suppliers")
        .then((response) => response.json())
        .then((data) => {
            setSuppliers(data);
            setLoading(false);
        })
        .catch((error) => console.error("Error fetching suppliers:", error));
        */

        setTimeout(() => {
            const mockData = [
                { id: "01", company: "Tech Solutions Inc.", name: "Alice Johnson", email: "alice.johnson@example.com", date: "23-10-2023" },
                { id: "02", company: "Global Innovations", name: "Michael Smith", email: "michael.smith@example.com", date: "24-10-2023" },
                { id: "03", company: "NextGen Software", name: "Sophia Brown", email: "sophia.brown@example.com", date: "25-10-2023" },
                { id: "04", company: "EcoTech Ltd.", name: "James Wilson", email: "james.wilson@example.com", date: "25-10-2023" },
                { id: "05", company: "Green Energy Corp.", name: "Emma Davis", email: "emma.davis@example.com", date: "26-10-2023" },
                { id: "06", company: "Smart Solutions", name: "William Taylor", email: "william.taylor@example.com", date: "27-10-2023" }
            ];
            
        setSuppliers(mockData);
        setLoading(false);
        }, 500); 
    }, []);

    return(
        <>
            <div style={{ display: 'flex' }}>
                <Navbar className={styles.navbar}/>
                <div style={{ flex: 1, marginTop: "-40px" }}>
                <div className={styles.appContainer}>
                <h1 className={styles.title}>Orders</h1>
                    <header className={styles.header}>
                        <select className={styles.categorySelect}>
                        <option>Select Product Category</option>
                        </select>
                        <div className={styles.actionButton}>
                            <Link to="track-page"><button >Track Shipments</button></Link>
                            <Link to="/return-page"><button >Request Return</button></Link>
                        </div>
                    </header>

                    <div className={styles.supplierSection}>
                        <h3>Available Suppliers</h3>
                        <div className={styles.supplierTable}>
                        {loading ? (
                            <p>Loading suppliers...</p>
                        ) : (
                            <table>
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Company</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {suppliers.map((supplier) => (
                                <tr key={supplier.id}>
                                    <td>{supplier.id}</td>
                                    <td>{supplier.company}</td>
                                    <td>{supplier.name}</td>
                                    <td>{supplier.email}</td>
                                    <td>{supplier.date}</td>
                                    <td>
                                    <button className={styles.selectButton}>Select</button>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                            </table>
                        )}
                        </div>
                    </div>

                    <form className={styles.orderForm}>
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
                                    />
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
                                    {paymentMethod === "UPI/Card" && (
                                        <button type="submit" className={styles.proceedButton}>Proceed</button>
                                    )}
                                </div>
                            </div>
                        <div className={styles.formButtons}>
                        <button type="button" className={styles.cancelButton}>Cancel</button>
                        <button type="button" className={styles.placeOrderButton}>Place order</button>

                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Orders