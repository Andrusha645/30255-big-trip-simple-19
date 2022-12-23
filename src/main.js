import FilterView from './view/filter-view.js';
import {render} from './render.js';
import BoardPresenter from './presenter/board-presenter.js';
import EventsModel from './model/events-model.js';

const siteHeaderElement = document.querySelector('.trip-controls__filters');
const siteMainElement = document.querySelector('.page-main');
const eventsModel = new EventsModel();
const boardPresenter = new BoardPresenter({
  boardContainer: siteMainElement,
  eventsModel,
});

render(new FilterView(), siteHeaderElement);

boardPresenter.init();


