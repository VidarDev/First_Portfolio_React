import React, { useRef, useEffect } from 'react'

const Card = () => {
    const cardRef = useRef(null)
    const animationFrameId = useRef(null)

    const animate = (card, angleX, angleY, glowX, glowY) => {
        card.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`
        card.children[1].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`
        card.children[1].style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgb(184, 196, 211), transparent)`

        animationFrameId.current = requestAnimationFrame(() => {
            animate(card, angleX, angleY, glowX, glowY)
        })
    }

    useEffect(() => {
        const card = cardRef.current

        const handleMouseMove = (e) => {
            const elRect = card.getBoundingClientRect()
            const x = e.clientX - elRect.x
            const y = e.clientY - elRect.y

            const midCardWidth = elRect.width / 2
            const midCardHeight = elRect.height / 2

            const angleY = -(x - midCardWidth) / 24
            const angleX = (y - midCardHeight) / 24

            const glowX = (x / elRect.width) * 100
            const glowY = (y / elRect.height) * 100

            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current)
            }

            animate(card, angleX, angleY, glowX, glowY)
        }

        const handleMouseLeave = () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current)
            }

            card.children[0].style.transform = 'rotateX(0) rotateY(0) scale(1)'
            card.children[1].style.transform = 'rotateX(0) rotateY(0) scale(1)'
        }

        card.addEventListener('mousemove', handleMouseMove)
        card.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current)
            }

            card.removeEventListener('mousemove', handleMouseMove)
            card.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])

    return (
        <div
            data-aos="zoom-in-right"
            data-aos-delay="500"
            data-aos-duration="500"
            className="card"
            ref={cardRef}
        >
            <div className="card__content">
                <img
                    src="/assets/Photo.webp"
                    alt="La photo de Théo Richier"
                    role="img"
                    title="La photo de Théo Richier"
                    aria-label="La photo de Théo Richier"
                />
            </div>
            <div className="glow"></div>
        </div>
    )
}

export default Card
