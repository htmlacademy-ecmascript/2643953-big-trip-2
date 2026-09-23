
import TripPresenter from './presenters/trip-presenter.js';

const siteHeaderElement = document.querySelector('.trip-controls__filters');
const siteMainElement = document.querySelector('.trip-events');

const tripPresenter = new TripPresenter({
  tripContainer: siteMainElement,
  filterContainer: siteHeaderElement
});

tripPresenter.init();
