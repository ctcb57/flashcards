import React from 'react';
import CollectionCard from '../collection-card/collection-card.component';
import './cards-list.styles.css';

const CardsList = ({ collections, setActiveCollection }) => {
    const collectionList = collections.map((collection) => {
        return(
            <CollectionCard
                key={collections.id}
                setActiveCollection={setActiveCollection}
                collection={collection}
            />
        );
    });
    return <div className="ui one stackable cards">{collectionList}</div>
}
export default CardsList;