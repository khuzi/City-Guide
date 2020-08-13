import React , { useContext } from 'react'

import ReviewCard from './ReviewCard/ReviewCard';
import { InfoContext } from '../../../../Container/Context/Context';

const Review = () => {
    const value = useContext(InfoContext);
    return (
        <div>
            {value.reviews.map(item=><ReviewCard key={item.id} item={item}/>)}
        </div>
    );
};

export default Review;
