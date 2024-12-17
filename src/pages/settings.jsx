import Navbar from "../components/navbar";
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import AccountSettings from '../components/AccountSettings';
import NotificationSettings from '../components/NotificationSettings';
import '@/styles/settings.css';

function Settings() {
    return (
        <>
            <div style={{ display: 'flex', width: '100%' }}>
                <Navbar />
                <div style={{ flex: 1, padding: '20px' }}>
                    <div className="App">
                        <h2 style={{ fontWeight: 'bold', marginBottom: '30px', marginTop: '20px', marginLeft: '50px' }}>Settings</h2>
                        
                        <nav className="nav" style={{ marginLeft: '50px' }}>
                            <Link className="nav-link" to="account-settings">Account Settings</Link>
                            <Link className="nav-link" to="notification-settings">Notification Settings</Link>
                        </nav>

                        <Routes>
                            <Route path="/" element={<Navigate to="account-settings" />} />
                            <Route path="account-settings" element={<AccountSettings />} />
                            <Route path="notification-settings" element={<NotificationSettings />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Settings;