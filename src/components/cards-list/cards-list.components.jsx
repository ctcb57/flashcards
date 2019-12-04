import React from 'react';
import CollectionCard from '../collection-card/collection-card.component';
import './cards-list.styles.css';

const CardsList = ({ collections, setActiveCollection }) => {
    const collectionList = collections.map((collection) => {
        return(
            <CollectionCard
                setActiveCollection={setActiveCollection}
                collection={collection}
                key={collection.id}
            />
        );
    });
    return <div className="ui one stackable cards">{collectionList}</div>
}
export default CardsList;