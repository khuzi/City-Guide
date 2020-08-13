import React , { useContext }  from 'react'
import { Link } from 'react-router-dom';

import { InfoContext } from '../../Container/Context/Context';

const Card = (props) => {
    const value = useContext(InfoContext);
    const {
        id,
        headerTitle,
        headerSubTitle,
        headerText,
        img
    } = props.item
    return (
        <div className="container col-12 col-lg-4 mx-auto col-md-6 mb-5" style={{display: 'flex' , alignItems: 'center' , justifyContent: 'center'}}>
            <div className="card" style={{width: '18rem'}}>
                <img src={img} alt="" className="card-img-top"/>
                <div className="card-body">
                    <h3 className="card-title text-uppercase">{headerTitle}</h3>
                    <h5 className="card-title">{headerSubTitle}</h5>
                    <p className="card-text">{headerText}</p>
                    <Link onClick={() => value.handleDetail(id)} to="/details" className="btn btn-outline-primary">More Info</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
