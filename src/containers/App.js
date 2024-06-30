import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { robots } from '../people';  // Importing robots

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: '',
      topCustomer: null
    }
  }

  componentDidMount() {
    this.setState({ robots }, this.findTopCustomer);  // Setting robots from the imported array and finding the top customer
  }

  findTopCustomer = () => {
    const topCustomer = this.state.robots.reduce((max, robot) => 
      robot.spending > max.spending ? robot : max, this.state.robots[0]
    );
    this.setState({ topCustomer });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { robots, searchfield, topCustomer } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>List</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
          {topCustomer && (
            <div>
              <h2>Top Customer</h2>
              <p>Name: {topCustomer.name}</p>
              <p>Total Spending: ${topCustomer.spending}</p>
            </div>
          )}
        </div>
      );
  }
}

export default App;
