import React from 'react';
import './collection-card.styles.css';

const CollectionCard = props =>{
    const collections = props.id;
    const titles = collections.map((title) => {
        return(
            <div className="ui card" key={title.id} id="collectionCard">
                <div className="content">
                    <div className="header">{title.title}</div>
                </div>
            </div>
        ) ;
    });
    return(
        <div>{titles}</div>
    );
}

export default CollectionCard;