
import React from 'react'
import Card from '../atoms/Card'
import {shoppingInitialState} from '../../reducer/shoppingReducer'



const CardsList = ({data,addToCart})=> {

  return (
    <section>
      {
        data.map(card => <Card
          key={card.id}
          data={card}
          OnClick={addToCart}
        />)
      }

      <style jsx> {`
    section {
      font-family: 'Outfit', sans-serif;
      display: flex;
      justify-content:center;
      justify-content:space-around;
      padding-left: 50px;
      padding-top: 80px;
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