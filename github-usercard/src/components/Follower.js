import React, { Component } from 'react';
import styled from 'styled-components';

class Follower extends Component {
    render() {
        return (
            <StyledFollowers>
                <h4>Username: {this.props.follower.login}</h4>
                <img 
                    src={this.props.follower.avatar_url}
                ></img>
            </StyledFollowers>
        )
    }
}

const StyledFollowers = styled.div`
    border-radius: 10%;
    width: 20%;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3%;

    img {
        width: 50%;
        border-radius: 40%;
        margin-bottom: 5%;
    }
`

export default Follower;