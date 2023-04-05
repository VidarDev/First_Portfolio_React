import React from 'react'

const Button = ({ className, href, children, target }) => {
    return (
        <>
            <a
                data-aos="zoom-in"
                data-aos-duration="500"
                href={href}
                target={target}
                className={`btn ${className}`}
            >
                <span>{children}</span>
            </a>
        </>
    )
}
export default Button
