import React from 'react'
import 'animate.css'
const Events__after = ({events_date2, events_title2,events_img2, events__description2,events_result}) => {
  return (
    <div className='container'>
    <div>  <h2 className='events__news'>Прошедшие турниры </h2>
    <div className='events__wrapper animate__animated animate__backInLeft'>
      {/* дата */}
      <div className='events__data'>
      <p className='events__date'>{events_date2}</p>
      </div>
  {/* событие */}
  <div className='events__info'> 
    <h3 className='events__title'>{events_title2}</h3>
    <p className='events__description'>{events__description2}</p>
    <p className='events__result'> <b>Результаты:</b> {events_result}</p>
   
    </div>
    {/* изображение */}
    <div className='events__image'>
      <img src={events_img2}>
      </img>
    </div>
    </div></div></div>
  )
}

export default Events__after