import React from 'react'
import ThreeMail from '../components/canvas/ThreeMail'
import Button from '../components/Button'

const SectionContact = () => {
    return (
        <>
            <section id="contact" className="section__wrapper">
                <p
                    className="section__subtitle"
                    data-aos="fade-down"
                    data-aos-delay="300"
                    data-aos-duration="500"
                >
                    Entre en contact
                </p>
                <h2
                    className="section__title"
                    data-aos="fade-down"
                    data-aos-delay="500"
                    data-aos-duration="500"
                >
                    Contacte-moi
                </h2>
                <div className="section__container">
                    <div className="contact__content">
                        <p>
                            Je vous remercie d'avoir consulté mon{' '}
                            <strong>portfolio</strong>. J'espère que les
                            informations concernant mes compétences en{' '}
                            <strong>développement web Front-end</strong> ont
                            retenu votre attention.
                        </p>
                        <p>
                            Pour toute question ou collaboration sur des projets
                            passionnants, n'hésitez pas à me contacter en
                            cliquant sur le bouton ci-dessous. Je serais ravi
                            d'échanger sur vos idées et de contribuer à leur
                            concrétisation en ligne. Merci encore pour votre
                            temps et votre intérêt.
                        </p>
                        <Button
                            className=" icon-mail"
                            target=""
                            href="mailto:theo@richier.org"
                        >
                            Écrit moi
                        </Button>
                    </div>
                    <ThreeMail />
                </div>
            </section>
        </>
    )
}

export default SectionContact
