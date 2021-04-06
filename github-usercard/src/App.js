import React, { Component } from 'react'
import axios from 'axios';

class App extends Component {
  state = {
    user: '',
    followers: ''
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
  }

  render() {
    return (
      <div>
        <h1>Hello From the App Component</h1>
      </div>
    )
  }
}

export default App;