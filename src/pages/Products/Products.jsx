
import { ProductsList, Sidebar } from 'components'
import { useState } from 'react'
import { Container, Title, PageHeader } from './Products.styles'

const ProductList = () => {
  const [filters, setFilters] = useState( [] )

  const updateFilters = ( newFilters ) => {
    setFilters( newFilters )
  }

  return (
    <Container className='container'>
      <Sidebar filters={filters} updateFilters={( newFilters ) => updateFilters( newFilters )} />
      <PageHeader>
        <Title className='section-title'>Products</Title>
      </PageHeader>
      <ProductsList filters={filters}/>
    </Container>
  )
}

export default ProductList
