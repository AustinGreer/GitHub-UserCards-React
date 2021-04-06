import React, { Component } from 'react'

class SearchUser extends Component {
    render() {
        return (
            <div>
                <form>
                    <input
                        type='text'
                        name='search-user'
                        placeholder='search for github user'
                    />
                    <button>Search</button>
                </form>
            </div>
        )
    }
}

export default SearchUser;