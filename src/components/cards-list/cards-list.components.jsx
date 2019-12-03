import React from 'react';
import CollectionCard from '../collection-card/collection-card.component';
import './cards-list.styles.css';

const CardsList = props => {
    // console.log(props);
    return <CollectionCard key={props} id={props.collections}/>
}
export default CardsList;