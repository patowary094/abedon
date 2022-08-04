import React from 'react'
import { NavLink } from 'react-router-dom';
import Fdata from './fakeDatabase/Fdata'
import NewsCards from './newsCards'
import Styles from './css/MerNews.module.css'
const MerNews = () => {
    return (
        <div>
            <div className="container-fluid mb-5">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                        <div className=" row gy-4">
                            {/* {
                                Fdata.map((val, ind) => {
                                    return (
                                        <div className={Styles.styleOne}>
                                            <NewsCards
                                        key={ind}
                                        title={val.title}
                                        news={val.news}
                                    /></div>
                                    )
                                })
                            } */}
                            <div className="col-md-4">
                                <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
                                </div>
                                </div>
                            </div>
                            
                            <div className="col-sm-4">
                                <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
                                </div>
                                </div>
                            </div>
                            
                            <div className="col-md-4">
                                <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
                                </div>
                                </div>
                            </div>
                            
                            <div className="col-md-4">
                                <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
                                </div>
                                </div>
                            </div>
                            
                            <div className="col-md-4">
                                <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
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

export default MerNews;
