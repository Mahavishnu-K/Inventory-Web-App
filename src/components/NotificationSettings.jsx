import React, { useState } from 'react';
import '@/components/NotificationSettings.css';

const NotificationSettings = () => {
    const [notifications, setNotifications] = useState({
        stockAlerts: false,
        orderStatus: false,
        deliveryUpdates: false,
        expirationAlerts: false,
        userAccessAlerts: false,
    });

    
    const handleNotificationToggle = (e) => {
        const { name, checked } = e.target;
        setNotifications((prevState) => ({
            ...prevState,
            [name]: checked,
        }));
    };

    return (
        <div className="notification-settings-container">
            <h3 className="notification-settings-title">Notification Settings</h3>
            
            <div className="form-check form-switch">
                <label className="form-check-label">Stock Level Alerts</label>
                <input
                    className="form-check-input"
                    type="checkbox"
                    name="stockAlerts"
                    checked={notifications.stockAlerts}
                    onChange={handleNotificationToggle}
                />
            </div>

            <div className="form-check form-switch">
                <label className="form-check-label">Order Status Notifications</label>
                <input
                    className="form-check-input"
                    type="checkbox"
                    name="orderStatus"
                    checked={notifications.orderStatus}
                    onChange={handleNotificationToggle}
                />
            </div>

            <div className="form-check form-switch">
                <label className="form-check-label">Delivery and Shipment Updates</label>
                <input
                    className="form-check-input"
                    type="checkbox"
                    name="deliveryUpdates"
                    checked={notifications.deliveryUpdates}
                    onChange={handleNotificationToggle}
                />
            </div>

            <div className="form-check form-switch">
                <label className="form-check-label">Expiration Date Alerts</label>
                <input
                    className="form-check-input"
                    type="checkbox"
                    name="expirationAlerts"
                    checked={notifications.expirationAlerts}
                    onChange={handleNotificationToggle}
                />
            </div>

            <div className="form-check form-switch">
                <label className="form-check-label">User Access and Login Alerts</label>
                <input
                    className="form-check-input"
                    type="checkbox"
                    name="userAccessAlerts"
                    checked={notifications.userAccessAlerts}
                    onChange={handleNotificationToggle}
                />
            </div>
        </div>
    );
};

export default NotificationSettings;