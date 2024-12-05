import React, { useState } from 'react';
import Navbar from '../components/navbar'; 
import '../styles/requestreturn.css';

const RequestReturn = () => {
    const [suppliers] = useState([
        { id: 1, name: 'Supplier A' },
        { id: 2, name: 'Supplier B' },
        { id: 3, name: 'Supplier C' }
    ]);

    const [formData, setFormData] = useState({
        product: '',
        productId: '',
        quantity: '',
        supplierId: '',
        reason: '',
        warehouseAddress: '',
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
        console.log('Form data submitted:', formData);
    };

    const handleReset = () => {
        setFormData({
            product: '',
            productId: '',
            quantity: '',
            supplierId: '',
            reason: '',
            warehouseAddress: '',
        });
    };

    return (
        <>
            <div style={{ display: 'flex' }}>
                <Navbar />
                <div style={{ flex: 1, padding: '20px' }}>
                    <h2 className="title">Request Return</h2>
                    <div className="request-return-container">
                        <form onSubmit={handleSubmit}>

                            <div className="form-group">
                                <label>Product</label>
                                <input
                                    type="text"
                                    name="product"
                                    value={formData.product}
                                    onChange={handleChange}
                                    placeholder="Enter product name"
                                    required
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
                                />
                            </div>

                            <div className="form-group">
                                <label>Supplier</label>
                                <select
                                    name="supplierId"
                                    value={formData.supplierId}
                                    onChange={handleSupplierChange}
                                    required
                                >
                                    <option value="">Select Supplier</option>
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
                                ></textarea>
                            </div>

                            <div className="form-group1">
                                <button type="button" onClick={handleReset} className="cancel-button">Cancel</button>
                                <button type="submit" className="return-button">Return</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RequestReturn;