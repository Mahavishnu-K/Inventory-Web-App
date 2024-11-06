import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inventory from './pages/inventory';
import Reports from './pages/reports';
import Suppliers from './pages/suppliers';
import Settings from './pages/settings';
import Orders from './pages/orders';
import Leaderboard from './pages/leaderboard';
import Dashboard from './pages/dashboard';

function App() {
  return(
    <Router>
          <Routes>
            <Route path = "/dashboard" element={<Dashboard />} />
            <Route path = "/inventory" element={<Inventory />} />
            <Route path = "/reports" element={<Reports />} />
            <Route path = "/suppliers" element={<Suppliers />} />
            <Route path = "/orders" element={<Orders />} />
            <Route path = "/leaderboard" element={<Leaderboard />} />
            <Route path = "/settings/*" element={<Settings />} />
          </Routes>
    </Router>
  )
}

export default App
