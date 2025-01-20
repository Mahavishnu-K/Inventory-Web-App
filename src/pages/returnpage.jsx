import React, { useState } from "react";
import Navbar from "../components/navbar";
import "../styles/requestreturn.css";
import returnImage from "@/assets/returnImage.svg";

const RequestReturn = () => {
    const [suppliers] = useState([
        { id: 1, name: "Alpha Supplies Co." },
        { id: 2, name: "Green Materials Ltd." },
        { id: 3, name: "IronForge Supplies" },
        { id: 4, name: "Metro Paints" },
        { id: 5, name: "Digital Partners Ltd." }
    ]);
    

    const [formData, setFormData] = useState({
        product: "",
        productId: "",
        quantity: "",
        supplierId: "",
        reason: "",
        warehouseAddress: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSupplierChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            supplierId: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data submitted:", formData);
    };

    const handleReset = () => {
        setFormData({
            product: "",
            productId: "",
            quantity: "",
            supplierId: "",
            reason: "",
            warehouseAddress: "",
        });
    };

    return (
        <>
            <div style={{ display: "flex" }}>
                <Navbar />
                <div style={{ flex: 1, padding: "20px" }}>
                    <h2 className="title">Request Return</h2>
                    <div className="return-container">   
                        <div className="request-return-container">
                            <form className="return-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Product</label>
                                    <input
                                        type="text"
                                        name="product"
                                        value={formData.product}
                                        onChange={handleChange}
                                        placeholder="Enter product name"
                                        required
                                        className="input-field"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Product ID</label>
                                    <input
                                        type="text"
                                        name="productId"
                                        value={formData.productId}
                                        onChange={handleChange}
                                        placeholder="Enter product ID"
                                        required
                                        className="input-field"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Quantity</label>
                                    <input
                                        type="number"
                                        name="quantity"
                                        value={formData.quantity}
                                        onChange={handleChange}
                                        placeholder="Enter quantity"
                                        required
                                        className="input-field"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Supplier</label>
                                    <select
                                        name="supplierId"
                                        value={formData.supplierId}
                                        onChange={handleSupplierChange}
                                        required
                                        className="select-field"
                                    >
                                        <option value="" className="select-text">Select Supplier</option>
                                        {suppliers.map((supplier) => (
                                            <option key={supplier.id} value={supplier.id}>
                                                {supplier.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Reason for Return</label>
                                    <textarea
                                        name="reason"
                                        value={formData.reason}
                                        onChange={handleChange}
                                        placeholder="Enter reason"
                                        required
                                        className="input-field"
                                    ></textarea>
                                </div>

                                <div className="form-group">
                                    <label>Warehouse Address</label>
                                    <textarea
                                        name="warehouseAddress"
                                        value={formData.warehouseAddress}
                                        onChange={handleChange}
                                        placeholder="Enter warehouse address"
                                        required
                                        className="input-field"
                                    ></textarea>
                                </div>

                                <div className="form-group1">
                                    <button type="button" onClick={handleReset} className="return-cancel-button">
                                        Cancel
                                    </button>
                                    <button type="submit" className="return-button">
                                        Return
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Image Container */}
                        <div className="image-container">
                            <img src={returnImage} alt="Return Illustration" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RequestReturn;