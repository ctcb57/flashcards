import React from 'react';
import CardsList from '../cards-list/cards-list.components';
import ActiveCard from '../active-card/active-card.component';
import CustomButton from '../custom-button/custom-button.component';
import DATA from './cards-collection.data';

import './cards-container.styles.css';

class CardsContainer extends React.Component{
    constructor(){
        super();

        this.state={
            collections: DATA,
            activeCard: [],
            currentCard: 0,
            totalCards: 0
        }
    }

    setActiveCollection = collection => {
        this.setState({ activeCard: collection })
    }

    render(){
        const {collections, activeCard, currentCard, totalCards} = this.state;
        return(
            <div className="ui rasied very padded text container segment">
                <div className="ui grid">
                    <div className="six wide column">
                        <CardsList 
                            collections={collections} 
                            setActiveCollection={this.setActiveCollection}
                        />
                    </div>
                    <div className="ten wide column">
                        <ActiveCard activeCard={activeCard}/>
                    </div>
                    <div className="six wide column"></div>
                    <div className="four wide column">
                        <CustomButton />
                    </div>
                    <div className="two wide column"> {currentCard} / {totalCards} </div>
                    <div className="four wide column">
                        <CustomButton />
                    </div>
                </div>
            </div>
        )
    }
}


export default CardsContainer;