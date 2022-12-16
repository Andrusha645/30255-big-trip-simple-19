import FilterView from './view/filter-view.js';
//import SortView from './view/sort-view.js';
import {render} from './render.js';
import BoardPresenter from './presenter/board-presenter.js';

const siteHeaderElement = document.querySelector('.trip-controls__filters');
const siteMainElement = document.querySelector('.page-main');
const boardPresenter = new BoardPresenter({boardContainer: siteMainElement});

render(new FilterView(), siteHeaderElement);

boardPresenter.init();


