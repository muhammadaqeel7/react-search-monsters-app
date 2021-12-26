import React from 'react';
import './App.css';
import { CardList } from './Component/Card-list/Card-list.component';
import { SearchBox } from './Component/Search-box/Search-box.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ' ',
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    //? This is life cycle method
    fetch('https://jsonplaceholder.typicode.com/users') //? API
      .then(response => response.json())
      .then(users => this.setState({ monsters: users })); //? Setting monsters to users api
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state; //? Destructuring
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    ); //? Filtering monsters name

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters Name"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
