import React, { useState, useEffect } from 'react'
import SwiperCore, { Pagination, EffectCoverflow } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Pagination, EffectCoverflow])

const SwiperComponent = () => {
    const [slidesData, setSlidesData] = useState([])

    useEffect(() => {
        fetch('/slidesData.json')
            .then((response) => response.json())
            .then((data) => setSlidesData(data))
    }, [])

    return (
        <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 20,
                stretch: 0,
                depth: 350,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={{ clickable: true }}
            className="swiper-container"
            data-aos="zoom-in-left"
            data-aos-duration="500"
        >
            {slidesData.map((slide, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                    <a target="_blank" href={slide.url}>
                        <div className="picture">
                            <img
                                src={slide.image}
                                alt={`Projet ${slide.name}`}
                                title={slide.name}
                                aria-label={`Projet ${slide.name}`}
                            />
                        </div>
                        <div className="detail">
                            <h3>{slide.name}</h3>
                            <span>{slide.role}</span>
                        </div>
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default SwiperComponent
