import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const BannerScrollAnimation = () => {
    const [isMinWidth, setIsMinWidth] = useState(
        window.matchMedia('(min-width: 600px)').matches
    )

    const bannerTop = useRef(null)
    const bannerBottom = useRef(null)

    const handleScroll = () => {
        const scrollPosition = window.scrollY
        const bannerPosition = -100 + scrollPosition / 4

        gsap.to(bannerTop.current, {
            duration: 0.5,
            x: `${bannerPosition}%`,
            ease: 'power1.out',
        })

        gsap.to(bannerBottom.current, {
            duration: 0.5,
            x: `-${bannerPosition}%`,
            ease: 'power1.out',
        })
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMinWidth(window.matchMedia('(min-width: 600px)').matches)
        }

        window.addEventListener('resize', handleResize)
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <>
            <div className="banner">
                <div className="banner__content--top">
                    <p class="separator__text" ref={bannerTop}>
                        <span>Théo Richier</span>
                        <span>2022 Portfolio</span>
                        <span>Théo Richier</span>
                        <span>2022 Portfolio</span>
                        <span>Théo Richier</span>
                        <span>2022 Portfolio</span>
                        <span>Théo Richier</span>
                        <span>2022 Portfolio</span>
                    </p>
                </div>
                <div
                    className={`banner__content--bottom ${
                        isMinWidth ? '' : 'disable'
                    }`}
                >
                    <p class="separator__text" ref={bannerBottom}>
                        <span>Théo Richier</span>
                        <span>2022 Portfolio</span>
                        <span>Théo Richier</span>
                        <span>2022 Portfolio</span>
                        <span>Théo Richier</span>
                        <span>2022 Portfolio</span>
                        <span>Théo Richier</span>
                        <span>2022 Portfolio</span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default BannerScrollAnimation
