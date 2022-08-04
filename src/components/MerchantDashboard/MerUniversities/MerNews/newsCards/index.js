import React from 'react'
import { NavLink } from 'react-router-dom';
const NewsCards = (props) => {
    return (
        <div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                            <h5 class="card-title">{props.title}</h5>
                            <p class="card-text">{props.news}</p>
                        <NavLink to="" class="btn btn-primary">Read More...</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsCards;
