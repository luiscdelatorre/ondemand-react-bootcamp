
import PropTypes from 'prop-types'
import { SlideContainer, Title, SlideAction } from './Slide.styles'

const Slide = ({ slide, active }) => {
  const { title, main_image } = slide.data
  const { url, alt } = main_image

  return (
    <SlideContainer active={active}>
      <Title>{ title }</Title>
      <img src={url} alt={alt} />
      <SlideAction>See more</SlideAction>
    </SlideContainer>
  )
}

Slide.propTypes = {
  slide: PropTypes.object,
  active: PropTypes.bool
}

export default Slide 
 
