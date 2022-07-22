import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import ProductGalleryImage from '../ProductGalleryImage/ProductGalleryImage'
import { Container, MainImage, Thumbnails } from './ProductGallery.styles'

const ProductGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState({})

  useEffect(() => {
    setMainImage(images[0]?.image)
  }, [images])

  const selectImage = (image) => {
    setMainImage(image)
  }

  return (
    <Container>
      <MainImage>
        <img src={ mainImage.url } alt={ mainImage.alt } />
      </MainImage>
      <Thumbnails>
        {images.map((image, index) => {
          const selected = mainImage.url === image.image.url
          return (
            <ProductGalleryImage 
              key={ index }
              selectImage={(image) => selectImage(image)}
              selected={ selected }
              { ...image }
            />
          )
        })}
      </Thumbnails>
    </Container>
  )
}

ProductGallery.propTypes = {
  images: PropTypes.array.isRequired,
}

export default ProductGallery 
