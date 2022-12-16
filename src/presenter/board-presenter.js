import BoardView from '../view/board-view.js';
import SortView from '../view/sort-view.js';
import EventListView from '../view/event-list-view.js';
import EventView from '../view/event-view.js';
import EventEditView from '../view/event-edit-view.js';
import EventAddView from '../view/event-add-view.js';
import {render} from '../render.js';

export default class BoardPresenter {
  boardComponent = new BoardView();
  EventListComponent = new EventListView();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.boardComponent, this.boardContainer);
    render(new SortView(), this.boardComponent.getElement());
    render(this.EventListComponent, this.boardComponent.getElement());
    render(new EventEditView(), this.EventListComponent.getElement());
    render(new EventAddView(), this.EventListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new EventView(), this.EventListComponent.getElement());
    }
  }
}
