import React from 'react';
import './style/style.css';
import './style/reset.css';
import TickerForm from './components/TickerForm';
import TickerResults from './components/TickerResults';
import Favorites from './components/Favorites';
import Header from './components/Header';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      favorites: [],
      stocks: []
    }

    this.addFav = this.addFav.bind(this);
  }


  addFav  ()  {
    let currStock = this.state.stocks[0]
    const { favorites } = this.state;
    if (!this.state.favorites.includes(currStock)) {
      this.setState({
        favorites: [...favorites, currStock],
        stocks: []
      });
    }
  }

  searchStock = (ticker) => {
    fetch(`https://api.worldtradingdata.com/api/v1/stock?symbol=${ticker}&api_token=KxSIWgnjMFtIc29nOXttz5OP6TO85ucq6lthYABRosHpMEzRBePJvewX7zZg`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          stocks: [data.data[0]]
        });
      })
  }


  render () {
    return (
      <div className="App">
          <Header />
          <TickerForm addFav={ this.addFav }
                      searchStock={ this.searchStock } 
          />
          <section className="stock-info">
            <div className="search">
              <h2>Search Results</h2>
              <TickerResults addFav={ this.addFav } stocks={ this.state.stocks } />
            </div>
            <div className="favorites">
              <h2>Favorites</h2>
              <Favorites favs={ this.state.favorites } />
            </div>
          </section>
      </div>
    );
  }
}

export default App;
