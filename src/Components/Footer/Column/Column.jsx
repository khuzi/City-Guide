import React from 'react'

const Column = (props) => {
    return (
        <div className={props.colClass}> 
            <h4>Lorem, ipsum.</h4>
            <ul className="list-unstyled">
                <li><a href="/">Lorem, ipsum dolor.</a></li>
                <li><a href="/">Lorem, ipsum dolor.</a></li>
                <li><a href="/">Lorem, ipsum dolor.</a></li>
                <li><a href="/">Lorem, ipsum dolor.</a></li>    
            </ul>            
        </div>
    );
};

export default Column;
