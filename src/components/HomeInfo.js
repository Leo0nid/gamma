import React from "react";
import '@coreui/coreui/dist/css/coreui.min.css'
import { CCarousel } from '@coreui/react'
import { CCarouselItem } from "@coreui/react";
import {CCarouselCaption} from "@coreui/react"
import { CImage } from "@coreui/react";
import slide1 from "../image/slide1.jpg"
import slide2 from "../image/slide2.jpg"
import slide3 from "../image/slide3.jpg"
import mission from "../image/mission.jpg"
import values from "../image/values.jpg"


const HomeInfo = () => {
  return (
    <>

<CCarousel controls indicators>
  <CCarouselItem> 
    <CImage className="d-block w-100 object__cover"  height={800} src={slide1}  alt="slide 1" /> 
    <CCarouselCaption className = "d-none d-md-block"> 
      <h5> Метка первого слайда </h5>
      <p> заполнитель для первого слайда. </p>
    </CCarouselCaption>
 </CCarouselItem>
 <CCarouselItem>
  <CImage className="d-block w-100"  height={800} src={slide2} alt="slide 2" /> 
  <CCarouselCaption className = "d-none d-md-block"> 
      <h5> Метка второго слайда </h5>
      <p> заполнитель для первого слайда. </p>
    </CCarouselCaption>
  </CCarouselItem> 
 <CCarouselItem> 
    <CImage className="d-block w-100"  height={800} src={slide3} alt="slide 3" /> 
    <CCarouselCaption className = "d-none d-md-block"> 
      <h5> Метка первого слайда </h5>
      <p> заполнитель для первого слайда. </p>
    </CCarouselCaption>
 </CCarouselItem> 
 </CCarousel>
 <div className="container">
 <div className="home__values">
 <div className='home__info'>
      <p className='home__text'>
        <h3 className='home__subtitle'>Наша миссия</h3>
      GAMMA пропагандирует традиции боевых искусств, такие как мастерство, дисциплина и уважение на всех уровнях сообщества, обеспечивая безопасность спортсменов, честную игру и принятие всех желающих.</p>
    </div>
    <div className='home__info'>
      <p className= 'home__text'>
      <h3 className='home__subtitle'>Наши ценности</h3> 
<p className='home__text'>GAMMA руководствуются следующими ценностями:
Честность,
Смирение,
Уважение,
Превосходство,
Дисциплина,
Сообщество,
Инновации.</p>
      </p>
    </div>
   <div className='home__card'>
    <img className="home__img" src={mission} alt = "mission"/>
   </div>
   <div className='home__card'>
    <img className="home__img" src={values} alt = "values"/>
   </div>

  </div>

  </div>
 
 </>
  )
}

export default HomeInfo