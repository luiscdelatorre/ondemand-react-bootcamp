import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Dots from '../Dots/Dots'
import Slide from '../Slide/Slide'
import { ContainerSlider } from './Slider.styles'

const Slider = ({ items }) => {
  const [slideIndex, setSlideIndex] = useState(1)
    
  const moveDot = index => {
    setSlideIndex(index)
  }

  const nextSlide = () => {
    if(slideIndex !== items.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === items.length) {
      setSlideIndex(1)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  })

  return (
    <ContainerSlider>
      {items.map((slide, index) => (
        <Slide key={index} slide={slide} active={slideIndex === index + 1} />
      ))}
      <Dots items={items} slideIndex={slideIndex} onSelect={(index) => moveDot(index)} />
    </ContainerSlider>
  )
}

Slider.propTypes = {
  items: PropTypes.array
}

export default Slider
