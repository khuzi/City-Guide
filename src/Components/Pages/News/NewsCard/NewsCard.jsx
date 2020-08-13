import React from 'react'
import { Link } from 'react-router-dom';

const NewsCard = (props) => {
    const {
        id , newsTitle , newsText
    } = props.item;
    return (
        <div className="card mt-2 mb-3 p-5"  style={{borderColor: 'var(--mainLightGrey)'}}>
            <div className="card-body">
                <h5 key={id} className="card-title">{newsTitle}</h5>
                <p className="card-text">{newsText}</p>
                <Link className="card-link" to="/">Read more &gt;&gt;</Link>
            </div>
        </div>
    )
}

export default NewsCard;
