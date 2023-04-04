import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const BannerScrollAnimation = () => {
    const [isMinWidth, setIsMinWidth] = useState(
        window.matchMedia('(min-width: 769px)').matches
    )

    const bannerTop = useRef(null)
    const bannerBottom = useRef(null)

    const handleScroll = () => {
        const scrollPosition = window.scrollY
        const bannerPosition = scrollPosition / 100

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
            setIsMinWidth(window.matchMedia('(min-width: 769px)').matches)
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
            <div id="banner" className="banner">
                <p class="banner__content--top" ref={bannerTop}>
                    <span>Théo Richier</span>
                    <span>2022 Portfolio</span>
                    <span>Théo Richier</span>
                    <span>2022 Portfolio</span>
                    <span>Théo Richier</span>
                    <span>2022 Portfolio</span>
                    <span>Théo Richier</span>
                    <span>2022 Portfolio</span>
                    <span>Théo Richier</span>
                    <span>2022 Portfolio</span>
                    <span>Théo Richier</span>
                    <span>2022 Portfolio</span>
                </p>

                <p
                    class={`banner__content--bottom ${
                        isMinWidth ? '' : 'disable'
                    }`}
                    ref={bannerBottom}
                >
                    <span>Théo Richier</span>
                    <span>2022 Portfolio</span>
                    <span>Théo Richier</span>
                    <span>2022 Portfolio</span>
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
        </>
    )
}

export default BannerScrollAnimation
