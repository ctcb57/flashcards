import React from 'react';
import './active-card.styles.css';

const ActiveCard = ({ activeCard }) => {
    return(
       <div className="ui card">
           <div className="content">
               <div className="center aligned header">{activeCard[0]}</div>
               <div className="center aligned description">
                   <p>{activeCard[1]}</p>
               </div>
           </div>
       </div>
    );
}


export default ActiveCard;