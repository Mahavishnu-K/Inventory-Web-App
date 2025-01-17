import '@/components/supplierDetail.css';
import { MdPersonRemove } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { useState, useEffect } from "react";
import axios from "axios";

export function SupplierDetail({ isOpen, onClose, supplier, onSupplierDeleted, onSupplierUpdated }) {
    const [editingField, setEditingField] = useState(null); 
    const [editedData, setEditedData] = useState(null);

    useEffect(() => {
        if (isOpen && supplier) {
            setEditedData({ ...supplier });
        } else {
            setEditingField(null); 
            setEditedData(null); 
        }
    }, [isOpen, supplier]);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleDeleteSupplier = async () => {
        try {
            const token = localStorage.getItem('authToken');
            await axios.delete(`http://localhost:5000/api/suppliers/${supplier.id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            onSupplierDeleted(supplier.id); 
            onClose(); 
        } catch (error) {
            console.error("Error deleting supplier:", error);
        }
    };

    const handleEditClick = (field) => {
        setEditingField(field); 
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedData((prev) => ({ ...prev, [name]: value })); 
    };

    const handleSave = async () => {
        try {
            const token = localStorage.getItem('authToken');
            await axios.put(`http://localhost:5000/api/suppliers/${supplier.id}`, editedData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            onSupplierUpdated(editedData); 
            setEditingField(null); 
        } catch (error) {
            console.error("Error updating supplier:", error);
        }
    };

    if (!isOpen || !editedData) return null; 

    return (
        <div className="overlay">
            <div className="supOverlayBackground" onClick={handleOverlayClick}>
                <div className="supOverlayContainer" onClick={(e) => e.stopPropagation()}>
                    <div className="detailtext">
                        <h2 className="title">Supplier Detail</h2>
                        <button className="remove-supplier" onClick={handleDeleteSupplier}>
                            <MdPersonRemove size={24} />
                        </button>
                    </div>
                    {["company", "supplierName", "emailId", "phoneNumber", "gstNo", "category"].map((field) => (
                        <div className="detailtext" key={field}>
                            <h3>{field === "supplierName" ? "Supplier" : field === "emailId" ? "Email" : field.charAt(0).toUpperCase() + field.slice(1)}</h3>
                            <div className="editing">
                                {editingField === field ? (
                                    <input
                                        type="text"
                                        name={field}
                                        className='supplier-user-input'
                                        value={editedData[field]}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    <p>{editedData[field]}</p>
                                )}
                                <span
                                    style={{ marginTop: 7, cursor: "pointer" }}
                                    onClick={() => handleEditClick(field)}
                                >
                                    <FiEdit3 size={20} />
                                </span>
                            </div>
                        </div>
                    ))}
                    <div className="supplierDetail-buttons">
                        <button type="button" className="saveButton" onClick={handleSave}>
                            Save
                        </button>
                        <button type="button" className="sup-closeButton" onClick={onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
