import {
 Loader, ProductGallery, ProductInfo, ProductPurchase, ProductSpecs 
} from 'components'
import { useParams } from 'react-router-dom'
import useProduct from 'utils/hooks/useProduct'

import {
 Container, GalleryContainer, InfoContainer, PurchaseContainer, SpecsContainer
} from './Product.styles'

const Product = () => {
  const { productId } = useParams()
  const { 
    product,
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
            <ProductPurchase productId={productId} {...data} />
          </PurchaseContainer>
          <SpecsContainer>
            <ProductSpecs {...data} />
          </SpecsContainer>
        </Container>
  )
}

export default Product 
