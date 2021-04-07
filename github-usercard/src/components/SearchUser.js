import axios from 'axios'
import React, { Component } from 'react'

class SearchUser extends Component {
    

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input
                        type='text'
                        name='search-user'
                        placeholder='search for github user'
                        value={this.props.inputValue}
                        onChange={this.props.handleChange}
                    />
                    <button>Search</button>
                </form>
            </div>
        )
    }
}

export default SearchUser;