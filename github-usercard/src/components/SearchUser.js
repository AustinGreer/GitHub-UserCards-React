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

    render() {
        return (
            <div>
                <form>
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