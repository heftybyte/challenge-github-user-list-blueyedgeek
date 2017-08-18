import React, { Component } from 'react';
import fetchGithubUser from './utils/githubFetch';
import UserList from './Components/UserList';
import './App.css';

const mapToUsersArr = (str) => {
  return str.replace(/\s+/g, '').split(',');
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
      usersTofetch: [],
      showUserList: false,
      githubUsers: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  updateUserList(users) {
    let result = [];

    users.forEach((user) => {
      fetchGithubUser(user).then((val) => {
        result.push(val);
        this.setState(() => ( { githubUsers: result } ))
      });

    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let users = mapToUsersArr(this.state.userInput);

    this.setState(() => ({usersTofetch: users, showUserList: true}), () => {
      this.updateUserList( this.state.usersTofetch );
    });
  }

  handleInputChange() {
    let inputValue = this.refs.userList.value;

    this.setState(() => ({userInput: inputValue}));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>
            Github user list
          </h1>
        </div>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref="userList"
            value={this.state.userList}
            onChange={this.handleInputChange}
            placeholder="enter username here"
            required
          />
          <button>Fetch</button>
        </form>

        <section className="User-list">
          {this.state.showUserList && <UserList users={this.state.githubUsers} />}
        </section>
      </div>
    );
  }
}

export default App;
