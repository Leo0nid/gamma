import React, {useEffect, useState} from 'react'
import EventsComing from '../components/EventsComing'
import EventsPast from '../components/EventsPast'
import axios from 'axios'




 
const Events = () => {
  

const [coming,setComing] = useState([])
const [past,setPast] = useState([])
// предстоящие турниры
const getData = async()=>{
  const {data} = await axios("http://semanyan.pythonanywhere.com/api/v1/turnir/list/?format=json")
  setComing(data)
}
// прошедшие турниры
const getDataAfter = async()=>{
    const {data} = await axios("http://semanyan.pythonanywhere.com/api/v1/achievements/list/?format=json")
    setPast(data)
  }

useEffect(()=> {
  getData()
  getDataAfter()
}, [])

console.log(coming, "coming")
console.log(past, "past")





  return (
    <>
    <div>
      
      {/* предстоящие турниры */}
{
  coming.map((el,idx)=>(
    <EventsComing key={Math.random() + idx} events_title={el.title} events_date={el.events_date} events__description={el.description} events_img={el.image} events_adress={el.address}/>
  ))
}
{/* прошедшие турниры */}
{   
      past.map((el,idx)=>(
        <EventsPast key={Math.random() + idx} events_title2={el.title} events_date2={el.events_date} events__description2={el.description} events_img2={el.image} events_result={el.result} />
      ))
    
    }
    </div>

    </>
  )

  }
  export default Events







