
import React from 'react'
import Card from '../atoms/Card'

const Db = []

const CardsList = () => {
  return (
    <section>
      <i><h2>Ofertas de la Semana</h2></i>  
      {
        Db.map(card => <Card
          key={card.id}
          data={card}
        />)
      }

      <style jsx> {`
    section {
      font-family: 'Outfit', sans-serif;
      display: flex;
      justify-content:center;
      justify-content:space-around;
      padding-left: 50px;
      padding-bottom: 50px;
      background-color: white;
      flex-wrap:wrap;
      flex-grow:1;
      flex-basis: 20 rem;
      
  
      }

    
     
    `}

      </style>
    </section>
  )
}

export default CardsList