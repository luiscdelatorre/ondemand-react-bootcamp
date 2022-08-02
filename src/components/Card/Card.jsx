
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
import { AddToCart } from 'components'

const Card = ({ item }) => {
  const {
    id,
    data: {
      name,
      price,
      stock,
      category: { slug },
      mainimage: { url, alt }
    },
  } = item
  const itemCategory = slug.replace('--', ' & ')
  const hasStock = stock > 0

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
          {hasStock
            ? <AddToCart type="button" id={ id } stock={ stock } />
            : <button type="button" disabled>Out of stock</button>
          }
        </CardActions>
      </CardDescription>
    </CardContainer>
  )
}

Card.propTypes = {
  item: PropTypes.object.isRequired
} 

export default Card
