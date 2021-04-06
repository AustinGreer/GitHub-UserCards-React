import React, { Component } from 'react'
import Follower from './Follower'

class Followers extends Component {
    render() {
        return (
            <div>
                {this.props.followers.map(follower => {
                    return <Follower key={follower.id} follower={follower} />
                })}
            </div>
        )
    }
}

export default Followers;