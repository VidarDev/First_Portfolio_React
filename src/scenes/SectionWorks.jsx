import React from 'react'
import SwiperComponent from '../components/SwiperComponent'

const SectionWorks = () => {
    return (
        <>
            <section id="works" className="section__wrapper">
                <p
                    className="section__subtitle"
                    data-aos="fade-down"
                    data-aos-duration="500"
                >
                    Mon Portfolio
                </p>
                <h2
                    className="section__title"
                    data-aos="fade-down"
                    data-aos-duration="500"
                >
                    Mes projets récents
                </h2>
                <div className="section__container">
                    <div>
                        <p>
                            En tant que{' '}
                            <strong>développeur web Front-end</strong>, j'ai
                            acquis des compétences en intégration de chartes
                            graphiques, d'UI kits et de demandes clients, me
                            permettent de gérer divers tickets et de communiquer
                            efficacement avec les clients. J'utilise des
                            technologies telles que HTML, CSS, JS, jQuery et
                            SASS pour offrir des solutions performantes.
                        </p>
                        <p>
                            Je m'efforce constamment d'apprendre de nouvelles{' '}
                            <strong>technologies Front-end</strong> telles que
                            React et Three.js. Actuellement, je travaille sur la
                            refonte d'un site WordPress en collaboration avec{' '}
                            <a
                                className="link"
                                target="blank"
                                href="https://www.linkedin.com/in/fanny-goupil-88837a231/"
                            >
                                Fanny Goupil
                            </a>
                            , visant à créer un site web vitrine fonctionnel et
                            attrayant.
                        </p>
                    </div>
                    <SwiperComponent />
                </div>
            </section>
        </>
    )
}

export default SectionWorks
