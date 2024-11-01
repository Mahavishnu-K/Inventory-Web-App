import '@/components/navbar.css'
import { IoHome } from "react-icons/io5";
import { BiSearchAlt } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import { FaBoxes, FaChartLine, FaUsers, FaShoppingCart, FaTrophy, FaCog } from 'react-icons/fa';

function Navbar(){
    return(
        <>
        <div className='header'>
            <div className='content'>
                <div className="search-container">
                    <BiSearchAlt/>
                    <input
                    type="text"
                    placeholder="Search suppliers, orders, product"
                    className="search-input"
                    />
                    
                </div>

                <div className="icons-container">
                    <IoIosNotificationsOutline />
                    <CgProfile />
                </div>
            </div>
        </div>

        <div className="sidebar">
            <div className='text'>
                <div className="sidebar-content">
                    <NavLink to="/" className={({ isActive }) => isActive ? "sidebar-item active" : "sidebar-item"}>
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
    </>
    )
}

export default Navbar