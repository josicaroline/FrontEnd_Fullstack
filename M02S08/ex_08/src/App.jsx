import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Perfil from './pages/Perfil/Perfil.jsx'
import Contato from './pages/Contato/Contato.jsx'
import Header from './components/Header/Header.jsx'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

function App() {

  const { isLoggedIn } = useContext(AuthContext)

  return (
      <Router>
        { isLoggedIn && <Header />}

        <Routes>
      

          <Route path="/login" element={!isLoggedIn ? <Login /> : <Navigate to="/home" />} />

          <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/perfil" element={isLoggedIn ? <Perfil /> : <Navigate to="/login" />} />
          <Route path="/contato" element={isLoggedIn ? <Contato /> : <Navigate to="/login" />} />
         
        </Routes>
      </Router>
  )
}

export default App
