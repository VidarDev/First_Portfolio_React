import React, { useState } from 'react'
import IconHamburger from '../components/images/IconHamburger'
import IconLogo from '../components/images/IconLogo'
import Button from '../components/Button'

const Header = () => {
    const [navModalIsOpen, setnavModalIsOpen] = useState(false)

    const toogleNavModal = () => {
        setnavModalIsOpen(!navModalIsOpen)
    }

    return (
        <>
            <header id="header" className={navModalIsOpen ? 'is-active' : ''}>
                <a href="#home">
                    <IconLogo />
                </a>

                <IconHamburger
                    className={navModalIsOpen ? 'is-active' : ''}
                    onClick={toogleNavModal}
                />
            </header>

            <div className={`nav loader ${navModalIsOpen ? 'is-active' : ''}`}>
                <nav id="nav" className="nav__content">
                    <ul className="nav__list">
                        <li className="nav__list--item">
                            <a href="#about" onClick={toogleNavModal}>
                                A propos
                            </a>
                        </li>
                        <li className="nav__list--item">
                            <a href="#works" onClick={toogleNavModal}>
                                Projets
                            </a>
                        </li>
                        <li className="nav__list--item">
                            <a href="#skills" onClick={toogleNavModal}>
                                Skills
                            </a>
                        </li>
                        <li className="nav__list--item">
                            <a href="#contact" onClick={toogleNavModal}>
                                Contact
                            </a>
                        </li>
                    </ul>
                    <Button>Mon CV</Button>
                </nav>
            </div>
        </>
    )
}
export default Header
