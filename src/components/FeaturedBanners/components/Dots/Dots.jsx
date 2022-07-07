import PropTypes from 'prop-types'
import { Dot, DotsContainer } from './Dots.styles'

const Dots = ({ items, slideIndex, onSelect }) => {
  return (
    <DotsContainer>
      {items.map((item, index) => {
        const activeIndex = index + 1
        const isActive = slideIndex === activeIndex
        return (
          <Dot 
            key={item.id}
            onClick={() => onSelect(activeIndex)}
            active={isActive}
          />
        )
      })}
    </DotsContainer>
  )
}

Dots.propTypes = {
  items: PropTypes.array, onSelect: PropTypes.func,
  slideIndex: PropTypes.number,
} 

export default Dots
