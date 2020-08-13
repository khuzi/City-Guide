import React , { useContext } from 'react'
import styled from 'styled-components';

import Review from './Review/Review';
import { InfoContext } from '../../../Container/Context/Context';


const Details = () => {
    const value = useContext(InfoContext);
    const data = {
        ...value.detailInfo
    }
    return (
        <React.Fragment>
            <HeaderDetails className="container-fluid align-items-center">
                <h1 className="display-1 font-weight-bold">
                    {data.headerTitle}
                </h1>
                <h4 className="display-5">{data.headerSubTitle}</h4>
                <p>{data.headerText}</p>
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-2">
                            <i className="fa fa-facebook-official"/>
                        </div>
                        <div className="col-2">
                            <i className="fa fa-twitter"/>
                        </div>
                        <div className="col-2">
                            <i className="fa fa-google-plus"/>
                        </div>
                        <div className="col-2">
                            <i className="fa fa-reddit"/>
                        </div>
                        <div className="col-2">
                            <i className="fa fa-whatsapp"/>
                        </div>
                        <div className="col-2">
                            <i className="fa fa-instagram"/>
                        </div>
                    </div>
                </div>
            </HeaderDetails>
            <div className="container">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a href="#aboutPlace" className="nav-link active" role="tab" data-toggle="tab">About Place</a>
                    </li>
                    <li className="nav-item">
                        <a href="#reviews" className="nav-link" role="tab" data-toggle="tab">Reviews</a>
                    </li>
                    <li className="nav-item">
                        <a href="#map" className="nav-link" role="tab" data-toggle="tab">Map</a>
                    </li>
                </ul>
                <div className="tab-content mb-5">
                    <div id="aboutPlace" className="tab-pane in active text-center mt-5" role="tabpanel">
                        <h2 className="mb-3">{data.title}</h2>
                        <p>{data.description}</p>
                        <img src={data.img} alt={data.title} className="img-thumbnail img-fluid"/>
                    </div>
                    <div id="reviews" className="tab-pane" role="tabpanel">
                        <Review />
                    </div>
                    <div id="map" className="tab-pane" role="tabpanel">
                        <iframe src={data.maps} 
                        title={data.title}
                        style={{border: '0', 
                        height: '28.125rem', 
                        width: '100%',
                        frameBorder: '0'}} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Details

const HeaderDetails = styled.header`
background: linear-gradient(rgba(109,109,109), rgba(255,255,255));
height: auto;
text-transform: uppercase;
text-align: center;
color: var(--mainDark);
margin-bottom: 60px;
width: 100%;

h1{
    padding-top: 10%;
}

p{
    padding:  0 10%;
    margin-bottom: 10%;
}

i{
    font-size: 1.875rem;
    cursor: pointer;
    transition: all 0.2s ease-in;
}

i:hover {
    color: teal;
}

@media(max-width: 390px) {
    h1 {
        font-size: 40px !important;
    }
    h4 {
        font-size: 20px !important;
    }
    p {
        font-size: 15px !important;
    }
}

`;