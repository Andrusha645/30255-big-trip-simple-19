import {getRandomArrayElement, getRandomPositiveInteger} from '../utils.js';

const mockEvents = [
  {
    destination:{
      id: 1,
      description: 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
      name: 'Chamonix',
      pictures: [
        {
          src: `https://loremflickr.com/248/152?random=${getRandomPositiveInteger(1,5)}`,
          description: 'Chamonix parliament building'
        }
      ]
    },
    OffersByType:{
      type: 'taxi',
      offers: [
        {
          'id': 1,
          'title': ' Choose the radio station',
          'price': 60
        }
      ]
    },

    basePrice: 1100,
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',

  },
  {
    destination:{
      id: 2,
      description: 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
      name: 'Chamonix',
      pictures: [
        {
          src: `https://loremflickr.com/248/152?random=${getRandomPositiveInteger(1,5)}`,
          description: 'Chamonix parliament building'
        }
      ]
    },
    OffersByType:{
      type: 'flight',
      offers: [
        {
          'id': 2,
          'title': 'Upgrade to a business class',
          'price': 120
        }
      ]
    },

    basePrice: 800,
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z',

  }


];

function getRandomEvent() {
  return getRandomArrayElement(mockEvents);
}

export {getRandomEvent};
