import React from 'react';
import styles from './profilepopup.module.css';
import { CiLogout } from "react-icons/ci";
import { Link } from 'react-router-dom';

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
                                    <Link to = '/profile-page' style={{textDecoration : "None"}}><li>Profile</li></Link>
                                    <Link to = '/login' style={{textDecoration : "None"}}
                                    ><li>Logout
                                        <span>
                                          <CiLogout />
                                        </span>
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
