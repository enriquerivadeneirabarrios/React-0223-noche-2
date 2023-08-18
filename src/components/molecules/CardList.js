
import React from 'react'
import Card from '../atoms/Card'

const Db = []

const CardsList = () => {
  return (
    <section>
      {
        Db.map(card => <Card
          key={card.id}
          data={card}
        />)
      }

    </section>
  )
}

export default CardsList