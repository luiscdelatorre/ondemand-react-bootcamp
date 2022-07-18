import { Loader } from 'components'
import { useParams } from 'react-router-dom'
import useProduct from 'utils/hooks/useProduct'
import ProductGallery from './components/ProductGallery/ProductGallery'
import ProductInfo from './components/ProductInfo/ProductInfo'
import ProductPurchase from './components/ProductPurchase/ProductPurchase'
import ProductSpecs from './components/ProductSpecs/ProductSpecs'
import {
 Container, GalleryContainer, InfoContainer, PurchaseContainer, SpecsContainer
} from './Product.styles'

const Product = () => {
  const { productId } = useParams()
  const { 
    product = {},
    isLoading
  } = useProduct(productId)
  const { data } = product

  return (
    isLoading
      ? <Loader />
      : <Container className='container'>
        <GalleryContainer>
          <ProductGallery {...data} />
        </GalleryContainer>
        <InfoContainer>
          <ProductInfo {...data}/>
        </InfoContainer>
        <PurchaseContainer>
          <ProductPurchase {...data} />
        </PurchaseContainer>
        <SpecsContainer>
          <ProductSpecs {...data} />
        </SpecsContainer>
      </Container>
  )
}

export default Product 
