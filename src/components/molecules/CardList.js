
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
      display: flex;
      justify-content:center;
      justify-content:space-around;
      padding-left: 50px;
      padding-top: 50px;
      padding-bottom: 50px;
      background-color: white;
      display: grid;
      grid-template-columns: repeat(
        auto-fit,
        minmax(150px,1fr)
        
      )



      }

     
    `}

      </style>
    </section>
  )
}

export default CardsList