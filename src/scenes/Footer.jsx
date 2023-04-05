import React from 'react'

const Footer = () => {
    var ladate = new Date()
    return (
        <>
            <footer id="footer">
                <div className="social">
                    <p className="social__items">
                        <a
                            className="link"
                            href="https://github.com/VidarDev"
                            target="_blank"
                        >
                            Github
                        </a>
                    </p>
                    <p className="social__items">
                        <a
                            className="link"
                            href="https://www.linkedin.com/in/richier-theo/"
                            target="_blank"
                        >
                            Linkedin
                        </a>
                    </p>
                </div>
                <span>©{ladate.getFullYear()}</span>
            </footer>
        </>
    )
}

export default Footer
