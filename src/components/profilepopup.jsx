import React from 'react';
import styles from './profilepopup.module.css';
import { CiLogout } from "react-icons/ci";

export function ProfileMenu({ isOpen, onClose }) {
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
                        <div className={styles.overlayContainer} onClick={(e) => e.stopPropagation()}>
                            <div className={styles.profileDropdown}>
                                <ul>
                                    <li>Profile</li>
                                    <li>Logout
                                        <span>
                                          <CiLogout />
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
