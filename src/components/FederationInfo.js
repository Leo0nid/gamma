import React,{useState} from 'react'
import missions from "../image/missions.jpg"
import values from "../image/values.jpg"
import ReactPlayer from 'react-player'



const FederationInfo = () => {

    return (
        <div>
  
        <div className='federation'>
            <div className="container">

                <div className='federation__reactPlayer'>
                    <ReactPlayer width="1290px" height="660px" url='https://www.youtube.com/watch?v=PDKMZAYb55Q&t=2s&ab_channel=GAMMA' />
                </div>
                <div className="federation">

                    <div className="federation__information">
                        <h2 className="federation__title">Наше видение</h2>
                        {/* Наше видение */}
                        <p className="federation__text">GAMMA ставит перед собой долгосрочную цель добиться международного признания смешанных единоборств в качестве олимпийского вида спорта, предоставив всем любителям смешанных единоборств платформу и возможность реализовать свои мечты о выступлении на олимпийской арене. Наша пятилетняя стратегия до 2024 года - это первый шаг на этом пути. В течение этого периода мы будем стремиться к созданию более конкурентоспособных, зрелищных и значимых смешанных единоборств для спортсменов и болельщиков. Мы будем развивать спорт, создавая больше возможностей для людей и стран наслаждаться им и повышая конкурентоспособность смешанных единоборств на всех уровнях. Мы будем продвигать смешанные единоборства, проводя захватывающие и увлекательные глобальные мероприятия, привлекая новых и разнообразных болельщиков и создавая долгосрочные успешные коммерческие и некоммерческие партнерства. Наконец, мы будем продолжать прилагать значительные усилия для защиты целостности спорта и развивать инициативы, способствующие честной игре...
                        </p>
                    </div>
                    {/* карты */}
                    <div className="federation__values">
                        <div className='federation__card'>
                            <img className='federation__img' src={missions} alt="missions" />
                        </div>
                        <div className='federation__card'>
                            <img className='federation__img' src={values} alt="values" />
                        </div>
                        <div className='federaion__info'>
                            <p className='federation__text'>
                                <h3 className='federation__subtitle'>Наша миссия</h3>
                                GAMMA пропагандирует традиции боевых искусств, такие как мастерство, дисциплина и уважение на всех уровнях сообщества, обеспечивая безопасность спортсменов, честную игру и принятие всех желающих.</p>
                        </div>
                        <div className='federaion__info'>
                            <p className='federaion__text'>
                                <h3 className='federation__subtitle'>Наши ценности</h3>
                                <p className='federation__text-values'>GAMMA руководствуются следующими ценностями: Честность, Смирение, Уважение, Превосходство, Дисциплина, Сообщество, Инновации.</p>
                            </p>
                        </div>
                    </div>

                </div>
        
            </div>
        </div>
    
        </div>
    )
}

export default FederationInfo