import React from 'react'
import styled from 'styled-components'
import { Person } from '../atoms/Person'

const Comments = () => {
  return (
    <Comment>
      <div>
        <Title className="section-title">¿Qué dicen nuestros clientes?</Title>
      </div>
      <Person>
      
      </Person>
    </Comment>
  )
}

export default Comments


const Comment = styled.div`
background-color: white;
min-height: auto;
font-size: 28px;
font-style: normal;
text-align: center;
color: black;
font-family: 'Lexend Exa', sans-serif;
font-weight: 700;
padding-top: 50px;
padding-bottom: 50px;

`


const Title = styled.h2`
margin-top: 10px;
`