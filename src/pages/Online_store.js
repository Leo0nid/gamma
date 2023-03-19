import React,{useEffect, useState} from 'react'
import axios from 'axios'
import CardStore from '../components/CardStore'
import Loader from "../assets/Loader.svg"



const Online_store = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(()=>{
    const getData = async () =>{
      setIsLoading(true)
      const { data } = await axios ('http://semanyan.pythonanywhere.com/api/v1/shopping/list/')
      setProducts(data)
      setIsLoading(false)
    }
    getData()
  }, [])

  return (
    <>
    <div className='store_bg'>
    <div className='container'>
      <div className='card__store__wrapper' >
        {
          products.map((el, idx)=>(
            <CardStore key={idx} name={el.title} price = {el.price} img = {el.image}/>
          ))
        }
        
      </div>
    </div>
    {isLoading && 
    <div className='home__spinner'>
    <img src={Loader} alt='loader' />
  </div>
  
  } 
</div>

</>
  )
}

export default Online_store