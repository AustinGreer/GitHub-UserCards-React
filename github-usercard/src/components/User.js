import React, { Component } from 'react';
import styled from 'styled-components';

class User extends Component {
    render() {
        return (
            <StyledUser>
                <h2>Username: {this.props.user.login}</h2>
                <img 
                    src={this.props.user.avatar_url}
                    style={{width: '250px', borderRadius: '80px'}}
                ></img>
                <h3>Followers: {this.props.user.followers}</h3>
                <h3>Following: {this.props.user.following}</h3>
                
            </StyledUser>
        )
    }
}

const StyledUser = styled.div`
    border-radius: 10%;
    width: 25%;
    margin-top: 5%;
    margin-bottom: 5%;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export default User;