import { render } from '../render.js';
import ListView from '../views/list-view.js';
import PointPresenter from './point-presenter.js';


export default class ListPresenter {
#listView = null;
#pointsModel = null;
#destinationsModel = null;
#offersModel = null;

constructor({pointsModel, destinationModel, offersModel}){
  this.#pointsModel = pointsModel;
  this.#destinationsModel = destinationModel;
  this.#offersModel = offersModel;
};

  init(containerElement) {
    this.#listView = new ListView();
    render(this.#listView, containerElement);

    // const editingFormComponent = new EditingFormView();
    // render(editingFormComponent, listComponent.getElement());

    // for (let i = 0; i < 3; i++) {
    //   render(new RoutePointView(), listComponent.getElement());
    // }
this.#pointsModel.points.forEach((point)=>{
  const pointPresenter = new PointPresenter({
      point,
      pointsModel: this.#pointsModel,
      destinationsModel: this.#destinationsModel,
      offersModel: this.#offersModel
    });
    pointPresenter.init(this.#listView.getElement());
})

  }
}
