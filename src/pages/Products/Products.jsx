
import { ProductsList, Sidebar } from 'components'
import { Container, Title, PageHeader } from './Products.styles'

const Products = () => {
  return (
    <Container className='container'>
      <Sidebar />
      <PageHeader>
        <Title className='section-title'>Products</Title>
      </PageHeader>
      <ProductsList />
    </Container>
  )
}

export default Products
