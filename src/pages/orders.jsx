import Navbar from "../components/navbar";
import React, { useState, useEffect } from "react";
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
            { id: "01", company: "company name", name: "name1", email: "abc@gmail.com", date: "23102023" },
            { id: "02", company: "company name", name: "name2", email: "def@gmail.com", date: "24102023" },
            { id: "03", company: "company name", name: "name3", email: "ghi@gmail.com", date: "25102023" },
            { id: "04", company: "company name", name: "name4", email: "ghi@gmail.com", date: "25102023" },
            { id: "05", company: "company name", name: "name5", email: "ghi@gmail.com", date: "25102023" },
            { id: "06", company: "company name", name: "name6", email: "ghi@gmail.com", date: "25102023" }
        ];
        setSuppliers(mockData);
        setLoading(false);
        }, 500); 
    }, []);

    return(
        <>
            <div style={{ display: 'flex' }}>
                <Navbar/>
                <div style={{ flex: 1, padding: '20px' }}>
                <div className={styles.appContainer}>
                    <header className={styles.header}>
                        <button className={styles.backButton}>←</button>
                        <select className={styles.categorySelect}>
                        <option>Select Product Category</option>
                        {/* Add categories as needed */}
                        </select>
                        <div className={styles.actionButton}>
                            <button >Track Shipments</button>
                            <button >Request Return</button>
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
                        <label>
                        Product:
                        <input type="text" value={product} onChange={(e) => setProduct(e.target.value)} placeholder="Enter the product" />
                        </label>
                        <label>
                        Quantity:
                        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Enter product quantity" />
                        </label>
                        <label>
                        Warehouse Address:
                        <textarea value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter Address"></textarea>
                        </label>
                        <div className={styles.paymentSection}>
                        Payment:
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
                        <div className={styles.formButtons}>
                        <button type="button" className={styles.cancelButton}>Cancel</button>
                        <button type="button" className={styles.placeOrderButton}>Place order</button>
                        <button type="submit" className={styles.proceedButton}>Proceed</button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Orders