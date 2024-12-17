import React, { useState, useEffect } from 'react';
import styles from './notification.module.css';

export function NotificationOverlay({ isOpen, onClose }) {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (isOpen) {
      fetch('') 
        .then((response) => response.json())
        .then((data) => {
          setNotifications(data.notifications || []);
        })
        .catch((error) => console.error('Error fetching notifications:', error));
    }
  }, [isOpen]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div className={styles.overlay} onClick={handleOverlayClick}>

          <div className={styles.overlayBackground} onClick={handleOverlayClick}>
            <div
              className={styles.overlayContainer}
              onClick={(e) => e.stopPropagation()} 
            >
              <h2 className={styles.title}>Notifications</h2>

              <ul className={styles.notificationList}>
                {notifications.length > 0 ? (
                  notifications.map((notification, index) => (
                    <li key={index} className={styles.notificationItem}>
                      {notification.message}
                    </li>
                  ))
                ) : (
                  <li className={styles.noNotifications}>No new notifications</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
