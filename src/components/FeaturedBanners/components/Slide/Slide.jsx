import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setFilters } from 'store/filterSlice'
import { SlideContainer, Title, SlideAction } from './Slide.styles'

const Slide = ({ slide, active }) => {
  const { title, main_image } = slide.data
  const { url, alt } = main_image
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const seeMore = () => {
    dispatch(setFilters([]))
    navigate('/products')
  }

  return (
    <SlideContainer active={active}>
      <Title>{ title }</Title>
      <img src={url} alt={alt} />
      <SlideAction type="button" onClick={seeMore}>See more</SlideAction>
    </SlideContainer>
  )
}

Slide.propTypes = {
  slide: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired
}

export default Slide 
 
