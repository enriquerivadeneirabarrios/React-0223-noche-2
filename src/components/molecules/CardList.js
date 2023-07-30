
import React from 'react'
import Card from '../atoms/Card'

const Db = [
  {
    id: 1,
    img: "https://s3.amazonaws.com/assets.lavegadelivery.cl/web-dist/fotos/productos/54/webp/kiwi_1_kg_9538_1200x1200.webp",
    title: "Kiwi",
    precio: "$980",
  },
  {
    id: 2,
    img: "https://s3.amazonaws.com/assets.lavegadelivery.cl/web-dist/fotos/productos/60/webp/manzana_fuji_6495_1200x1200.webp",
    title: "Manzana",
    precio: "$679",
  },
  {
    id: 3,
    img: "https://s3.amazonaws.com/assets.lavegadelivery.cl/web-dist/fotos/productos/62/webp/manzana_verde_1_kg_9547_1200x1200.webp",
    title: "Manzana Verde",
    precio: "$663",

  },
  {
    id: 4,
    img: "https://s3.amazonaws.com/assets.lavegadelivery.cl/web-dist/fotos/productos/66/webp/naranja_1_kg_9556_1200x1200.webp",
    title: "Naranja",
    precio: "$700",
    

  },
  {
    id: 5,
    img: "https://s3.amazonaws.com/assets.lavegadelivery.cl/web-dist/fotos/productos/68/webp/platano_verde_1_kg_9557_1200x1200.webp",
    title: "Plátano",
    precio: "$529",

  },
]

const CardsList = () => {
  return (
    <section>
      {
        Db.map(card => <Card
          key={card.id}
          data={card}
        />)
      }

      <style jsx> {`
    section {
      display: flex;
      justify-content:center;
      justify-content:space-around;
      padding-top: 50px;
      padding-bottom: 50px;
      background-color: white;
      }

     
    `}

      </style>
    </section>
  )
}

export default CardsList