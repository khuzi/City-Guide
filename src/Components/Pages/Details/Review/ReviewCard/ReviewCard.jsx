import React  from 'react'

const ReviewCard = (props) => {
   
    const  {
        avatar,
        name,
        comment
    } = props.item;
    return (
        <div>
            <div className="media mt-5">
                <img src={avatar} alt={name} style={{width: '40px'}}/>
                <div className="media-body ml-3">
                    <h5>{name}</h5>
                    <p>{comment}</p>
                </div>
            </div>            
        </div>
    );
};

export default ReviewCard;
