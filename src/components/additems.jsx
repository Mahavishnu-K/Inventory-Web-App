import React, { useState } from 'react';
import axios from 'axios';
import styles from '@/components/additems.module.css';


export function AddNewItem ( {isOpen, onClose, onItemAdded} ){
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
            return;
        }

        try {
            const response = await axios.post(
                'http://localhost:5000/api/inventory', 
                formData, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`, 
                    }
                }
            );
            console.log('Item added successfully:', response.data);
            onItemAdded(response.data);
            onClose();
        } catch (error) {
            console.error('Error adding item:', error.response?.data || error.message);
            alert(error.response?.data?.error || "Failed to add item. Please try again.");
        }
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <>
            {
                isOpen ? (
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
                                            <input type="number" name="price" value={formData.price} onChange={handleChange} className={styles.input} placeholder="Enter price" required />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label>Quantity <span className={styles.required}>*</span></label>
                                            <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} className={styles.input} placeholder="Enter quantity" required />
                                        </div>
                                    </div>

                                    <div className={styles.row}>
                                        <div className={styles.formGroup}>
                                            <label>Date of Purchased <span className={styles.required}>*</span></label>
                                            <input type="date"  name="dateOfPurchase" value={formData.dateOfPurchase} onChange={handleChange} className={styles.input} required />
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
                                                <option value="electronics">Electronics</option>
                                                <option value="fashion">Fashion</option>
                                                <option value="home_appliances">Home Appliances</option>
                                                <option value="books">Books</option>
                                                <option value="toys">Toys</option>
                                                <option value="groceries">Groceries</option>
                                                <option value="health_beauty">Health & Beauty</option>
                                                <option value="sports">Sports</option>
                                                <option value="furniture">Furniture</option>
                                                <option value="stationery">Stationery</option>
                                                <option value="pet_supplies">Pet Supplies</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label>Description <span className={styles.required}>*</span></label>
                                        <textarea name="description" value={formData.description} onChange={handleChange} className={styles.textarea} placeholder="Input description" required></textarea>
                                    </div>
                                    <div className={styles.buttons}>
                                        <button type="button" className={styles.cancelButton} onClick={onClose}>Cancel</button>
                                        <button type="submit" className={styles.addButton}>Add Item</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </>
    )
}
