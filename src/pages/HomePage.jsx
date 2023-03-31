import React from 'react'
import ThreeHeader from '../scenes/ThreeJs/ThreeHeader'
import ThreeMail from '../scenes/threejs/ThreeMail'
import Vide from '../components/Vide'
import BannerScrollAnimation from '../components/BannerScrollAnimation'

const HomePage = () => {
    return (
        <>
            <section id="presentation">
                <h1>
                    <span>Apprenti</span>
                    <span>Apprenti</span>
                    <span>Développeur web</span>
                    <span>Front-End</span>
                </h1>
                <ThreeHeader />
            </section>
            <BannerScrollAnimation></BannerScrollAnimation>

            <ThreeMail />
            <Vide className="vide"></Vide>
        </>
    )
}
export default HomePage
