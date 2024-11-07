import React, { useState } from 'react';
import axios from 'axios';
import styles from '@/components/additems.module.css';

export function AddNewItem ( {isOpen, onClose} ){
    const [formData, setFormData] = useState({
        type: '',
        itemName: '',
        serialNumber: '',
        itemNumber: '',
        unitOfMeasurement: '',
        amount: '',
        price: '',
        dateOfPurchase: '',
        department: '',
        category: '',
        store: '',
        expiryDate: '',
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
        try {
            const response = await axios.post('https://your-backend-url.com/api/items', formData);
            console.log('Item added successfully:', response.data);
        } catch (error) {
            console.error('Error adding item:', error);
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
                                            <label>Type <span className={styles.required}>*</span></label>
                                            <select name="type" value={formData.type} onChange={handleChange} className={styles.input} required>
                                                <option>Choose type</option>
                                            </select>
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label>Item Name <span className={styles.required}>*</span></label>
                                            <input type="text" name="itemName" value={formData.itemName} onChange={handleChange} className={styles.input} placeholder="Enter item name" required />
                                        </div>
                                    </div>

                                    <div className={styles.row}>
                                        <div className={styles.formGroup}>
                                            <label>Serial Number <span className={styles.required}>*</span></label>
                                            <input type="text" name="serialNumber" value={formData.serialNumber} onChange={handleChange} className={styles.input} placeholder="Enter serial number" required />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label>Item Number <span className={styles.required}>*</span></label>
                                            <input type="text" name="itemNumber" value={formData.itemNumber} onChange={handleChange} className={styles.input} placeholder="Enter item number" required />
                                        </div>
                                    </div>

                                    <div className={styles.row}>
                                        <div className={styles.formGroup}>
                                            <label>Unit of Measurement <span className={styles.required}>*</span></label>
                                            <select name="unitOfMeasurement" value={formData.unitOfMeasurement} onChange={handleChange} className={styles.input} required>
                                                <option>Choose unit of Measurement</option>
                                            </select>
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label>Amount <span className={styles.required}>*</span></label>
                                            <input type="number" name="amount" value={formData.amount} onChange={handleChange} className={styles.input} placeholder="Enter amount" required />
                                        </div>
                                    </div>

                                    <div className={styles.row}>
                                        <div className={styles.formGroup}>
                                            <label>Price <span className={styles.required}>*</span></label>
                                            <input type="number" name="price" value={formData.price} onChange={handleChange} className={styles.input} placeholder="Enter price" required />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label>Date of Purchased <span className={styles.required}>*</span></label>
                                            <input type="date"  name="dateOfPurchase" value={formData.dateOfPurchase} onChange={handleChange} className={styles.input} required />
                                        </div>
                                    </div>

                                    <div className={styles.row}>
                                        <div className={styles.formGroup}>
                                            <label>Department <span className={styles.required}>*</span></label>
                                            <select name="department" value={formData.department} onChange={handleChange} className={styles.input} required>
                                                <option>Choose department</option>
                                            </select>
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label>Category <span className={styles.required}>*</span></label>
                                            <select name="category" value={formData.category} onChange={handleChange} className={styles.input} required>
                                                <option>Choose category</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className={styles.row}>
                                        <div className={styles.formGroup}>
                                            <label>Store <span className={styles.required}>*</span></label>
                                            <select name="store" value={formData.store} onChange={handleChange} className={styles.input} required>
                                                <option>Choose Store</option>
                                            </select>
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label>Expiry Date <span className={styles.required}>*</span></label>
                                            <input type="date" name="expiryDate" value={formData.expiryDate} onChange={handleChange} className={styles.input} placeholder="Expiry Date" required />
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
