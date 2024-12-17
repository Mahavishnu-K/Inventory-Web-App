import '@/components/navbar.css';
import { IoHome } from "react-icons/io5";
import { BiSearchAlt } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import { FaBoxes, FaChartLine, FaUsers, FaShoppingCart, FaTrophy, FaCog } from 'react-icons/fa';
import inventoryIcon from '@/assets/inventoryIcon.svg';
import React, { useState } from 'react';
import { NotificationOverlay } from './notification';
import { ProfileMenu } from './profilepopup';

function Navbar() {
    const [showOverlay, setShowOverlay] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    const toggleOverlay = () => setShowOverlay(!showOverlay);
    const toggleProfileMenu = () => setShowProfileMenu(!showProfileMenu);

    return (
        <>
            <div className='header'>
                <div className='content'>
                    <div className="search-container">
                        <BiSearchAlt />
                        <input
                            type="text"
                            placeholder="Search suppliers, orders, product"
                            className="search-input"
                        />
                    </div>

                    <div className="icons-container">
                        <div className='notification-center' onClick={toggleOverlay}>
                            <IoIosNotificationsOutline />
                        </div>

                        <div className='profile-icon' onClick={toggleProfileMenu}>
                            <CgProfile />
                        </div>
                    </div>
                </div>
            </div>

            <div className="sidebar">
                <img className="Inventory-Icon" src={inventoryIcon} alt="Icon" style={{ width: '240px' }} />
                <div className='text'>
                    <div className="sidebar-content">
                        <NavLink to="/dashboard" className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}>
                            <IoHome /> Dashboard
                        </NavLink>
                        <NavLink to="/inventory" className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}>
                            <FaBoxes /> Inventory
                        </NavLink>
                        <NavLink to="/reports" className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}>
                            <FaChartLine /> Reports
                        </NavLink>
                        <NavLink to="/suppliers" className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}>
                            <FaUsers /> Suppliers
                        </NavLink>
                        <NavLink to="/orders" className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}>
                            <FaShoppingCart /> Orders
                        </NavLink>
                        <NavLink to="/leaderboard" className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}>
                            <FaTrophy /> Leaderboard
                        </NavLink>
                        <NavLink to="/settings" className={({ isActive }) => isActive ? "sidebar-item settings active" : "sidebar-item settings"}>
                            <FaCog /> Settings
                        </NavLink>
                    </div>
                </div>
            </div>

            <NotificationOverlay isOpen={showOverlay} onClose={() => setShowOverlay(!showOverlay)} />
            <ProfileMenu isOpen={showProfileMenu} onClose={() => setShowProfileMenu(false)} />
        </>
    );
}

export default Navbar;
