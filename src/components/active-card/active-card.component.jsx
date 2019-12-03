import React from 'react';
import './active-card.styles.css';

function ActiveCard(){
    return(
        <div className="ui card">
            <div className="content">
                <div className="center aligned header">Card Title</div>
                <div className="center aligned description">
                    <p>This is the definition</p>
                </div>
            </div>
        </div>
    );
}

export default ActiveCard;