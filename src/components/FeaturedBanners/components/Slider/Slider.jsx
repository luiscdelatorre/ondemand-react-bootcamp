import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Dots from '../Dots/Dots'
import Slide from '../Slide/Slide'

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
    <div data-testid="featured-banners">
      {items.map((slide, index) => (
        <Slide key={index} slide={slide} active={slideIndex === index + 1} />
      ))}
      <Dots items={items} slideIndex={slideIndex} onSelect={(index) => moveDot(index)} />
    </div>
  )
}

Slider.propTypes = {
  items: PropTypes.array.isRequired
}

export default Slider
