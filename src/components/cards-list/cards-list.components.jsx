import React from 'react';
import CollectionCard from '../collection-card/collection-card.component';
import './cards-list.styles.css';

function CardsList(){
    return(
        <div className="ui one stackable cards">
            <CollectionCard/>
            <CollectionCard/>
            <CollectionCard/>
        </div>
        
    );
}

export default CardsList;