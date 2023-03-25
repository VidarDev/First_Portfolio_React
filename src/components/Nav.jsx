import React from 'react'
import { ReactSVG } from 'react-svg'

const Nav = () => {
    return (
        <>
            <nav id="nav">
                <ReactSVG className="logo__container" src="Logo.svg" />
                <ul className="nav__list">
                    <li className="nav__list--item" data-aos="fade-down">
                        Home
                    </li>
                    <li
                        className="nav__list--item"
                        data-aos="fade-down"
                        data-aos-delay="100"
                    >
                        Home
                    </li>
                    <li
                        className="nav__list--item"
                        data-aos="fade-down"
                        data-aos-delay="200"
                    >
                        Home
                    </li>
                    <li
                        className="nav__list--item"
                        data-aos="fade-down"
                        data-aos-delay="300"
                    >
                        Home
                    </li>
                    <li
                        className="nav__list--item"
                        data-aos="fade-down"
                        data-aos-delay="400"
                    >
                        Home
                    </li>
                </ul>
                <ReactSVG
                    className="hamburger-icon__container"
                    src="Hamburger.svg"
                />
                <div className="contact">
                    <a href="#">test</a>
                </div>
            </nav>
            <div className="nav modal mobile">
                <div className="nav__content">
                    <ul className="nav__list">
                        <li className="nav__list--item" data-aos="fade-down">
                            Home
                        </li>
                        <li
                            className="nav__list--item"
                            data-aos="fade-down"
                            data-aos-delay="100"
                        >
                            Home
                        </li>
                        <li
                            className="nav__list--item"
                            data-aos="fade-down"
                            data-aos-delay="200"
                        >
                            Home
                        </li>
                        <li
                            className="nav__list--item"
                            data-aos="fade-down"
                            data-aos-delay="300"
                        >
                            Home
                        </li>
                        <li
                            className="nav__list--item"
                            data-aos="fade-down"
                            data-aos-delay="400"
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
