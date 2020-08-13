import React , { useContext } from 'react'

import { InfoContext } from '../../../Container/Context/Context';
import Card from '../../Card/Card';

const Home = () => {
    const value = useContext(InfoContext); 
    return (
        <div className="container">
            <div className="row mt-5">
                {value.info.map(item => <Card key={item.id} item={item}/>)}
            </div>
        </div>
    );
};

export default Home;
