import React, { useState } from 'react';
import axios from 'axios';
import styles from '@/components/additems.module.css';

export function AddNewItem({ isOpen, onClose, onItemAdded }) {
    const [formData, setFormData] = useState({
        itemName: '',
        productId: '',
        price: '',
        quantity: '',
        dateOfPurchase: '',
        expiryDate: '',
        category: '',
        description: ''
    });

    const [loading, setLoading] = useState(false); // Add a loading state

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

        if (!token) {
            alert("Unauthorized: No token found. Please log in again.");
            window.location.href = "/login";
            return;
        }

        try {
            setLoading(true); 
            const response = await axios.post(
                'http://localhost:5000/api/inventory',
                formData.expiryDate
                    ? formData
                    : { ...formData, expiryDate: undefined }, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
            );
            console.log('Item added successfully:', response.data);

            if (onItemAdded) onItemAdded(response.data); 
            resetForm(); 
            if (onClose) onClose();
        } catch (error) {
            console.error('Error adding item:', error.response?.data || error.message);
            alert(error.response?.data?.message || "Failed to add item. Please try again.");
        } finally {
            setLoading(false); 
        }
    };

    const resetForm = () => {
        setFormData({
            itemName: '',
            productId: '',
            price: '',
            quantity: '',
            dateOfPurchase: '',
            expiryDate: '',
            category: '',
            description: ''
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
                <div className={styles.overlay}>
                    <div className={styles.overlayBackground} onClick={handleOverlayClick}>
                        <div className={styles.overlayContainer} onClick={(e) => e.stopPropagation()}>
                            <h2 className={styles.title}>Add New Item</h2>
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.row}>
                                    <div className={styles.formGroup}>
                                        <label>Item Name <span className={styles.required}>*</span></label>
                                        <input type="text" name="itemName" value={formData.itemName} onChange={handleChange} className={styles.input} placeholder="Enter item name" required />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Product ID <span className={styles.required}>*</span></label>
                                        <input type="text" name="productId" value={formData.productId} onChange={handleChange} className={styles.input} placeholder="Enter item number" required />
                                    </div>
                                </div>

                                <div className={styles.row}>
                                    <div className={styles.formGroup}>
                                        <label>Price <span className={styles.required}>*</span></label>
                                        <input type="number" name="price" value={formData.price} onChange={handleChange} className={styles.input} placeholder="Enter price" required min="0" />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Quantity <span className={styles.required}>*</span></label>
                                        <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} className={styles.input} placeholder="Enter quantity" required min="0" />
                                    </div>
                                </div>

                                <div className={styles.row}>
                                    <div className={styles.formGroup}>
                                        <label>Date of Purchase <span className={styles.required}>*</span></label>
                                        <input type="date" name="dateOfPurchase" value={formData.dateOfPurchase} onChange={handleChange} className={styles.input} required />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Expiry Date</label>
                                        <input type="date" name="expiryDate" value={formData.expiryDate} onChange={handleChange} className={styles.input} placeholder="Expiry Date" />
                                    </div>
                                </div>

                                <div className={styles.row}>
                                    <div className={styles.formGroup}>
                                        <label>Category <span className={styles.required}>*</span></label>
                                        <select name="category" value={formData.category} onChange={handleChange} className={`${styles.input} ${styles.selectScrollable}`} required>
                                            <option value="">Choose category</option>
                                            {[
                                                "electronics",
                                                "fashion",
                                                "home_appliances",
                                                "books",
                                                "toys",
                                                "groceries",
                                                "health_beauty",
                                                "sports",
                                                "furniture",
                                                "stationery",
                                                "pet_supplies"
                                            ].map((category) => (
                                                <option key={category} value={category}>{category.replace('_', ' ').toUpperCase()}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label>Description <span className={styles.required}>*</span></label>
                                    <textarea name="description" value={formData.description} onChange={handleChange} className={styles.textarea} placeholder="Input description" required></textarea>
                                </div>
                                <div className={styles.buttons}>
                                    <button type="button" className={styles.cancelButton} onClick={onClose} disabled={loading}>
                                        Cancel
                                    </button>
                                    <button type="submit" className={styles.addButton} disabled={loading}>
                                        {loading ? 'Adding...' : 'Add Item'}
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
