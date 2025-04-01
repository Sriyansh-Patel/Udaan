import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import Login from './Comp/Login.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
{/* /*      <Route path="/about" element={<About }  */}
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
)
