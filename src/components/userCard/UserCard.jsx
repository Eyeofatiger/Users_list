import React from 'react';
import './userCard.css';

const UserCard = (props)=> {
    return(
        <div className="card-container">
            <img src={`https://robohash.org/${props.user.id+30}?set=set2`} 
                 alt="UserPhoto"
                 className="user-image" />
            <h2>{props.user.name}</h2>
        </div>
    );
};

export default UserCard;