import React, { useEffect, useState } from 'react'
import NewsCard from '../components/NewsCard'
import axios from 'axios'
import Loader from "../assets/Loader.svg"


const News = () => {

  const url = "http://semanyan.pythonanywhere.com/api/v1/news/list/"

  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      const { data } = await axios(url)
      setNews(data)
      setIsLoading(false)
    }
    getData()
  }, [])
  console.log(news)

  return (
    <>
    <div className='news'>
      {
        news.map((el, idx) => (
          <NewsCard key={idx} news_title={el.title} news_descr={el.description} news_img={el.image} />
        ))
      }
    </div>
    {isLoading && 
    <div className='home__spinner'>
    <img src={Loader} alt='loader' />
  </div>
  }
</>
  )
}

export default News
