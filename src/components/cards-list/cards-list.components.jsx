import React from 'react';
import CollectionCard from '../collection-card/collection-card.component';
import './cards-list.styles.css';

const CardsList = props => {
    // console.log(props);
    return <div className="ui one stackable cards">
        <CollectionCard key={props} id={props.collections}/>
    </div>
}
export default CardsList;