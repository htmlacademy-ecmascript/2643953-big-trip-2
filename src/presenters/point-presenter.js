import { render } from "../render";
import FormView from "../views/form-view";
import PointView from "../views/point-view";

export default class PointPresenter {
  #pointsModel = null;
  #destinationModel = null;
  #offersModel = null;
  #point = null;
  #pointView = null;
  #formView = null;

  constructor({ pointsModel, destinationModel, offersModel, point }) {
    this.#pointsModel = pointsModel;
    this.#destinationModel = destinationModel;
    this.#offersModel = offersModel;
    this.#point = point;
  };

  init(containerElement) {
    this.#pointView = new PointView({
      point: this.point
    });
    this.#formView = new FormView();

    render(this.#pointView, containerElement);
  }
}
