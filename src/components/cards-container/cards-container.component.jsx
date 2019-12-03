import React from 'react';
import CardsList from '../cards-list/cards-list.components';
import ActiveCard from '../active-card/active-card.component';
import DATA from './cards-collection.data';

import './cards-container.styles.css';

class CardsContainer extends React.Component{
    constructor(){
        super();

        this.state={
            collections: DATA
        }
    }

    render(){
        const {collections} = this.state;
        return(
            <div className="ui rasied very padded text container segment">
                <div className="ui grid">
                    <div className="six wide column">
                        <CardsList collections={collections}/>
                    </div>
                    <div className="ten wide column">
                        <ActiveCard />
                    </div>
                </div>
            </div>
        )
    }
}


export default CardsContainer;