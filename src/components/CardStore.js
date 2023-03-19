import React from 'react'

const CardStore = ({name,price,img}) => {

  return (
      <div className='card__store'>
        <div className='card__store__img'>
            <img src={img}/>
        </div>
        <div className='card__store__btn'>
          <p className='card__store__btn__title'>
            {name}
          </p>
          <p>
            {price} сом
          </p>
          
        </div>
      </div> 
  )
}

export default CardStore