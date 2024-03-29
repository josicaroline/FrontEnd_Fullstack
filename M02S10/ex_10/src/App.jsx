import {
  BrowserRouter as Router, 
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home.jsx'
import Empresa from './pages/Empresa/Empresa.jsx'
import Empresas from './pages/Empresas/Empresas.jsx'
import Header from './components/Header/Header.jsx'
import Login from './pages/Login/Login.jsx'
import Noticias from './pages/Noticias/Noticias.jsx'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import { AuthContext } from './context/AuthContext'

function App() {

  const { theme } = useContext(ThemeContext)
  const { isLoggedIn } = useContext(AuthContext)

  return (
    <div className={theme === 'light' ? 'App' : 'App dark-theme'}>
      <Router>
        { isLoggedIn && <Header />}

        <Routes>

          <Route path="/login" element={!isLoggedIn ? <Login /> : <Navigate to="/home" />} />

          <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/noticias" element={isLoggedIn ? <Noticias /> : <Navigate to="/login" />} />
          <Route path="/noticias/:noticia" element={isLoggedIn ? <Noticias /> : <Navigate to="/login" />} />
          <Route path="/empresas" element={isLoggedIn ? <Empresas /> : <Navigate to="/login" />} />
          <Route path="/empresa/:empresa" element={isLoggedIn ? <Empresa /> : <Navigate to="/login" />} />

          {/* <Route path='/' exact element={<Home />} />
          <Route path='login' exact element={<Login />} />
          <Route path='noticias' element={<Noticias />} />
          <Route path='empresas' element={<Empresas />} />
          <Route path='empresa/:empresa' element={<Empresa />} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App 