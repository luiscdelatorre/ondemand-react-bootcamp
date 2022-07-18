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

const ProductInfo = ({ name, stock, price, sku, category, short_description, tags }) => {
  const { slug = '' } = category
  const productCategory = slug.replace('--', ' & ')
  return (
    <>
      <Title>{ name }</Title>
      <Sku>Sku: { sku }</Sku>
      <hr />
      <DescriptionList>
        <dt>Price</dt>
        <dd>
          <Price>
            ${ price }
          </Price>
        </dd>
        <dt>Quantity</dt>
        <dd>
          { stock } available
        </dd>
        <dt>Category</dt>
        <dd>{ productCategory }</dd>
        <dt>Tags</dt>
        <dd>
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
  name: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  sku: PropTypes.string.isRequired,
  category: PropTypes.object.isRequired,
  short_description: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired
}

export default ProductInfo 
