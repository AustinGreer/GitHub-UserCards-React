import React, { Component } from 'react';
import Follower from './Follower';
import styled from 'styled-components';

class Followers extends Component {
    render() {
        return (
            <StyledDiv>
                {this.props.followers.map(follower => {
                    return (
                    
                        <Follower  follower={follower} />
                    
                    )
                })}
            </StyledDiv>
        )
    }
}

const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
`

export default Followers;