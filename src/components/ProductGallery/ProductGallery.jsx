import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import ProductGalleryImage from './components/ProductGalleryImage/ProductGalleryImage'
import { Container, MainImage, Thumbnails } from './ProductGallery.styles'

const ProductGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(null)

  useEffect(() => {
    setMainImage(images[0]?.image)
  }, [images])

  const selectImage = (image) => {
    setMainImage(image)
  }

  return (
    <Container>
      {mainImage && images &&
        <>
          <MainImage>
            <img src={ mainImage.url } alt={ mainImage.alt } />
          </MainImage>
          <Thumbnails>
            {images.map((image, index) => {
              const isSelected = mainImage.url === image.image.url
              return (
                <ProductGalleryImage 
                  key={ index }
                  onSelectImage={(image) => selectImage(image)}
                  isSelected={ isSelected }
                  { ...image }
                />
              )
            })}
          </Thumbnails>
        </>
      }
    </Container>
  )
}

ProductGallery.propTypes = {
  images: PropTypes.array.isRequired,
}

export default ProductGallery 
