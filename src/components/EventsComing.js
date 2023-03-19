import React from 'react'
import 'animate.css'


const Events__news = ({events_date, events_title,events_img, events__description,events_adress}) => {
  return (
    <div className='events_bg'>
    <div className='container'>
      <h2 className='events__news'>Предстоящие турниры </h2>
        <div className='events__wrapper animate__animated animate__backInLeft'>
          {/* дата */}
          <div className='events__data'>
          <p className='events__date'> {events_date}</p>

          </div>
      {/* событие */}
      <div className='events__info'> 

        <h3 className='events__title'>{events_title}</h3>
        <p className='events__description'>{events__description}</p>
        <p className='events__adress'><b>Адрес:</b> {events_adress}</p>
        </div>
        {/* изображение */}
        <div className='events__image'>
          <img src={events_img}>
          </img>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Events__news