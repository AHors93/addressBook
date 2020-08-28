import React from 'react';
import './App.css';
import BookItems from './BookItems/BookItems'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      number: null,
      list: []
    }
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    })
  }
  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    })
  }
  handleNumber = (e) => {
    this.setState({
      number: e.target.value,
    })
  }

  addUsers = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:7000/addressbook/v1/address', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        number: this.state.number
      })
    })
    const data = await response.json();
    console.log(data);
  };

  componentDidMount = async () => {
    await fetch('http://localhost:7000/addressbook/v1/users')
      .then(response => response.json())
      .then(data => this.setState({ list: data.data }));
  };


  render() {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem} method='POST'>
            <input type="text" placeholder="Enter name" onChange={this.handleName}></input>
            <input type="text" placeholder="Enter email" onChange={this.handleEmail}></input>
            <input type="text" placeholder="Enter number" onChange={this.handleNumber}></input>
            <button type="submit" id='btn' onClick={this.addUsers}>Add</button>
          </form>

          {/* <BookItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate} /> */}
          <div>
            {this.state.list.map(item => {
              return <li>{item.name}, {item.email}, {item.number}</li>
            })}
          </div>
        </header>
      </div>
    );
  }
};


export default App;
