
import { 
  CardCategory,
  CardContainer, 
  CardDescription,
  CardImage, 
  CardName,
  CardPrice
} from './Card.styles'
import PropTypes from 'prop-types'

const Card = ({ item }) => {
  const { main_image, category, name, price } = item.data
  const { url, alt } = main_image
  const { slug } = category

  return (
    <CardContainer>
      <CardImage>
        <img src={url} alt={alt} />
      </CardImage>
      <CardDescription>
        <CardName>{ name }</CardName>
        <CardCategory>{ slug }</CardCategory>
        <CardPrice><span>$</span> { price }</CardPrice>
      </CardDescription>
    </CardContainer>
  )
}

Card.propTypes = {
  item: PropTypes.object
} 

export default Card
