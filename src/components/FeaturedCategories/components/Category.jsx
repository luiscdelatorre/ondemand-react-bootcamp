import { Card, CardContent, Title } from './Category.styles'
import PropTypes from 'prop-types'

const Category  = ({ category }) => {
  const { name='', main_image={} } = category.data || {}
  const { url='', alt='' } = main_image || {}

  return (
    <Card>
      <CardContent>
        <Title>{name}</Title>
        <img src={url} alt={alt} />
      </CardContent>
    </Card>
  )
}

Category.propTypes = {
  category: PropTypes.object,
}

export default Category
