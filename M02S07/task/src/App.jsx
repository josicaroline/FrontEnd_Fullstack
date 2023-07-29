import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header.jsx'
import Task from './components/Task.jsx'


function App() {

  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='task' element={<Task />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App 