import React , { useState } from 'react'

import { placeInfo , reviews , detailInfo , news  } from '../../data';

export const InfoContext = React.createContext();

const Context = (props) => {
   
    const [state,setState] = useState({
        info: placeInfo,
        reviews: reviews,
        detailInfo: detailInfo,
        news: news,
    })
    
    const handleDetail = (id) => {
        const item = state.info.find(item => item.id === id);
        setState({
            ...state,
            detailInfo: item            
        })
    }
    return (
        <InfoContext.Provider value={{
            info: state.info,
            reviews: state.reviews,
            detailInfo: state.detailInfo,
            news: state.news,
            handleDetail: handleDetail     
        }}>
            {props.children}
        </InfoContext.Provider>
    );
};

export default Context;
