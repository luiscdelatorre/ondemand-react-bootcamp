
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

const SearchCard = ({ item }) => {
  const { id, data } = item
  const { mainimage, category, name, price, short_description } = data
  const { url, alt } = mainimage
  const { slug } = category
  const itemCategory = slug.replace('--', ' & ')

  const handleAddToCart = (e) => {
    e.preventDefault()
    console.log('TODO: Add to Cart!...', item.id)
  }

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
        <button type='button' onClick={ handleAddToCart }>Add to Cart</button>
      </CardActions>
    </CardContainer>
  )
}

SearchCard.propTypes = {
  item: PropTypes.object.isRequired
} 

export default SearchCard
