import React, { Component } from 'react'
import axios from 'axios';

import SearchUser from './components/SearchUser'
import User from './components/User'
import Followers from './components/Followers'

class App extends Component {
  state = {
    user: {},
    followers: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/AustinGreer')
    .then(res => {
      console.log(res.data)
      this.setState({
        user:res.data
      })
    })
    .catch(err => console.log('error here', err))

    axios.get('https://api.github.com/users/AustinGreer/followers')
    .then(res => {
      console.log('followers', res.data)
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
        <SearchUser />
        <User user={this.state.user} />
        <Followers followers={this.state.followers} />
      </div>
    )
  }
}

export default App;