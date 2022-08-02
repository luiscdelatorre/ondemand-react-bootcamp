import PropTypes from 'prop-types'
import { Container } from './ProductGalleryImage.styles'

const ProductGalleryImage = ({ image, onSelectImage, isSelected }) => {
  const { url, alt } = image
  return (
    <Container active={isSelected} onClick={() => onSelectImage(image)}>
      <img src={url} alt={alt} />
    </Container>
  )
}

ProductGalleryImage.propTypes = {
  image: PropTypes.object.isRequired,
  onSelectImage: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
}

export default ProductGalleryImage 
