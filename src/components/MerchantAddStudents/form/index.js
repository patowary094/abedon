import React, {useState} from 'react'
import Styles from './form.module.css'
import { Link } from 'react-router-dom';
const Form = () => {
    const [data, setData] = useState({
        email: '',
        phone: '',
        sscroll: '',
        sscregno: '',
        sscyear: '',
        sscboard: '',
        hscroll: '',
        hscregno: '',
        hscyear: '',
        hscboard: '',
        subject: '',
        file: '',
    });
    const InputEvent = (event) => {
        const {name, value} = event.target;
    
        setData((preVal) => {
            return {
                ...preVal,
                [name] : value,
            }
        })
    }
    const formSubmit = (e) => {
        e.preventDefault();
    }
    

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 mx-auto">
                    <form className="row g-3" onSubmit={formSubmit}>
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">Email</label>
                        <input required style={formControl} type="email" className="form-control" id="inputEmail4" placeholder="Ex. human@example.com"
                        name='email'
                        value={data.email}
                        onChange={InputEvent}
                        />
                    </div>
                    <div className="col-md-6">
                        <label for="inputPhoneNumber" className="form-label">Phone No.</label>
                        <input required style={formControl} type="tel" className="form-control" id="inputPhoneNo4" placeholder="Ex. 01XXXXXXXXX"
                        name='phone'
                        value={data.phone}
                        onChange={InputEvent}/>
                    </div>
                    
                    <div className="col-md-2">
                        <label for="inputSSCRollNo" className="form-label">SSC Roll No.</label>
                        <input required style={formControl} type="num" className="form-control" id="inputSSCRollNo"
                        name='sscroll'
                        value={data.sscroll}
                        onChange={InputEvent}/>
                    </div>
                    <div className="col-md-4">
                        <label for="inputSSCRegistrationNo" className="form-label">SSC Registration No.</label>
                        <input required style={formControl} type="num" className="form-control" id="inputSSCRegistrationNo"
                        name='sscregno'
                        value={data.sscregno}
                        onChange={InputEvent}/>
                    </div>
                    <div className="col-md-3">
                        <label for="inputPassingYear" className="form-label">Passing Year</label>
                        <select required  style={formControl} id="inputPassingYear" className="form-select"
                        name='sscyear'
                        value={data.sscyear}
                        onChange={InputEvent}>
                        <option selected>Choose One</option>
                        <option >2018</option>
                        <option >2019</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label for="inputBoard" className="form-label">Board</label>
                        <select required style={formControl} id="inputBoard" className="form-select"
                        name='sscboard'
                        value={data.sscboard}
                        onChange={InputEvent}>
                        <option selected>Choose One</option>
                        <option >Dhaka</option>
                        <option >Rajshahi</option>
                        <option >Chattogram</option>
                        <option >...</option>
                        </select>
                    </div>
                    
                    <div className="col-md-2">
                        <label for="inputHSCRollNo" className="form-label">HSC Roll No.</label>
                        <input required style={formControl} type="num" className="form-control" id="inputHSCRollNo"
                        name='hscroll'
                        value={data.hscroll}
                        onChange={InputEvent}/>
                    </div>
                    <div className="col-md-4">
                        <label for="inputHSCRegistrationNo" className="form-label">HSC Registration No.</label>
                        <input required style={formControl} type="num" className="form-control" id="inputHSCRegistrationNo"
                        name='hscregno'
                        value={data.hscregno}
                        onChange={InputEvent}/>
                    </div>
                    <div className="col-md-3">
                        <label for="inputPassingYear" className="form-label">Passing Year</label>
                        <select required style={formControl} id="inputPassingYear" className="form-select"
                        name='hscyear'
                        value={data.hscyear}
                        onChange={InputEvent}>
                        <option selected>Choose One</option>
                        <option >2020</option>
                        <option >2021</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <label for="inputBoard" className="form-label">Board</label>
                        <select required style={formControl} id="inputBoard" className="form-select"
                        name='hscboard'
                        value={data.hscboard}
                        onChange={InputEvent}>
                        <option selected>Choose One</option>
                        <option >Dhaka</option>
                        <option >Rajshahi</option>
                        <option >Chattogram</option>
                        <option >...</option>
                        </select>
                    </div>

                    
                    <div className="col-md-8">
                        <label for="inputPreferredSubject4" className="form-label">Prefered Subjects</label>
                        <input required style={formControl} type="text" className="form-control" id="inputPreferredSubject4" placeholder="Ex. Computer Science; Software Enginnering; Physics"
                        
                        name='subject'
                        value={data.subject}
                        onChange={InputEvent}/>
                    </div>
                    <div className="col-md-4">
                        <label for="inputUploadImage4" className="form-label">Upload an image</label>
                        <input required style={formControl} className="form-control" type="file" id="formFile"
                        name='file'
                        value={data.file}
                        onChange={InputEvent} />
                    </div>

                    <div className="text-center my-5">
                        
                        <Link to="/ContinueToDashboard">
                        <button  className={Styles.button} type="submit">Continue to Dashboard</button>
                        </Link>
                        
                    </div>
                    </form>
                    </div>
                </div> 
            </div>              
        </div>
    )
}

const formControl = {
    backgroundColor: '#E8E8E8',
    border: '1px solid #E8E8E8'
}
export default Form;
