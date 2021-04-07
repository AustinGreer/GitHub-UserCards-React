import axios from 'axios'
import React, { Component } from 'react'

class SearchUser extends Component {
    state = {
        inputValue: ''
    }

    handleInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleSubmit = (event) => {        
        axios.get(`https://api.github.com/users/${this.state.inputValue}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    componentDidUpdate() {
        this.handleSubmit()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.componentDidUpdate}>
                    <input
                        type='text'
                        name='search-user'
                        placeholder='search for github user'
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                    />
                    <button>Search</button>
                </form>
            </div>
        )
    }
}

export default SearchUser;