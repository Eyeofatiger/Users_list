import React from 'react';
import './cardList.css';
import UserCard from '../userCard/UserCard';

const CardList = (props)=> {
    return(
        <div className="card-list">
            {props.users.map((user)=>{
            return(
              <UserCard key={user.id} user={user} />
            );
          })}
        </div>
    );
};

export default CardList; 