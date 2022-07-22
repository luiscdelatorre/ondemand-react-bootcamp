import { Card, CardContent, Title } from './Category.styles'
import PropTypes from 'prop-types'

const Category  = ({ category }) => {
  const { slugs, data } = category
  const { name, main_image } = data
  const { url, alt } = main_image
  const categoryLink = slugs[0]

  return (
    <Card to={`/products?category=${categoryLink}`}>
      <CardContent>
        <Title>{name}</Title>
        <img src={url} alt={alt} />
      </CardContent>
    </Card>
  )
}

Category.propTypes = {
  category: PropTypes.object.isRequired,
}

export default Category
