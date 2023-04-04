import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import ThreeHeader from '../scenes/ThreeJs/ThreeHeader'
import ThreeMail from '../scenes/threejs/ThreeMail'
import Vide from '../components/Vide'
import BannerScrollAnimation from '../components/BannerScrollAnimation'
import Card from '../components/Card'
import SwiperComponent from '../components/SwiperComponent'
import Button from '../components/Button'

const HomePage = () => {
    const spanScroll = useRef(null)

    const handleScroll = () => {
        const scrollPosition = window.scrollY
        const spanPosition = scrollPosition / 4

        gsap.to(spanScroll.current, {
            duration: 0.5,
            x: `-${spanPosition}%`,
            ease: 'power1.out',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <section id="home">
                <h1>
                    <span>Développeur</span>
                    <span ref={spanScroll}>web</span>
                    <span>Front-End</span>
                </h1>
                <a href="#about" className="scroll-icon">
                    <span className="scroll-icon__container">
                        <span className="scroll-icon__dot"></span>
                    </span>
                </a>
                <div className="social">
                    <p className="social__items">
                        <a className="link" href="#about">
                            Github
                        </a>
                    </p>
                    <p className="social__items">
                        <a className="link" href="#home">
                            Linkedin
                        </a>
                    </p>
                </div>
                <ThreeHeader />
            </section>
            <BannerScrollAnimation />
            <section id="about" className="section__wrapper">
                <p class="section__subtitle">Mon Introduction</p>
                <h2 class="section__title">À propos</h2>
                <div className="section__container">
                    <Card />
                    <div>
                        <p>
                            Actuellement étudiant en Licence Professionnelle
                            DWCA à l’université de Strasbourg, je suis à la{' '}
                            <strong>
                                recherche d’une alternance en développement
                                Front
                            </strong>{' '}
                            pour obtenir mon master, Bac+5 dès septembre 2023.
                            <br />
                            Je suis un étudiant motivé, persévérant et capable
                            de m’adapter à toutes les situations. Doté d’un
                            souci du détail et d’un excellent esprit d’équipe,
                            je suis également capable de prendre des initiatives
                            quand c’est nécessaire. <br />
                            Mon organisation, ma capacité à prioriser les tâches
                            et à travailler en autonomie sont des atouts
                            importants. Enfin, mon désir d’apprendre de
                            nouvelles choses est une motivation constante dans
                            mon parcours de développement. Si vous cherchez un
                            étudiant talentueux pour une alternance en
                            développement Front, n’hésitez pas à me contacter
                            dès maintenant !
                        </p>
                        <Button>Mon cv</Button>
                        <Button className="btn--outline">Contacte-moi</Button>
                    </div>
                </div>
            </section>
            <section id="works" className="section__wrapper">
                <p class="section__subtitle">Mon Introduction</p>
                <h2 class="section__title">À propos</h2>
                <div className="section__container">
                    <div>
                        <p>
                            Mon organisation, ma capacité à prioriser les tâches
                            et à travailler en autonomie sont des atouts
                            importants. Enfin, mon désir d’apprendre de
                            nouvelles choses est une motivation constante dans
                            mon parcours de développement. Si vous cherchez un
                            étudiant talentueux pour une alternance en
                            développement Front, n’hésitez pas à me contacter
                            dès maintenant !
                        </p>
                    </div>
                    <SwiperComponent />
                </div>
            </section>
            <section id="skills" className="section__wrapper">
                <p class="section__subtitle">Mon Introduction</p>
                <h2 class="section__title">À propos</h2>
                <div className="section__container"></div>
            </section>
            <section id="contact" className="section__wrapper">
                <p class="section__subtitle">Mon Introduction</p>
                <h2 class="section__title">À propos</h2>
                <div className="section__container">
                    <ThreeMail />
                </div>
            </section>
            <footer></footer>
        </>
    )
}
export default HomePage
