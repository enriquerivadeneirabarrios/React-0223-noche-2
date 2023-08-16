import React from 'react'
import styled from 'styled-components'


const AboutUs = () => {
  return (
    <>
      <About>
        <Container>
          <Box>
              <Title>
                <h1>About Us</h1>
              </Title>
              <Paragraph> 
                <p>Desde el año 1982 brindándoles el mejor servicio
    y por ustedes estamos en todo América para nuestros clientes.
    Hoy para tu mayor comodidad te presentamos nuestra página para 
    facilitarte así tus compras. Lo que compres te lo enviamos de tu casa para tu mayor comodidad y disfrute. Para nuestros clientes muy amables por habernos escogido a nosotros, muy amables por nuestro crecimiento </p>

              </Paragraph>
              <Button> Read more
              
              </Button>

            </Box>
            <Image>
            <img className="image" src="./images/aboutus.jpg" height="340px" width= "450px"  alt="about us"/>
            </Image>
          
        </Container>
      </About>
    </>

  )
}

export default AboutUs

const About = styled.div`
width: 100%;
min-height: 100vh;
background-color: white;

`

const Container = styled.div`
width: 80%;
display: block;
margin:auto;
padding-top: 100px

`
const Box = styled.div`
float:left;
width: 55%;

`
const Image = styled.picture`
float:right;
width: 40%;

`

const Title = styled.div`
text-trasform: uppercase;
font-size: 28px;
margin-top: 20px;
color: black;

`
const Paragraph = styled.div`
margin-top: 10px;
font-family:; 
font-size: 18px;
line-height: 1.5;
`


const Button = styled.button`
background-color: rgb(247, 148, 0);
border: 1px solid transparent;
padding: 10px 35px;
color: rgb(195, 77, 25);
font-size: 25px;
letter-spaxing: 1.5px;
margin-top:30px;
border-radius: 5px;

:hover: background-color: red;`