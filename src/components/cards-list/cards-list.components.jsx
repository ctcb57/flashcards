import React from 'react';
import CollectionCard from '../collection-card/collection-card.component';
import './cards-list.styles.css';

const CardsList = props => {
    const titles = props.titles.map((title) => {
        return <CollectionCard key={title.id} title={title} />
    })
    return <div className="ui one stackable cards">{titles}</div>
};


export default CardsList;