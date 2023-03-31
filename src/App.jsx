import React from 'react'
import HomePage from './pages/HomePage'
import Loader from './components/Loader'
import Header from './scenes/Header'

const App = () => {
    return (
        <>
            <Loader />
            <Header />
            <HomePage />
        </>
    )
}

export default App
