import React from 'react'
import Card from '../components/Card'
import Button from '../components/Button'

const SectionAbout = () => {
    return (
        <>
            <section id="about" className="section__wrapper">
                <p
                    className="section__subtitle"
                    data-aos="fade-down"
                    data-aos-duration="500"
                >
                    Mon Introduction
                </p>
                <h2
                    className="section__title"
                    data-aos="fade-down"
                    data-aos-duration="500"
                >
                    À propos
                </h2>
                <div className="section__container">
                    <Card />
                    <div>
                        <p>
                            Poursuivant actuellement une{' '}
                            <strong>
                                <a
                                    className="link"
                                    href="https://lpdwca.eformation-webmaster.net/"
                                    target="_blank"
                                >
                                    Licence Professionnelle DWCA
                                </a>
                            </strong>{' '}
                            (Développement Web, Communication et Apprentissage)
                            à l'Université de Strasbourg, je suis à la recherche
                            d'une{' '}
                            <strong>
                                alternance en développement web Front-end
                            </strong>{' '}
                            de deux ans pour compléter mon diplôme de niveau
                            Bac+5, à partir du 10 septembre 2023.
                        </p>
                        <p>
                            En tant qu'étudiant <strong>assidu</strong> et{' '}
                            <strong>déterminé</strong>, je sais m'adapter
                            rapidement aux diverses situations. Doté d'un grand
                            sens du détail et d'un excellent esprit d'équipe, je
                            suis également en mesure de prendre des initiatives
                            lorsque cela s'avère nécessaire.
                        </p>
                        <p>
                            Les compétences que j'ai développées en matière d'
                            <strong>organisation</strong>, de priorisation des
                            tâches et de travail en autonomie constituent des
                            atouts essentiels pour réussir dans ce domaine. De
                            plus, ma volonté constante d'apprendre et de me
                            perfectionner dans les{' '}
                            <strong>technologies Front-end et Design</strong>{' '}
                            nourrit ma motivation pour progresser en tant que
                            développeur Front-end.{' '}
                        </p>
                        <p>
                            Si vous recherchez un étudiant sérieux et passionné
                            pour une alternance en développement web Front-end,
                            n'hésitez pas à me contacter dès maintenant !
                        </p>

                        <div className="btn__container">
                            <Button
                                className="icon-download"
                                target="_blank"
                                href="/assets/CV_Richier_Théo.pdf"
                            >
                                Mon CV
                            </Button>
                            <Button
                                className="btn--outline icon-mail"
                                target=""
                                href="#contact"
                            >
                                Contacte-moi
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionAbout
