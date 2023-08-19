import React from 'react'
import styled from 'styled-components'
import { Person } from '../atoms/Person'

const Comments = () => {
  return (
    <Comment>
      <div>
        <h2 className="section-title">¿Qué dicen nuestros clientes?</h2>
      </div>
      <Person>
      
      </Person>
    </Comment>
  )
}

export default Comments

const Comment = styled.div`
background-color: white;
height: 20vh;
font-size: 24px;
font-style: normal;
text-align: center;
color: #36783d;
font-family: 'Outfit', sans-serif;
font-weight: bold;

@media(max-width:768px){
  height: auto;
 
}



`