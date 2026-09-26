import { destinationsData } from '../mock/destinations.js';

export default class DestinationsModel {
  #destinations = null;
  init() {
    this.#destinations = [...destinationsData];
  }

  get destinations() {
    return this.#destinations;
  }

}
