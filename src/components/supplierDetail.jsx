import '@/components/supplierDetail.css';
import { MdPersonRemove } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

export function SupplierDetail({ isOpen, onClose, supplier, onSupplierDeleted, onSupplierUpdated }) {
    const [editingField, setEditingField] = useState(null);
    const [editedData, setEditedData] = useState(null);
    const inputRef = useRef(null); 

    useEffect(() => {
        if (isOpen && supplier) {
            setEditedData({
                company: supplier.company || "Unknown",
                supplierName: supplier.supplierName || "N/A",
                emailId: supplier.emailId || "Unknown",
                phoneNumber: supplier.phoneNumber || "Unknown",
                gstNo: supplier.gstNo || "N/A",
                category: supplier.category || "Uncategorized",
            });
        } else {
            setEditingField(null);
            setEditedData(null);
        }
    }, [isOpen, supplier]);

    useEffect(() => {
        if (editingField && inputRef.current) {
            inputRef.current.focus();
        }
    }, [editingField]);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleDeleteSupplier = async () => {
        try {
            if (!supplier?._id) {
                console.error("Cannot delete supplier: missing _id");
                return;
            }

            const token = localStorage.getItem('authToken');
            console.log("Deleting supplier with ID:", supplier._id);

            await axios.delete(`http://localhost:5000/api/suppliers/${supplier._id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            onSupplierDeleted(supplier._id);
            console.log("Supplier deleted successfully.");
            onClose();
        } catch (error) {
            console.error("Error deleting supplier:", error);
            alert("Failed to delete supplier. Please try again.");
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
            if (!supplier?._id) {
                console.error("Cannot update supplier: missing _id");
                return;
            }

            const token = localStorage.getItem('authToken');
            await axios.put(`http://localhost:5000/api/suppliers/${supplier._id}`, editedData, {
                headers: { Authorization: `Bearer ${token}` },
            });

            onSupplierUpdated({ ...supplier, ...editedData }); 
            setEditingField(null);
            alert("Supplier updated successfully.");
        } catch (error) {
            console.error("Error updating supplier:", error);
            alert("Failed to update supplier. Please try again.");
        }
    };

    if (!isOpen || !editedData) return null; 

    return (
        <div className="overlay">
            <div className="supOverlayBackground" onClick={handleOverlayClick}>
                <div className="supOverlayContainer" onClick={(e) => e.stopPropagation()}>
                    <div className="detailtext">
                        <h2 className="sup-title">Supplier Detail</h2>
                        <button className="remove-supplier" onClick={handleDeleteSupplier}>
                            <MdPersonRemove size={24} />
                        </button>
                    </div>
                    {["company", "supplierName", "emailId", "phoneNumber", "gstNo", "category"].map((field) => (
                        <div className="detailtext" key={field}>
                            <h3>
                                {field === "supplierName"
                                    ? "Supplier Name"
                                    : field === "emailId"
                                    ? "Email"
                                    : field === "gstNo"
                                    ? "GST No"
                                    : field.charAt(0).toUpperCase() + field.slice(1)}
                            </h3>
                            <div className="editing">
                                {editingField === field ? (
                                    <input
                                        type="text"
                                        name={field}
                                        className="supplier-user-input"
                                        value={editedData[field]}
                                        onChange={handleInputChange}
                                        ref={inputRef}
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
                        <button
                            type="button"
                            className="saveButton"
                            onClick={handleSave}
                            disabled={!editingField || JSON.stringify(editedData) === JSON.stringify(supplier)}
                        >
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
