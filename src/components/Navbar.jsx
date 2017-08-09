import React, { Component } from 'react';
import { FaInstagram, FaUser, FaHeartO, FaCompass, FaSearch } from 'react-icons/lib/fa';
import styled from 'styled-components';

const Nav = styled.div`
      background-color: white;
      display: flex;
      font-weight: bold;
      justify-content: space-between;
      align-items: center;
      p {
        font-size: 40px;
        font-family: 'Oleo Script', cursive;
      }
    `;

const SeachContainer = styled.div`
    background: #fafafa;
    width: 8em;
    padding: 10px;
    margin: 10px;
    input {
      height: 15px;
      text-align: center;
    }
`;

const Icons = styled.div`
    display: flex;
    justify-content: space-around;
    width: 25%;
`;

class Navbar extends Component{
  render(){
    return (
        <Nav>
          <p><FaInstagram/> | Instaclone</p>
          <SeachContainer>
            <FaSearch/><input type="text"/>
          </SeachContainer>
          <Icons>
              <FaCompass size={28} />
              <FaHeartO size={28}/>
              <FaUser size={28}/>
          </Icons>
        </Nav>
    );
  }
}

export default Navbar