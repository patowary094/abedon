import React from 'react'
import Card from './card'
import FData from './FakeData/FData.js'
// sample image
import web from './img/ru.png'
const MerUniversities = () => {
    return (
        <div>
            <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                        <div className=" row gy-4">
                            {/* checking the cards */}
                            
                            {/* {
                                FData.map((val, ind) => {
                                    return <Card
                                        key={ind}
                                        imgsrc={val.imgsrc}
                                        title={val.title}
                                    />
                                })
                            } */}
                            <div className="col-md-2">
                                <div className='card text-center p-2' style={cardy}>
                                    <div className='text-center mb-3'>
                                    <img className='img-fluid' src={web} alt={web} />
                                    </div>
                                
                                <div className='mt-2'>
                                    <p className="card-text">Rajshahi University</p>
                                    
                                </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className='card text-center p-2' style={cardy}>
                                    <div className='text-center mb-3'>
                                    <img className='img-fluid' src={web} alt={web} />
                                    </div>
                                
                                <div className='mt-2'>
                                    <p className="card-text">Rajshahi University</p>
                                    
                                </div>
                                </div>
                            </div>
                       
                            
                        </div>
                        </div>
                    </div>    
            </div>        
        </div>
    )
}

const cardy = {
    position: 'relative',
    background: '#FFFFFF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '19px',
    maxWidth: '200px',
    minHeight: '120px',
    cursor: 'pointer',  
}

export default MerUniversities;
