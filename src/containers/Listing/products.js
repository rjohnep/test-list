import Img1Black from './assets/1-1.png';
import Img1Red from './assets/1-2.png';
import Img1Blue from './assets/1-3.png';
import Img2Black from './assets/2-1.png';
import Img2Yellow from './assets/2-2.png';
import Img3Green from './assets/3-1.png';
import Img3Yellow from './assets/3-2.png';
import Img4Green from './assets/4-1.png';
import Img4Yellow from './assets/4-2.png';
import Img4Red from './assets/4-3.png';
import Img4Blue from './assets/4-4.png';
import Img5Red from './assets/5-1.png';
import Img6Yellow from './assets/6-1.png';

export default [
  {
    title: 'Grand Tour',
    description: 'Ultra lightweight and travel-proof',
    category: 'bags',
    variants: [
      {
        color: 'black',
        price: '$150',
        image: Img1Black,
      },
      {
        color: 'red',
        price: '$130',
        image: Img1Red,
      },
      {
        color: 'blue',
        price: '$140',
        image: Img1Blue,
      },
    ],
  },
  {
    title: 'Main Line',
    description: 'Grab and go',
    category: 'bags',
    variants: [
      {
        color: 'black',
        price: '$250',
        image: Img2Black,
      },
      {
        color: 'yellow',
        price: '$240',
        image: Img2Yellow,
      },
    ],
  },
  {
    title: 'Weekender',
    description: 'Office, gym, getaway',
    category: 'luggage',
    variants: [
      {
        color: 'green',
        price: '$350',
        image: Img3Green,
      },
      {
        color: 'yellow',
        price: '$340',
        image: Img3Yellow,
      },
    ],
  },
  {
    title: 'Packing Cube Trio',
    description: 'Cult favorite space saver',
    category: 'luggage',
    variants: [
      {
        color: 'green',
        price: '$135',
        image: Img4Green,
      },
      {
        color: 'yellow',
        price: '$140',
        image: Img4Yellow,
      },
      {
        color: 'red',
        price: '$140',
        image: Img4Red,
      },
      {
        color: 'blue',
        price: '$149',
        image: Img4Blue,
      },
    ],
  },
  {
    title: 'Better Together Kit',
    description: 'Let\'s Fly Away',
    category: 'kits',
    variants: [
      {
        color: 'red',
        price: '$485',
        image: Img5Red,
      },
    ],
  },
  {
    title: 'Bright and Early Kit',
    description: 'Stand out on the go',
    category: 'kits',
    variants: [
      {
        color: 'yellow',
        price: '$235',
        image: Img6Yellow,
      },
    ],
  },
];
