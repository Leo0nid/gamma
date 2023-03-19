import React, { useEffect, useState } from 'react'
import CouchesCard from '../components/CouchesCard'
import axios from 'axios'
import Loader from "../assets/Loader.svg"

const Couches = () => {

  const url = "http://semanyan.pythonanywhere.com/api/v1/coaches/list/?format=json"
  const [couches, setCouches] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const getData = async () => {
    try{
      setIsLoading(true)
      const { data } = await axios(url)
      setCouches(data)
      setIsLoading(false)
    } catch(e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    getData()
  }, [])
  console.log(couches)




  return (
    <>
      <div className='couch'>
        <div className='container'>

          <div className='couches__wrapper'>

            {
              couches.map((el, idx) => (
                <CouchesCard key={idx} couch_name={el.name} couch_info={el.info} couch_img={el.image} />
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

export default Couches