import React, { useState } from 'react'
import IconHamburger from '../components/images/IconHamburger'
import IconLogo from '../components/images/IconLogo'

const Header = () => {
    const [navModalIsOpen, setnavModalIsOpen] = useState(false)

    const toogleNavModal = () => {
        setnavModalIsOpen(!navModalIsOpen)
    }

    return (
        <>
            <header id="header" className={navModalIsOpen ? 'is-active' : ''}>
                <IconLogo />

                <IconHamburger
                    className={navModalIsOpen ? 'is-active' : ''}
                    onClick={toogleNavModal}
                />
            </header>

            <div className={`nav loader ${navModalIsOpen ? 'is-active' : ''}`}>
                <nav id="nav" className="nav__content">
                    <ul className="nav__list">
                        <li className="nav__list--item">Home</li>
                        <li className="nav__list--item">Home</li>
                        <li className="nav__list--item">Home</li>
                        <li className="nav__list--item">Home</li>
                        <li
                            className="nav__list--item"
                            onClick={toogleNavModal}
                        >
                            Home
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default Header
