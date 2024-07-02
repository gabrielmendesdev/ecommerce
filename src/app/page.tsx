'use client'

import { NavbarComponent } from './components/Navbar'
import { CarrouselComponent } from './components/Carrousel'
import { useState } from 'react'
import StoreComponent from './components/Store'

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0)

  const colors = [
    'rgb(0, 0, 91)',
    'rgb(0, 0, 91)',
    'rgb(0, 0, 91)',
    'rgb(0, 0, 91)',
    'rgb(0, 77, 255)',
    'rgb(219, 101, 55)'
  ]

  return (
    <div
      style={{ backgroundColor: `${colors[activeIndex]}`, transition: '0.5s' }}
    >
      <NavbarComponent />
      <CarrouselComponent onSlideChange={setActiveIndex} />
      <StoreComponent />
    </div>
  )
}
