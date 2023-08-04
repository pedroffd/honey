import { IHighlightProduct } from './components/hero';
import vibrator from '../public/images/category_icons/vibrator.svg'
import { ICategory } from './components/categories'

export const highlightProducts: IHighlightProduct[] = [
  {
    topic: 'Politics',
    date: '4th Aug',
    title: 'Autem sunt tempora mollitia magnam non voluptates',
    href: 'https://google.com',
    bg: 'heroMain',
  },
  {
    topic: 'Art',
    date: '4th Aug',
    title: 'Autem sunt tempora mollitia magnam non voluptates',
    href: 'https://google.com',
    bg: 'heroSecond',
  },
  {
    topic: 'Sport',
    date: '4th Aug',
    title: 'Autem sunt tempora mollitia magnam non voluptates',
    href: 'https://google.com',
    bg: 'lightPink',
  },
  // Add more highlight products here
];



export const categoriesData: ICategory[] = [
  {
    width: 50,
    height: 50,
    iconName: 'Vibrator',
    color: '#fc5d9d',
    svg: vibrator
  },
  {
    width: 50,
    height: 50,
    iconName: 'YourNextIconName',
    color: '#yourNextColor',
    svg: vibrator
  },
  // Add more objects as needed
];
