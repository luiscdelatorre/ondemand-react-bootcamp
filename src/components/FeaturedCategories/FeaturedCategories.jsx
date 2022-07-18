import Category from './components/Category'
import { Container, CategoriesWrapper, Title } from './FeaturedCategories.styles'
import { Loader } from 'components'
import useCategories from 'utils/hooks/useCategories'

const ProductCategories = () => {
  const { categories, isLoading } = useCategories()

  return (
    <Container>
      <Title className='section-title'>Categories</Title>
      {isLoading
        ? <Loader /> 
        : <CategoriesWrapper>
          {categories.map((item) =>(
            <Category key={item.id} category={item}/>
          ))}  
          </CategoriesWrapper>
      }
    </Container>
  )
}

export default ProductCategories 
