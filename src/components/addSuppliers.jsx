import React, { useState } from 'react';
import axios from 'axios';
import '@/components/addSuppliers.css';

export function AddSupplier({ isOpen, onClose, onSupplierAdded }) {
    const [formData, setFormData] = useState({
        company: '',
        supplierName: '',
        emailId: '',
        phoneNumber: '',
        gstNo: '',
        category: ''
    });


    const [loading, setLoading] = useState(false); 

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('handleSubmit called');

        const token = localStorage.getItem('authToken'); 

        if (!formData.emailId || formData.emailId.trim() === "") {
            alert("Email ID is required and cannot be empty.");
            return;
        }

        if (!token) {
            alert("Unauthorized: No token found. Please log in again.");
            window.location.href = "/login";
            return;
        }

        try {
            setLoading(true); 
            const response = await axios.post(
                'http://localhost:5000/api/suppliers',
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
            );
            console.log('Supplier added successfully:', response.data);

            if (onSupplierAdded) {
                onSupplierAdded(response.data.item); 
            }  
            resetForm(); 
            if (onClose) onClose();
        } catch (error) {
            console.error('Error adding item:', error.response?.data || error.message);
            alert(error.response?.data?.message || "Failed to add supplier. Please try again.");
        } finally {
            setLoading(false); 
        }
    };

    const resetForm = () => {
        setFormData({
            company: '',
            supplierName: '',
            emailId: '',
            phoneNumber: '',
            gstNo: '',
            category: ''
        });
    };
    

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <>
            {isOpen && (
                <div className="overlay">
                    <div className="addSupOverlayBackground" onClick={handleOverlayClick}>
                        <div className="addSupOverlayContainer" onClick={(e) => e.stopPropagation()}>
                            <h2 className="title">Add New Supplier</h2>
                            <form onSubmit={handleSubmit} className="form">
                                <div className="row">
                                    <div className="formGroup">
                                        <label className="label">Company <span className="required">*</span></label>
                                        <input type="text" name="company" value={formData.company} onChange={handleChange} className="input" placeholder="Enter Company" required />
                                    </div>
                                    <div className="formGroup">
                                        <label className="label">Supplier Name<span className="required">*</span></label>
                                        <input type="text" name="supplierName" value={formData.supplierName} onChange={handleChange} className="input" placeholder="Enter Supplier name" required />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="formGroup">
                                        <label className="label">Email ID<span className="required">*</span></label>
                                        <input type="text" name="emailId" value={formData.emailId} onChange={handleChange} className="input" placeholder="Enter Email ID" required />
                                    </div>
                                    <div className="formGroup">
                                        <label className="label">Phone Number <span className="required">*</span></label>
                                        <input type="number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="input" placeholder="Enter Phone number" required min="0"/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="formGroup">
                                        <label className="label">GST No.<span className="required">*</span></label>
                                        <input type="text" name="gstNo" value={formData.gstNo} onChange={handleChange} className="input" placeholder="Enter GST No." required />
                                    </div>
                                    <div className="formGroup">
                                        <label className="label">Category<span className="required">*</span></label>
                                        <input type="text" name="category" value={formData.category} onChange={handleChange} className="input" placeholder="Enter the category" required />
                                    </div>
                                </div>

                                <div className="buttons">
                                    <button type="button" className="cancelButton" onClick={onClose} disabled={loading}>
                                        Cancel
                                    </button>
                                    <button type="submit" className="addButton" disabled={loading}>
                                        {loading ? 'Adding...' : 'Add Supplier'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
