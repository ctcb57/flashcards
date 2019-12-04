import React from 'react';
import './collection-card.styles.css';

const CollectionCard = ({ collection, setActiveCollection }) =>{
    return(
        <div onClick={() => setActiveCollection(collection)} className="ui card" id="collectionCard">
            <div className="content">
                <div className="header">{collection.title}</div>
            </div>
        </div>
    )
}

export default CollectionCard;