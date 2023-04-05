import React from 'react'
import BannerScrollAnimation from '../scenes/BannerScrollAnimation'
import SectionHome from '../scenes/SectionHome'
import SectionAbout from '../scenes/SectionAbout'
import SectionWorks from '../scenes/SectionWorks'
import SectionSkills from '../scenes/SectionSkills'
import SectionContact from '../scenes/SectionContact'

const HomePage = () => {
    return (
        <>
            <SectionHome />
            <BannerScrollAnimation />
            <SectionAbout />
            <SectionWorks />
            <SectionSkills />
            <SectionContact />
        </>
    )
}
export default HomePage
