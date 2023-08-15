
import React from 'react'
import Card from '../atoms/Card'

const Db = [
  {
    id: 1,
    img: "https://img.freepik.com/fotos-premium/aguacate-aislado-blanco_62856-4854.jpg",
    title: "Palta",
    precio: "$2.590",
  },
  {
    id: 2,
    img: "https://cdnx.jumpseller.com/newen-verde1/image/33398731/resize/1280/1280?1679678128",
    title: "Tomate",
    precio: "$679",
  },
  {
    id: 3,
    img: "https://www.novaplaza.com.pe/wp-content/uploads/2023/02/Mesa-de-trabajo-2-11.jpg",
    title: "Uva",
    precio: "$663",

  },
  {
    id: 4,
    img: "https://mlcvkocrfpoo.i.optimole.com/w:1200/h:1200/q:mauto/rt:fill/g:ce/el:1/f:avif/https://www.ecooperativas.com/wp-content/uploads/2021/02/naranja-de-campo.jpg",
    title: "Naranja",
    precio: "$700",
    

  },
  {
    id: 5,
    img: "https://tofuu.getjusto.com/orioneat-prod/jvkzb3y6tvAJcf7Dq-H-Oregano-Albahaca.png",
    title: "Pan",
    precio: "$450",

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
      font-family: 'Outfit', sans-serif;
      display: flex;
      justify-content:center;
      justify-content:space-around;
      padding-left: 50px;
      padding-top: 80px;
      padding-bottom: 50px;
      background-color: white;
      display: grid;
      grid-template-columns: repeat(
        auto-fit,
        minmax(150px,1fr))

      }

     
    `}

      </style>
    </section>
  )
}

export default CardsList