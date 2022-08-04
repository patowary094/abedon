import React from 'react'
import button from '../img/addbutton.png'
import { Link } from 'react-router-dom'
const AddButton = () => {
    return (
        
            <div class="col-md-2">
                <Link to="/MerchantAddStudents">
                <div className='card text-center p-2' style={cardy}>
                
                                    <div className='text-center' >
                                    <img src={button} alt={button} />
                                    </div>
                                    
                                </div>      
               
                                
                                {/* <div className='text-center mb-3'>
                                    <img className='img-fluid' src={web} alt={web} />
                                    </div> */}
                </Link>                    
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}
export default AddButton;
