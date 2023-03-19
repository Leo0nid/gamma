import React, { useState } from 'react'

const NewsCard = ({news_title, news_descr, news_img}) => {
    const [isVisible, setIsVisible] = useState(false)

    // function readMore() {
    //     let dots = document.getElementById("dots")
    //     let more = document.getElementById("more")
    //     let btn = document.getElementById("btn")

    //     if (dots.style.display === "none") {
    //         dots.style.display = "inline"
    //         btn.innerText = "Подробнее"
    //         more.style.display = "none"
    //     } else {
    //         dots.style.display = "none"
    //         btn.innerText = "Скрыть"
    //         more.style.display = "inline"
    //     }
    // }

    // 

    return (
        <div>
        <div className='news'>
            <div className='container'>
                <div className='news_wrapper'>
                    <div className='news_card'>
                        <div className='news_img'>
                        
                            {/* {news_img.map((el)=>(
                                <img src={el} key={Math.round()} />
                            ))} */}
                     <img src= {news_img}/>

                        </div>
                        <div className='news_info'>
                            <p className='news_title'>
                          
                                {news_title}
                            </p>
                            <p className='news_descr'>{news_descr.slice(0, isVisible ? -1 : 150)}{!isVisible && "..."}</p>
                            <button className='news_btn' onClick={() => setIsVisible(prev => !prev)}>{isVisible ? "Скрыть" : "Показать"}</button>
                            {/* <button id='btn' onClick={readMore} >Подробнее</button> */}
                        </div>
                    </div>

                </div>

            </div>

        </div>

        </div>



    )
}

export default NewsCard