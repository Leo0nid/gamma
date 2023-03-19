import React from 'react'


const CouchesCard = ({ couch_name, couch_info, couch_img }) => {
    return (
   
                    <div className='couch__card'>
                        <div className="couch__img">
                            <img className='couch_img2' src={couch_img} alt="couch" />
                        </div>
                        <div className="couch__info">
                            <p className="couch__name">
                                {couch_name}
                            </p>
                        
                            <p className="couch__descr">
                                {couch_info}                 
                          </p>
                        </div>
                    </div>
             
    )
}

export default CouchesCard