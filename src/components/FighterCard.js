import React, { useState } from 'react'


const FighterСard = ({ fighter_name, fighter_age, fighter_wins, fighter_weight, fighter_rating, fighter_img }) => {

    const ageEnding = (age) => {

        const strAge = `${age}`
    
        if(age >= 18 && age <= 20) {
            return strAge + " лет"
        } else if(strAge.endsWith("1")) {
            return strAge + " год"
        } else if (strAge.endsWith("2") || strAge.endsWith("3") || strAge.endsWith("4")) {
            return strAge + " года"
        } else {
            return strAge + " лет"
        }
    }

    

    return (

        <div className='fighters__card'>
            <div className="fighter__img">
                <img src={fighter_img} alt="fighter" />
            </div>
            <div className="fighter__info">
                <p className="fighter__name">
                    {fighter_name}
                </p>
                <p className="fighter__age">
                
                    {fighter_age=ageEnding(fighter_age)}

                </p>
                <p className='fighter_weight'>
                    {fighter_weight} кг.
                </p>
                <p className="fighter__ranking">
                    {fighter_rating} место.
                </p>
                <p className='fighter_wins'>
                    {fighter_wins} побед.
                </p>
            </div>
        </div>



    )
}

export default FighterСard