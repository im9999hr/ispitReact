import React, { Component } from 'react';
import EnterUser from "./EnterUser";
import UserRepos from "./UserRepos";
import './App.css';

const MAIN = "MAIN",
  REPOS = "REPOS",
  userURI = "https://api.github.com/users/",
  repoURIend = "/repos" ;
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: MAIN,
      user: "",
      userData: {},
      userRepos: [],
    };
  }
  
  handleUserChange = e => {
    const trimStart = e.target.value.trimStart();
    this.setState({user: trimStart});
  };

  handleUserSubmit = u => {
    fetch(userURI + u)
    .then(response => this.handleSuccess(response))
    .then(data => this.handleUserData(u, data))
    .catch(err => console.error(err))
  }

  handleUserData = (user, data) => {
    this.setState({
      page: REPOS,
      user: user,
      userData: data,
    });
    fetch(userURI + user + repoURIend)
    .then(response => this.handleSuccess(response))
    .then(rData => this.setState({userRepos: rData}))
    .catch(err => console.error(err))
  };

  handleSuccess = function(response) {
    const status = response.status;
    if (status < 200 || status > 299) {
      throw new Error("unexpected response status: " + status);
    }
    return response.json();
  }

  handleReset = () => {
    this.setState({
      page: MAIN,
      user: "",
      userData: {},
      userRepos: [],
    });
  };

  render() {
    const {page, user, userData, userRepos} = this.state;
    let pageDisplay = <div></div>;
    switch (page) {
      case MAIN:
        pageDisplay = <EnterUser user = {user} onUserChange = {this.handleUserChange} onUserSubmit = {this.handleUserSubmit}/>;
        break;
      case REPOS:
        pageDisplay = <UserRepos data = {userData} repos = {userRepos} onReset = {this.handleReset}/>;
        break;
      default:
        pageDisplay = <div style={{color:"red"}}>Something is wrong</div>;;
        break;
    }
    return (
      <div className="App">
        {pageDisplay}
      </div>
    );
  }
  
}

export default App;
