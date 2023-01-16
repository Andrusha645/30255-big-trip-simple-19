import {getRandomArrayElement, getRandomPositiveInteger} from '../utils.js';

const  points = [
  {
    id: 1,
    description:'Chamonix-Mont-Blanc (usually shortened to Chamonix) is a resort area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the highest summit in the Alps, it is renowned for its skiing.',
    name: 'Chamonix',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomPositiveInteger(1,5)}`,
        description: 'Chamonix parliament building'
      }
    ] 
  },
  {
    id: 2,
    description:'Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.',
    name: 'Geneva',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomPositiveInteger(1,5)}`,
        description: 'Geneva parliament building'
      }
    ] 
  },
];
const offers = [
  {
    type: 'taxi',
      offers: [
        {
          'id': 1,
          'title': ' Choose the radio station',
          'price': 60
        },
        {
          'id': 2,
          'title': 'Order Uber',
          'price': 20
        }
      ]
  },
  {
    type: 'drive',
      offers: [
        {
          'id': 1,
          'title': 'Rent a car',
          'price': 200
        }
      ]
  },
  {
    type: 'check-in',
      offers: [
        {
          'id': 1,
          'title': 'Add breakfast',
          'price': 50
        },       
      ]
  },
  {
    type: 'sightseeing',
      offers: [
        {
          'id': 1,
          'title': 'Book tickets',
          'price': 40
        },
        {
          'id': 2,
          'title': 'Lunch in city',
          'price': 30
        }
      ]
  },
  {
    type: 'flight',
      offers: [
        {
          'id': 1,
          'title': 'Add luggage',
          'price': 50
        },
        {
          'id': 2,
          'title': 'Switch to comfort',
          'price': 80
        },
        {
          'id': 3,
          'title': 'Add meal',
          'price': 15
        },
        {
          'id': 4,
          'title': 'Choose seats',
          'price': 5
        },
        {
          'id': 5,
          'title': 'Travel by train',
          'price': 40
        },

      ]
  },
  {

  },
];
const mockEvents = [
  { 
    date: 'Mar19',
    type: 'taxi',
    cityName: 'Amsterdam',    
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',
    basePrice: 80,
    offers: ''
  },
  { 
    date: 'Mar18',
    type: 'check-in',
    cityName: 'Geneva',    
    dateFrom: '2019-06-10T22:55:56.845Z',
    dateTo: '2019-06-11T11:22:13.375Z',
    basePrice: 1100,
    offers: ''
  },
  

];

function getRandomEvent() {
  return getRandomArrayElement(mockEvents);
}

export {getRandomEvent};
