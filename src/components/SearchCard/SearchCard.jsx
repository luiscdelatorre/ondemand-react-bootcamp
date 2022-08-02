
import {
  CardActions,
  CardCategory,
  CardContainer, 
  CardDescription,
  CardImage, 
  CardName,
  CardPrice
} from './SearchCard.styles'
import PropTypes from 'prop-types'
import { AddToCart } from 'components'

const SearchCard = ({ item }) => {
  const {
    id,
    data: {
      name,
      stock,
      price,
      short_description,
      category: { slug },
      mainimage: { url, alt }
    },
  } = item
  const itemCategory = slug.replace('--', ' & ')
  const hasStock = stock > 0

  return (
    <CardContainer to={`/product/${id}`}>
      <CardImage>
        <img src={ url } alt={ alt } />
      </CardImage>
      <CardName>{ name }</CardName>
      <CardCategory><b>Category: </b>{ itemCategory }</CardCategory>
      <CardPrice>${ price }</CardPrice>
      <CardDescription>{ short_description }</CardDescription>
      <CardActions>
        {hasStock
          ? <AddToCart type="button" id={ id } stock={ stock } />
          : <button type="button" disabled>Out of stock</button>
        }
      </CardActions>
    </CardContainer>
  )
}

SearchCard.propTypes = {
  item: PropTypes.object.isRequired
} 

export default SearchCard
