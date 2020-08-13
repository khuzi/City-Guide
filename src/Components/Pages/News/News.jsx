import React , { useContext } from 'react'

import { InfoContext } from '../../../Container/Context/Context';
import NewsCard from './NewsCard/NewsCard';

const News = () => {
  const value = useContext(InfoContext);
    return (
        <div className="container">
            {value.news.map(item=> <NewsCard key={item.id} item={item}/>)}       
        </div>
    )
}

export default News
