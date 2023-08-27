import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/organisms/Navbar'
import Banner from '@/components/organisms/Banner'
import Products from '@/components/organisms/Products';
import Comments from '@/components/organisms/Comments'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '@/components/organisms/Footer'
import ShoppingCart from '@/components/organisms/ShoppingCart'
import About from '@/components/organisms/About'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [mostrarCarrito, setMostrarCarrito,] = useState(false);
  const [contadorCarrito, setContadorCarrito] = useState(0);

  return (
    <>
     <Head>
        <title>Freshness</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./images/freshness.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@200&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        
        
      </Head>
      <header>
        <Navbar 
          mostrarCarrito={mostrarCarrito} 
          setMostrarCarrito={setMostrarCarrito} 
          contadorCarrito={contadorCarrito}
        />
     </header>
      <main >

      </main>

      <section>      
        <Banner/>
      </section>

      <section id="productos">
        <Products/>
        <ShoppingCart 
          mostrarCarrito={mostrarCarrito} 
          setMostrarCarrito={setMostrarCarrito} 
          contadorCarrito={contadorCarrito} 
          setContadorCarrito={setContadorCarrito}
        />
              
      </section>

      <section id="about">
        <About/>
      </section>

      <section id="comentarios">
        <Comments/>
      </section>

      <footer id="contacto">
        <Footer/>
      </footer>
    </>
  )
}
