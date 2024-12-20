import React, { useState, useEffect } from 'react';
import styles from '@/components/reportTable.module.css';

const ReportTable = ({ onTotalValueChange }) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const mockOrders = [
            { id: 1, orderNo: 10001, item: "Wireless Mouse", price: 20, shippingAddress: "123 Maple St, Springfield", orderedDate: "12.10.2024", expectedDeliveryDate: "18.10.2024" },
            { id: 2, orderNo: 10002, item: "Bluetooth Speaker", price: 35, shippingAddress: "456 Oak St, Greenfield", orderedDate: "13.10.2024", expectedDeliveryDate: "19.10.2024" },
            { id: 3, orderNo: 10003, item: "Gaming Keyboard", price: 50, shippingAddress: "789 Pine Ave, Rivertown", orderedDate: "14.10.2024", expectedDeliveryDate: "20.10.2024" },
            { id: 4, orderNo: 10004, item: "Smartwatch", price: 120, shippingAddress: "321 Birch Ln, Lakeside", orderedDate: "15.10.2024", expectedDeliveryDate: "20.10.2024" },
            { id: 5, orderNo: 10005, item: "Laptop Stand", price: 25, shippingAddress: "654 Elm St, Hillview", orderedDate: "16.10.2024", expectedDeliveryDate: "21.10.2024" },
            { id: 6, orderNo: 10006, item: "Noise Cancelling Headphones", price: 150, shippingAddress: "987 Cedar Rd, Seaview", orderedDate: "17.10.2024", expectedDeliveryDate: "22.10.2024" },
            { id: 7, orderNo: 10007, item: "Portable SSD", price: 90, shippingAddress: "159 Willow Dr, Mountainview", orderedDate: "18.10.2024", expectedDeliveryDate: "23.10.2024" },
            { id: 8, orderNo: 10008, item: "4K Monitor", price: 300, shippingAddress: "753 Aspen St, Forestside", orderedDate: "19.10.2024", expectedDeliveryDate: "24.10.2024" },
            { id: 9, orderNo: 10009, item: "Desk Lamp", price: 30, shippingAddress: "357 Poplar Ln, Meadowfield", orderedDate: "20.10.2024", expectedDeliveryDate: "25.10.2024" },
            { id: 10, orderNo: 10010, item: "Ergonomic Chair", price: 200, shippingAddress: "246 Redwood Ave, Bayview", orderedDate: "21.10.2024", expectedDeliveryDate: "26.10.2024" },
        ];

        setTimeout(() => {
            setOrders(mockOrders);

            const totalPrice = mockOrders.reduce((total, order) => total + order.price, 0);
            onTotalValueChange(totalPrice);
        }, 500);
    }, [onTotalValueChange]);

    return (
        <div className={styles.tableContainer}>
            <div className={styles.tableWrapper}>
                <table className={styles.orderTable}>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Order No</th>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Shipping Address</th>
                            <th>Ordered Date</th>
                            <th>Expected Delivery Date</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={order.id}>
                                <td>{index + 1}</td>
                                <td>{order.orderNo}</td>
                                <td>{order.item}</td>
                                <td>${order.price}</td>
                                <td>{order.shippingAddress}</td>
                                <td>{order.orderedDate}</td>
                                <td>{order.expectedDeliveryDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportTable;
