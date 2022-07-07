import productCategories from 'mocks/en-us/product-categories.json'
import Category from './components/Category'
import { Container, CategoriesWrapper, Title } from './FeaturedCategories.styles'

const ProductCategories = () => {
  const { results } = productCategories
  return (
    <Container>
      <Title className='section-title'>Categories</Title>
      <CategoriesWrapper>
       {results.map((item) =>(
          <Category key={item.id} category={item}/>
        ))}  
      </CategoriesWrapper>
    </Container>
  )
}

export default ProductCategories 
