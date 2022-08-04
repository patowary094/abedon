
import React from 'react'
const Card = (props) => {
    return (
        <div>
            <div class="col-md-2">
                                <div className='card text-center p-2' style={cardy}>
                                    <div className='text-center mb-1'>
                                    <img className='img-fluid' src={props.imgsrc} alt={props.imgsrc} />
                                    </div>
                                
                                <div className='mt-2'>
                                    <p className="card-text pb-0" >{props.name}</p>
                                    <p className="card-text">ID: {props.id}</p>
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

export default Card;
