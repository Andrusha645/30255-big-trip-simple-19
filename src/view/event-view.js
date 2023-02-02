import {createElement} from '../render.js';
import { humanizeEventDueDate,humanizeEventTimeFrom, humanizeEventTimeTo} from '../utils.js';

function createEventTemplate(event) {
  const {dueDate, type, cityName, dateFrom, dateTo, basePrice, checkedOffers} = event;

  const date = humanizeEventDueDate(dueDate);
  const timeFrom = humanizeEventTimeFrom(dateFrom);
  const timeTo = humanizeEventTimeTo(dateTo);

  return (
    `<div class="event">
    <time class="event__date" datetime="2019-03-18">${date}</time>
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
    </div>
    <h3 class="event__title">${type} ${cityName}</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="2019-03-18T10:30">${timeFrom}</time>
        &mdash;
        <time class="event__end-time" datetime="2019-03-18T11:00">${timeTo}</time>
      </p>
    </div>
    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
    </p>
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      <li class="event__offer">
        <span class="event__offer-title">${checkedOffers().title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${checkedOffers().price}</span>
      </li>
    </ul>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>`
  );
}

export default class EventView {
  constructor({event}) {
    this.event = event;
  }

  getTemplate() {
    return createEventTemplate(this.event);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
