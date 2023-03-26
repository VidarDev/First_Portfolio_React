import React, { useState } from 'react'
import IconHamburger from './IconHamburger'
import IconLogo from './IconLogo'

const Nav = () => {
    const [navModalIsOpen, setnavModalIsOpen] = useState(false)

    const toogleNavModal = () => {
        setnavModalIsOpen(!navModalIsOpen)
    }

    return (
        <>
            <nav id="nav" className={navModalIsOpen ? 'is-active' : ''}>
                <IconLogo />

                <ul className="nav__list">
                    <li
                        className="nav__list--item"
                        data-aos="fade-down"
                        data-aos-delay="1200"
                    >
                        <a href="https://campus.sfc.unistra.fr/login">Home</a>
                    </li>
                    <li
                        className="nav__list--item"
                        data-aos="fade-down"
                        data-aos-delay="1400"
                    >
                        Home
                    </li>
                    <li
                        className="nav__list--item"
                        data-aos="fade-down"
                        data-aos-delay="1600"
                    >
                        Home
                    </li>
                    <li
                        className="nav__list--item"
                        data-aos="fade-down"
                        data-aos-delay="1800"
                    >
                        Home
                    </li>
                    <li
                        className="nav__list--item"
                        data-aos="fade-down"
                        data-aos-delay="2000"
                        onClick={toogleNavModal}
                    >
                        Home
                    </li>
                </ul>

                <IconHamburger
                    className={navModalIsOpen ? 'is-active' : ''}
                    onClick={toogleNavModal}
                />

                <div className="contact">
                    <a href="#">test</a>
                </div>
            </nav>

            <div
                className={`nav-mobile loader ${
                    navModalIsOpen ? 'is-active' : ''
                }`}
            >
                <div className="nav-mobile__content">
                    <ul className="nav-mobile__list">
                        <li className="nav-mobile__list--item">Home</li>
                        <li className="nav-mobile__list--item">Home</li>
                        <li className="nav-mobile__list--item">Home</li>
                        <li className="nav-mobile__list--item">Home</li>
                        <li
                            className="nav-mobile__list--item"
                            onClick={toogleNavModal}
                        >
                            Home
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Nav
