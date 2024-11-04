import React, { useState, useEffect } from 'react';
import styles from '@/components/reportTable.module.css';

const ReportTable = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const mockOrders = [
            { id: 1, orderNo: 10674, item: "Item1", price: "Price1", shippingAddress: "Shipping Address1", orderedDate: "12.10.2024", expectedDeliveryDate: "18.10.2024" },
            { id: 2, orderNo: 12674, item: "Item2", price: "Price2", shippingAddress: "Shipping Address2", orderedDate: "13.10.2024", expectedDeliveryDate: "19.10.2024" },
            { id: 3, orderNo: 13456, item: "Item3", price: "Price3", shippingAddress: "Shipping Address3", orderedDate: "14.10.2024", expectedDeliveryDate: "20.10.2024" },
            { id: 4, orderNo: 24531, item: "Item4", price: "Price4", shippingAddress: "Shipping Address4", orderedDate: "15.10.2024", expectedDeliveryDate: "20.10.2024" },
            { id: 5, orderNo: 32156, item: "Item5", price: "Price5", shippingAddress: "Shipping Address5", orderedDate: "16.10.2024", expectedDeliveryDate: "21.10.2024" },
            { id: 6, orderNo: 43527, item: "Item6", price: "Price6", shippingAddress: "Shipping Address6", orderedDate: "17.10.2024", expectedDeliveryDate: "22.10.2024" },
            { id: 7, orderNo: 54321, item: "Item7", price: "Price7", shippingAddress: "Shipping Address7", orderedDate: "18.10.2024", expectedDeliveryDate: "23.10.2024" },
            { id: 8, orderNo: 65432, item: "Item8", price: "Price8", shippingAddress: "Shipping Address8", orderedDate: "19.10.2024", expectedDeliveryDate: "24.10.2024" },
            { id: 9, orderNo: 76543, item: "Item9", price: "Price9", shippingAddress: "Shipping Address9", orderedDate: "20.10.2024", expectedDeliveryDate: "25.10.2024" },
            { id: 10, orderNo: 87654, item: "Item10", price: "Price10", shippingAddress: "Shipping Address10", orderedDate: "21.10.2024", expectedDeliveryDate: "26.10.2024" },
        ];

        setTimeout(() => {
            setOrders(mockOrders);
        }, 500);
    }, []);

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
                                <td>{order.price}</td>
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
