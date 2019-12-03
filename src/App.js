import React from 'react';
import CardsContainer from './components/cards-container/cards-container.component';
import PageHeader from './components/page-header/page-header.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <PageHeader />
      <CardsContainer />
    </div>
  );
}

export default App;
