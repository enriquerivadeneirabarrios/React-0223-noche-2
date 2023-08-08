import React from 'react'
import styled from 'styled-components'

export const Person = () => {
  return (
    <><Persons>
        <figure>
            <img src="https://cdn-icons-png.flaticon.com/512/3532/3532704.png" class="Ana"/>
            <img src="https://cdn-icons-png.flaticon.com/512/2922/2922716.png" class="Leo"/>
            <img src="https://cdn-icons-png.flaticon.com/512/2922/2922644.png" class="Lucia"/>
            <img src="https://cdn-icons-png.flaticon.com/512/2922/2922627.png" class="Angel"/>
          </figure>
        <div class="reviews">
          <div class="reviews-slide">
            <div class="review-person">
              <h2 class="name">Ana Iriarte</h2>
            </div>
            <hr  style={{
                color: '#ffffff',
                backgroundColor: '#ffffff',
                height: 3,
                borderColor : '#ffffff'
            }}/>
            <div class="review-info">
              <h3 class="titulo-review">Excelente servicio</h3>
              <div class="stars">
                <img src="https://i.pinimg.com/564x/37/3b/8c/373b8c3fff1721eca5b8276a53c71b67.jpg"/>
              </div>
              <p class="descripcion-review">
                Superó mis expectativas, los productos son frescos,
                grandes y convenientes para el bolsillo. 
                Freshness es definitivamente una buena opción</p>
            </div>
          </div>

          <div class="reviews-slide">
            <div class="review-person">
              <h2 class="name">Leo Garcia</h2>
            </div>
            <hr  style={{
                color: '#ffffff',
                backgroundColor: '#ffffff',
                height: 3,
                borderColor : '#ffffff'
            }}/>
            <div class="review-info">
              <h3 class="titulo-review">Excelente servicio</h3>
              <div class="stars">
                <img src="https://i.pinimg.com/564x/37/3b/8c/373b8c3fff1721eca5b8276a53c71b67.jpg"/>
              </div>
              <p class="descripcion-review">
                Increible e Impecable la atención este supermecado.
                Sus productos son excelentes, me encanta.
                ¡Siempre que puedo los recomiendo!</p>
            </div>
          </div>

          <div class="reviews-slide">
            <div class="review-person">
              <h2 class="name">Lucia Alvarez</h2>
            </div>
            <hr  style={{
                color: '#ffffff',
                backgroundColor: '#ffffff',
                height: 3,
                borderColor : '#ffffff'
            }}/>
            <div class="review-info">
              <h3 class="titulo-review">Excelente servicio</h3>
              <div class="stars">
                <img src="https://i.pinimg.com/564x/37/3b/8c/373b8c3fff1721eca5b8276a53c71b67.jpg"/>
              </div>
              <p class="descripcion-review">
              Me encantó comprar aquí, variedad de productos, a buen precio, envio rápido, 
              ordenado y expedito !! Lo recomiendo totalmente</p>
            </div>
          </div>

          <div class="reviews-slide">
            <div class="review-person">
              <h2 class="name">Miguel Angel</h2>
            </div>
            <hr  style={{
                color: '#ffffff',
                backgroundColor: '#ffffff',
                height: 3,
                borderColor : '#ffffff'
            }}/>
            <div class="review-info">
              <h3 class="titulo-review">Excelente servicio</h3>
              <div class="stars">
                <img src="https://i.pinimg.com/564x/37/3b/8c/373b8c3fff1721eca5b8276a53c71b67.jpg"/>
              </div>
              <p class="descripcion-review">
              Realmente 100% recomendado. Los productos son frescos y
              bien conservados. Una belleza de lugar. Además, sus entregas son rápidas</p>
            </div>
          </div>

        </div> 
        <styles/>

      </Persons>
      </>
  )
}


const Persons = styled.figure`
margin-top: 10px;
color: black;
font-size: 16px;
font-family: "Outfit",sans-serif;
`