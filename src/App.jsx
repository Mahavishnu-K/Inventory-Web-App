import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inventory from './pages/inventory';
import Reports from './pages/reports';
import Suppliers from './pages/suppliers';
import Settings from './pages/settings';
import Orders from './pages/orders';
import Leaderboard from './pages/leaderboard';
import Dashboard from './pages/dashboard';
import RequestReturn from './pages/returnpage';
import SignupPage from './pages/signup';


function App() {
  return(
    <div style={{height: "100vh", width: "100vw"}}>
    <Router>
          <Routes>
            <Route path='/signup' element={<SignupPage />} />
            <Route path = "/dashboard" element={<Dashboard />} />
            <Route path = "/inventory" element={<Inventory />} />
            <Route path = "/reports" element={<Reports />} />
            <Route path = "/suppliers" element={<Suppliers />} />
            <Route path = "/orders" element={<Orders />} />
            <Route path = "/return-page" element={<RequestReturn />} />
            <Route path = "/leaderboard" element={<Leaderboard />} />
            <Route path = "/settings/*" element={<Settings />} />
          </Routes>
    </Router>
    </div>
  )
}

export default App
