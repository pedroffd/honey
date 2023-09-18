import { IHighlightProduct } from './components/hero';
//import cardImage from '../public/images/cardImage.jpeg'
//import sextoy from '../public/images/sextoy.jpeg'
import { ICategoryCard } from './components/category_card'
import { IProduct } from './components/product_card'
import { IconToyBrickMinusOutline } from './assets/icons/icon-list'
export const highlightProducts: IHighlightProduct[] = [
  {
    date: '4th Aug',
    title: 'Autem sunt tempora mollitia magnam non voluptates',
    href: 'https://google.com',
    bg: 'bg-rose-300',
  },
  {
    date: '4th Aug',
    title: 'Autem sunt tempora mollitia magnam non voluptates',
    href: 'https://google.com',
    bg: 'bg-fuchsia-300',
  },
  {
    date: '4th Aug',
    title: 'Autem sunt tempora mollitia magnam non voluptates',
    href: 'https://google.com',
    bg: 'bg-emerald-300',
  },
  // Add more highlight products here
];

export const categoriesData: ICategoryCard[] = [
  {
    width: 50,
    height: 50,
    iconName: 'Vibrator',
    color: '#fc5d9d',
    svg: IconToyBrickMinusOutline
  },
  {
    width: 50,
    height: 50,
    iconName: 'Toys for couples',
    color: '#fc5d9d',
    svg: IconToyBrickMinusOutline
  },
  // Add more objects as needed
];

export const productsData: IProduct[] = [
  {
   // productImage: sextoy,
   productImage: "https://github.com/shadcn.png",
    imageSize: 300,
    productName: "System JO CLASSIC HYBRID",
    productCategory: "Lubricant",
    price: 103.03,
    colors: [
      { code: "black", name: "Black" },
      { code: "red-500", name: "Red" },
      { code: "blue-400", name: "Blue" },
    ],
  },
  {
    productImage: "https://github.com/shadcn.png",
    imageSize: 300,
    productName: "System JO CLASSIC HYBRID",
    productCategory: "Lubricant",
    price: 103.03,
    colors: [
      { code: "black", name: "Black" },
      { code: "red-500", name: "Red" },
      { code: "blue-400", name: "Blue" },
    ],
  },
  {
    productImage: "https://github.com/shadcn.png",
    imageSize: 300,
    productName: "System JO CLASSIC HYBRID",
    productCategory: "Lubricant",
    price: 103.03,
    colors: [
      { code: "black", name: "Black" },
      { code: "red-500", name: "Red" },
      { code: "blue-400", name: "Blue" },
    ],
  },
]
