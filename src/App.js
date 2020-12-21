import React from 'react';
import './App.css';
import List from './List';

//How should I have know that App requires a Class?  I assume it is from the knot of
//Props and needing a static defaultProps, but unsure


class App extends React.Component {
  render() {
    //how does this relate to index.js, to store up above
    const { store } = this.props;
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
            />
          ))}
        </div>
      </main>
    )
  }
}

export default App;
