import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/main.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({ delay: 100 })
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
