
import { Card } from 'components'
import featuredProducts from 'mocks/en-us/featured-products.json'
import { Container, Title, Grid } from './FeaturedProducts.styles'
import PropTypes from 'prop-types'

const FeaturedProducts = ({ navigate }) => {
  const { results } = featuredProducts
  return (
    <Container className='container'>
      <Title className='section-title'>Featured Products</Title>
      <Grid>
       {results.map((item, index) => (
        <Card key={`grid-item-${index}`} item={item} />
      ))}  
      </Grid>
      <button type='button' onClick={() => navigate('product-list')}>View all products</button>
    </Container>
  )
}

FeaturedProducts.propTypes = {
  navigate: PropTypes.func
}

export default FeaturedProducts 
