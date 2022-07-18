
import {
  CardActions,
  CardCategory,
  CardContainer, 
  CardDescription,
  CardImage, 
  CardName,
  CardPrice
} from './Card.styles'
import PropTypes from 'prop-types'

const Card = ({ item }) => {
  const { id, data } = item
  const { mainimage, category, name, price } = data
  const { url, alt } = mainimage
  const { slug } = category
  const itemCategory = slug.replace('--', ' & ')

  const handleAddToCart = (e) => {
    e.preventDefault()
    console.log('Add to Cart!...', item.id)
  }

  return (
    <CardContainer to={`/product/${id}`}>
      <CardImage>
        <img src={url} alt={alt} />
      </CardImage>
      <CardDescription>
        <CardName>{ name }</CardName>
        <CardCategory>{ itemCategory }</CardCategory>
        <CardPrice><span>$</span> { price }</CardPrice>
        <CardActions>
          <button type='button' onClick={handleAddToCart}>Add to Cart</button>
        </CardActions>
      </CardDescription>
    </CardContainer>
  )
}

Card.propTypes = {
  item: PropTypes.object.isRequired
} 

export default Card
