import React from 'react';
import './collection-card.styles.css';

const CollectionCard = props =>{
    const collections = props.id;
    const titles = collections.map((title) => {
        return <div key={title.id}>
            <p>{title.title}</p>
        </div>
    });
    console.log(titles);
    return <div>{titles}</div>
}

export default CollectionCard;