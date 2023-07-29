import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import Task from './components/Task.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App /> */}
    <Task />
  </React.StrictMode>,
)
