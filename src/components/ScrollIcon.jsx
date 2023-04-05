import React from 'react'

const scrollIcon = ({ href }) => {
    return (
        <>
            <a
                href={href}
                className="scroll-icon"
                tabIndex="-1"
                data-aos="fade-down"
                data-aos-delay="2200"
                data-aos-duration="500"
                data-aos-offset="-1000"
                role="presentation"
                alt=""
                aria-hidden="true"
                title=""
                aria-label=""
            >
                <span className="scroll-icon__container">
                    <span className="scroll-icon__dot"></span>
                </span>
            </a>
        </>
    )
}

export default scrollIcon
