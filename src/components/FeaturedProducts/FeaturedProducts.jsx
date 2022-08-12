
import { Card } from 'components'
import { Link } from 'react-router-dom'
import { Container, Title, Grid } from './FeaturedProducts.styles'
import { Loader } from 'components'
import { useProducts } from 'utils/hooks'

const FeaturedProducts = () => {
  const tags = ['Featured']
  const totalItems = 16
  const { products, isLoading } = useProducts([], tags, totalItems)

  return (
    <Container className="container">
      <Title className="section-title">Featured Products</Title>
      {isLoading
        ? <Loader /> 
        : <Grid data-testid="featured-products" >
            {products.map((item, index) => (
              <Card key={`grid-item-${index}`} item={item} />
            ))}  
          </Grid>
      }
      <Link to="/products" className="button">View all products</Link>
    </Container>
  )
}

export default FeaturedProducts 
