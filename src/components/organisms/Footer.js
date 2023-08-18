import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components'

class Footer extends Component {
  render() {
    const current_year = new Date().getFullYear();
    return (
        <Container>
            
            <div className='text-center py-4'>
            <Link href="https://campus.academianumen.com/" target="_blank" className='btn btn-link'>
                Privacy
            </Link>
            <span>|</span>
            <Link href="https://campus.academianumen.com/" target="_blank" className='btn btn-link'>
                Terms
            </Link>
            <span>|</span>
            <Link href="https://campus.academianumen.com/" target="_blank" className='btn btn-link'>
                Contact
            </Link>
            <Paragraph>Copyright © {current_year}, ACADEMIA NUMEN. All Rights Reserved.</Paragraph>
            </div>
      </Container>
    );
  }
}

export default Footer;



const Container = styled.div`
display: flex;
flex-direction: column;
height: 20vh;
margin-top:  20vh;

width: 100%;
background:  #76b631;
block-size: auto;
color: #fff;
text-decoration: none;
margin-top: auto;



hover {
  text-decoration: underline;
  color: #519607;}
`

const Paragraph = styled.p`
color: #fff;
color: #fff;
font-size: .7rem;
text-decoration: none;
`










