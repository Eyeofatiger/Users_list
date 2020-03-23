import React, {Component} from 'react';
import './App.css';
import CardList from '../cardList/CardList';
import SearchBox from '../searchBox/searchBox';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      users:[],
      search: ""
    };
  };

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(data=>this.setState({users: data}));
  }

  onSearchData = (event)=>{
    const searchData = event.target.value;
    this.setState(()=>{
      return{
        search: searchData
      };
    });
  }

  render(){
    const {users, search} = this.state;
    const existUsers = users.filter((user)=>{
      return user.name.toLowerCase().includes(search.toLowerCase());
    });

    return (
      <div className="App">
        <h1>List of users</h1>
        <SearchBox onSearchHandler={this.onSearchData} placeholder="Search..." />
        <CardList users={existUsers} />          
      </div>
    );
  }
}