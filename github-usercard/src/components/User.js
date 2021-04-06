import React, { Component } from 'react'

class User extends Component {
    render() {
        return (
            <div>
                <h2>Username: {this.props.user.login}</h2>
                <img 
                    src={this.props.user.avatar_url}
                    style={{width: '250px', borderRadius: '80px'}}
                ></img>
                <h3>Followers: {this.props.user.followers}</h3>
                <h3>Following: {this.props.user.following}</h3>
            </div>
        )
    }
}

export default User;