import React, { Component } from 'react';
import { FaInstagram, FaUser, FaHeartO, FaCompass, FaSearch } from 'react-icons/lib/fa';
import styled from 'styled-components';

const Nav = styled.div`
      display: flex;
      font-size: 30px;
      font-weight: bold;
      justify-content: space-around;
    `;

const Input = styled.input`
    height: 1em;
    width: 8em;
    padding: 10px;
    margin: 10px;
`;

const Icons = styled.div`
    display: flex;
    justify-content: space-around;
`;

class Navbar extends Component{
  render(){
    return (
        <Nav>
          <h3><FaInstagram/> | Instaclone</h3>
          <FaSearch/>
          <Input type="text"/> 
          <Icons>
            <div>
              <div><FaCompass /></div>
              <div><FaHeartO /></div>
              <FaUser />
            </div>
          </Icons>
        </Nav>
    );
  }
}

export default Navbar