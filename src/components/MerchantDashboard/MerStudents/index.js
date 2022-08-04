import React from 'react'
import Card from './card'
import FData from './fakeBackend/FData'
import AddButton from './addButton'
// sample image
import sampleImg from './img/profileimg.png'
// import { Link } from 'react-router-dom'
const Mer_students = () => {
    return (
        <div>
            <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                        <div class=" row gy-4">
                        {/* Add Student Button */}
                        {/* <Link to="/MerchantAddStudents">
                            
                        </Link> */}
                        <AddButton /> 
                        <div class="col-md-2">
                                <div className='card text-center p-2' style={cardy}>
                                    <div className='text-center mb-1'>
                                    <img className='img-fluid' src={sampleImg} alt={sampleImg} />
                                    </div>
                                
                                <div className='mt-2'>
                                    <p className="card-text pb-0" >Nirupam Chanda</p>
                                    <p className="card-text">ID: 01</p>
                                </div>
                                </div>
                         </div> 
                         
                        <div class="col-md-2">
                                <div className='card text-center p-2' style={cardy}>
                                    <div className='text-center mb-1'>
                                    <img className='img-fluid' src={sampleImg} alt={sampleImg} />
                                    </div>
                                
                                <div className='mt-2'>
                                    <p className="card-text pb-0" >Nirupam Chanda</p>
                                    <p className="card-text">ID: 01</p>
                                </div>
                                </div>
                         </div> 

                        

                            {/* {
                                FData.map((val, ind) => {
                                    return <Card
                                        key={ind}
                                        imgsrc={val.imgsrc}
                                        name={val.name}
                                        id={val.id}
                                    />
                                })
                            } */}
                            
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


export default Mer_students;
