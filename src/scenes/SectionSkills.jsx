import React, { useState, useEffect } from 'react'

const SectionSkills = () => {
    const [skillsData, setSkillsData] = useState([])

    useEffect(() => {
        fetch('/skillsData.json')
            .then((response) => response.json())
            .then((data) => setSkillsData(data))
    }, [])
    return (
        <>
            <section id="skills" className="section__wrapper">
                <p
                    className="section__subtitle"
                    data-aos="fade-down"
                    data-aos-delay="300"
                    data-aos-duration="500"
                >
                    Ma stack de dev
                </p>
                <h2
                    className="section__title"
                    data-aos="fade-down"
                    data-aos-delay="500"
                    data-aos-duration="500"
                >
                    Mes skills
                </h2>
                <div className="section__container">
                    <p
                        data-aos="fade-down"
                        data-aos-delay="500"
                        data-aos-duration="500"
                    >
                        Mon principal domaine d'expertise est le{' '}
                        <strong>développement Front-End</strong> en particulier
                        sur les CMS Prestashop et Wordpress. J'ai acquis des
                        compétences en TMA (Tierce Maintenance Applicative) sur
                        ces plateformes lors de mon alternance de Licence
                        Professionnelle chez{' '}
                        <strong>
                            <a
                                href="https://www.advisa.fr/"
                                className="link"
                                target="_blank"
                            >
                                Advisa
                            </a>
                        </strong>
                        .
                    </p>
                    <p
                        data-aos="fade-down"
                        data-aos-delay="500"
                        data-aos-duration="500"
                    >
                        Au-delà de mon parcours professionnel, j'ai constamment
                        développé mes compétences techniques. Je maîtrise des
                        technologies telles que React, JS, CSS, HTML, Sass, Gsap
                        et Bootstrap. Par ailleurs, je me suis initié au design
                        en utilisant des outils tels que Figma et Blender.
                    </p>
                    <p
                        data-aos="fade-down"
                        data-aos-delay="500"
                        data-aos-duration="500"
                    >
                        Actuellement, je prépare une{' '}
                        <strong>certification en ligne</strong> en Three.js et
                        JavaScript, dans le but d'élargir mes compétences en
                        développement de sites web 3D.
                    </p>
                    <p
                        data-aos="fade-down"
                        data-aos-delay="500"
                        data-aos-duration="500"
                    >
                        Consultez mon profil{' '}
                        <a
                            className="link"
                            href="https://www.linkedin.com/in/richier-theo/"
                            target="_blank"
                        >
                            Linkedin
                        </a>{' '}
                        pour plus d'informations
                    </p>
                    <div className="technology__container">
                        {skillsData.map((skill, index) => (
                            <a
                                key={index}
                                target="_blank"
                                href={skill.url}
                                data-aos="zoom-in-up"
                                data-aos-delay={index * 150 + 500}
                                data-aos-duration="500"
                            >
                                <div className="technology__item">
                                    <img
                                        className="technology__icon"
                                        src={skill.image}
                                        alt={`Des compétences en ${skill.name}`}
                                        role="img"
                                        title={skill.name}
                                        aria-label={`Des compétences en ${skill.name}`}
                                    />
                                    <span>{skill.name}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default SectionSkills
