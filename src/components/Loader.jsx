import React, { useState, useEffect } from 'react'

const Loader = () => {
    const [preloaderIsHidden, setPreloaderIsHidden] = useState(false)

    useEffect(() => {
        window.onload = () => {
            setPreloaderIsHidden(true)
        }
    }, [])

    return (
        <div className={`loader z-999 ${preloaderIsHidden ? '' : 'is-active'}`}>
            <div
                className={`preloader ${preloaderIsHidden ? '' : 'is-active'}`}
            >
                <svg width="100%" height="100%" viewBox="-1 -0.5 34 26.5">
                    <polygon
                        fill="transparent"
                        stroke="#CF0B21"
                        stroke-width="1"
                        points="32,0 0,0 16,25"
                    ></polygon>
                </svg>
            </div>
        </div>
    )
}

export default Loader
