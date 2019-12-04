import React from 'react';
import CardsList from '../cards-list/cards-list.components';
import ActiveCard from '../active-card/active-card.component';
import DATA from './cards-collection.data';

import './cards-container.styles.css';

class CardsContainer extends React.Component{
    constructor(){
        super();

        this.state={
            collections: DATA,
            currentCollection: [],
            activeCard: [],
            currentCard: 0,
            totalCards: null,
            cardIndex: null
        }
    }


    setActiveCollection = collection => {
        this.setState({ 
            activeCard: [collection.items[0].term, collection.items[0].definition],
            currentCard: collection.items[0].id,
            totalCards: collection.items.length,
            currentCollection: collection
         })
    }

    setNextCard = currentCard => {
        this.setState({
            currentCard: currentCard + 1
        });
    }

    render(){
        const {collections, activeCard, currentCard, totalCards} = this.state;
        console.log(collections);
        console.log(this.state.currentCard);
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
                        <button>Previous Card</button>
                    </div>
                    <div className="two wide column"> {this.state.currentCard} / {totalCards} </div>
                    <div className="four wide column">
                        <button
                            onClick={() => this.setNextCard(currentCard)}
                            >Next Card
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}


export default CardsContainer;