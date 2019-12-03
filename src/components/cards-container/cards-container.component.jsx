import React from 'react';
import CardsList from '../cards-list/cards-list.components';
import ActiveCard from '../active-card/active-card.component';

import './cards-container.styles.css';

function CardsContainer(){
    return(
        <div className="ui rasied very padded text container segment">
            <div className="ui grid">
                <div className="six wide column">
                    <CardsList />
                </div>
                <div className="ten wide column">
                    <ActiveCard />
                </div>
            </div>
        </div>
    );
}

export default CardsContainer;