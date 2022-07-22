import PropTypes from 'prop-types'
import { Container } from './ProductGalleryImage.styles'

const ProductGalleryImage = ({ image, selectImage, selected }) => {
  const { url, alt } = image
  return (
    <Container active={selected} onClick={() => selectImage(image)}>
      <img src={url} alt={alt} />
    </Container>
  )
}

ProductGalleryImage.propTypes = {
  image: PropTypes.object.isRequired,
  selectImage: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
}

export default ProductGalleryImage 
