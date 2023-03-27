import React from 'react'
import ThreeJsScene from './ThreeJsScene'

const Header = () => {
    return (
        <>
            <header id="header">
                <h1>
                    <span>Apprenti</span>
                    <span>Apprenti</span>
                    <span>Développeur web</span>
                    <span>Front-End</span>
                </h1>
                <ThreeJsScene />
                <div></div>
                <a href="#about" class="home__scroll">
                    <span class="home__scroll-icon">
                        <span class="home__scroll-icon__dot"></span>
                    </span>
                </a>
            </header>
        </>
    )
}
export default Header
