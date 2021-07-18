import React, { Component } from 'react'
import axios from 'axios';

import SearchUser from './components/SearchUser'
import User from './components/User'
import Followers from './components/Followers'

class App extends Component {
  state = {
    user: {},
    followers: [],
    inputValue: ''
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/AustinGreer')
    .then(res => {
      this.setState({
        user:res.data
      })
    })
    .catch(err => console.log('error here', err))

    axios.get('https://api.github.com/users/AustinGreer/followers')
    .then(res => {
      this.setState({
        followers: res.data
      })
    })
    .catch(err => console.log(err))
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    // this axios call allows you to search and return specific user
    axios.get(`https://api.github.com/users/${this.state.inputValue}`)
    .then(res => {
      console.log(res.data)
      this.setState({
        user: res.data
      })
    })
    .catch(err => console.log(err))

    // this .get method will return the users followers
    axios.get(`https://api.github.com/users/${this.state.inputValue}/followers`)
    .then(res => {
      this.setState({
        followers: res.data
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className='app'>
        <h1>Github UserCards</h1>
        <SearchUser
          inputValue={this.state.inputValue}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <User user={this.state.user} />
        <Followers followers={this.state.followers} />
      </div>
    )
  }
}

export default App;