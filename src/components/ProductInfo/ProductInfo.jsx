import {
  Description,
  DescriptionList,
  Price,
  Sku,
  Subtitle,
  Tag,
  Title 
} from './ProductInfo.styles'
import PropTypes from 'prop-types'

const ProductInfo = ({
  name,
  price,
  short_description,
  sku,
  stock,
  tags, 
  category: {slug},
}) => {
  const productCategory = slug.replace('--', ' & ')
  return (
    name && <>
      <Title>{ name }</Title>
      <Sku>Sku: { sku }</Sku>
      <hr />
      <DescriptionList>
        <dt>Price</dt>
        <dd><Price>${ price }</Price></dd>
        <dt>Quantity</dt>
        <dd>{ stock } in Stock</dd>
        <dt>Category</dt>
        <dd>{ productCategory }</dd>
        <dt>Tags</dt>
        <dd data-testid="product-tags">
          {tags.map((tag, index) => (
            <Tag key={ index }>{ tag }</Tag>
          ))}
        </dd>
      </DescriptionList>
      <hr />
      <Subtitle>About this product:</Subtitle>
      <Description>{ short_description }</Description>
    </>
  )
}

ProductInfo.propTypes = {
  category: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  short_description: PropTypes.string.isRequired,
  sku: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  tags: PropTypes.array.isRequired,
}

export default ProductInfo 
