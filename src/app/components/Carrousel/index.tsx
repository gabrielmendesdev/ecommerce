import { Carousel } from 'flowbite-react'
import * as Assets from './assets'
import Image from 'next/image'
import './styles.scss'

export function CarrouselComponent({ onSlideChange }: any) {
  const images = [
    Assets.Image1,
    Assets.Image2,
    Assets.Image3,
    Assets.Image4,
    Assets.Image5,
    Assets.Image6
  ]

  const handleSlideChange = (index: number) => {
    onSlideChange(index)
  }

  //add push

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 container m-auto border-0">
      <Carousel
        className="rounded-none"
        onSlideChange={(index) => handleSlideChange(index)}
      >
        {images.map((image, index) => (
          <Image key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </Carousel>
    </div>
  )
}
