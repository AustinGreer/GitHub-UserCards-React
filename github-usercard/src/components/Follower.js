import React, { Component } from 'react'

class Follower extends Component {
    render() {
        console.log(this.props.follower)
        return (
            <div>
                <h4>{this.props.follower.login}</h4>
                <img 
                    src={this.props.follower.avatar_url}
                    style={{width: '200px', borderRadius: '80px'}}
                ></img>
            </div>
        )
    }
}

export default Follower;