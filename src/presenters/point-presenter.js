import { render } from '../render.js';
import { getPreparedOffers } from '../utils/offers.js';
import FormView from '../views/form-view.js';
import PointView from '../views/point-view.js';


export default class PointPresenter {
  #pointsModel = null;
  #destinationModel = null;
  #offersModel = null;
  #point = null;
  #pointView = null;
  #formView = null;
  #isOpened = false;

  constructor({ pointsModel, destinationModel, offersModel, point, isOpened }) {
    this.#pointsModel = pointsModel;
    this.#destinationModel = destinationModel;
    this.#offersModel = offersModel;
    this.#point = point;

    this.#isOpened = isOpened;
  };

  init(containerElement) {
    this.#pointView = new PointView({
      point: this.#point,
      destinationName: this.#destinationModel.getNameById(this.#point.destination)
    });

    this.#formView = new FormView({
      point: this.#point,
      offers: getPreparedOffers({
        checkedOffers: this.#point.offers,
        allOffers: this.#offersModel.getOffersByType(this.#point.type)})
    });

    if(this.#isOpened){
     render(this.#formView, containerElement)
     return;
    }
    render(this.#pointView, containerElement)
  }
}
