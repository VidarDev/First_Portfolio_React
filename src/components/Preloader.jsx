import React, { useState, useEffect } from 'react'

const Preloader = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const handleLoad = () => {
            setLoading(false)
        }

        window.addEventListener('load', handleLoad)

        return () => {
            window.removeEventListener('load', handleLoad)
        }
    }, [])

    if (!loading) {
        return null
    }

    return (
        <div className="preloader">
            <div className="spinner"></div>
        </div>
    )
}

export default Preloader
