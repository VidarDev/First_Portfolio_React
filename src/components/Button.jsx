import React from 'react'

const Button = ({ className, href, children }) => {
    return (
        <>
            <a href={href} className={`btn ${className}`}>
                {children}
            </a>
        </>
    )
}
export default Button
