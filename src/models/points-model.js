import { pointsData } from '../mock/points.js';

export default class PointsModel {
  #points = null;
  init() {
    this.#points = [...pointsData];
  }

  get points() {
    return this.#points;
  }

}
