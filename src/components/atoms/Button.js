
import React from 'react'

const Button = () => {
  return (
    <>
    <button>Agregar</button>
    <style jsx>{`
    button {
        color: rgb(3, 84, 77);
        background-color:  rgba(173, 227, 115);
        padding: 10px 50px;
        border-radius: 5px;
        font-size: 1rem;
        border: 0;
        transition: 0.3s;
        margin-top: 10px;
        margin-left: 30px;
        font-weight: bold;
        font-family: 'Outfit', sans-serif;
        
    }


    button:hover {
        background-color:  rgb(255, 210, 165);
        color: rgb(255, 129, 38);
    }

    
    `}</style>
    </>
    
  )
}

export default Button