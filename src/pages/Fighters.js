import React, { useState, useEffect } from 'react'
import FighterCard from '../components/FighterCard'
import axios from 'axios'
import Loader from "../assets/Loader.svg"


const Fighters = () => {

    const url = "http://semanyan.pythonanywhere.com/api/v1/sportsmen/list/?format=json"

    const [fighter, setFighter] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getData = async () => {
          setIsLoading(true)
          const { data } = await axios(url)
          
          setFighter(data)
          setIsLoading(false)
        }
        getData()
      }, [])
      console.log(fighter)
    



    return (
        <>
        <div className='fighters'>
            <div className='container'>
            <h1 className='fighters__title'>Спортсмены</h1>
            <div className='fighters_wrapper'>
            {
                fighter.map((el, idx)=>(
                    <FighterCard key={idx} fighter_name={el.name} fighter_age={el.age} fighter_img={el.image} fighter_weight={el.weight} fighter_rating={el.rating_total} fighter_wins={el.wins} />
                ))
            }
            </div>
        </div>
        </div>
        {isLoading && 
            <div className='home__spinner'>
            <img src={Loader} alt='loader' />
          </div>
          }
    
        </>
    )
}

export default Fighters