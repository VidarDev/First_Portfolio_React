import React, { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import ThreeHeader from '../components/Canvas/ThreeHeader'
import ScrollIcon from '../components/ScrollIcon'

const SectionHome = () => {
    const [spanScrollVisible, setSpanScrollVisible] = useState(false)
    const spanScroll = useRef(null)

    const tooglespanScrollVisible = () => {
        setSpanScrollVisible(!spanScrollVisible)
    }
    const handleScroll = () => {
        const scrollPosition = window.scrollY
        const spanPosition = scrollPosition / 4

        gsap.to(spanScroll.current, {
            duration: 0.5,
            x: `-${spanPosition}%`,
            ease: 'power1.out',
            transform: 'translateY(-50%)',
        })
    }

    useEffect(() => {
        setTimeout(tooglespanScrollVisible, 1400)
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <section id="home">
                <h1>
                    <span
                        data-aos="fade-down"
                        data-aos-delay="1200"
                        data-aos-duration="500"
                    >
                        Développeur
                    </span>{' '}
                    <span
                        ref={spanScroll}
                        className={spanScrollVisible ? '' : 'disable'}
                    >
                        web
                    </span>
                    <span
                        data-aos="fade-down"
                        data-aos-delay="1600"
                        data-aos-duration="500"
                    >
                        {' '}
                        Front-End
                    </span>
                </h1>
                <ScrollIcon href="#about" />
                <div className="social">
                    <p
                        className="social__items"
                        data-aos="fade-down"
                        data-aos-delay="1800"
                        data-aos-duration="500"
                        data-aos-offset="-1000"
                    >
                        <a
                            className="link"
                            href="https://github.com/VidarDev"
                            target="_blank"
                        >
                            Github
                        </a>
                    </p>
                    <p
                        className="social__items"
                        data-aos="fade-down"
                        data-aos-delay="1800"
                        data-aos-duration="500"
                        data-aos-offset="-1000"
                    >
                        <a
                            className="link"
                            href="https://www.linkedin.com/in/richier-theo/"
                            target="_blank"
                        >
                            Linkedin
                        </a>
                    </p>
                </div>
                <ThreeHeader />
            </section>
        </>
    )
}

export default SectionHome
