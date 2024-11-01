import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inventory from './pages/inventory';
import Navbar from './components/navbar';


function App() {
  return(
    <Router>
      <div style={{ display: 'flex' }}>
        <Navbar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route index element={<Inventory />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
