import { Meta, StoryObj } from '@storybook/react';
import { ProductCard, IProductsProps } from '../components/product_card';
import sextoy from '../../public/images/sextoy.jpeg'

const meta: Meta = {
  title: 'Example/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type ProductCardStory = StoryObj<IProductsProps>;

// Define your product data here
const productData: IProductsProps = {
  product: {
    imageSize: 200,
    productName: 'Sample Product',
    productCategory: 'Sample Category',
    price: 99.99,
    productImage: sextoy,
  },
};

export const Default: ProductCardStory = {
  args: {
    product: productData.product,
  },
};

export const WithHover: ProductCardStory = {
  args: {
    product: productData.product,
    variant: 'withHover',
  },
};

// Add more stories as needed, like 'WithSteps', 'WithBorder', etc.
