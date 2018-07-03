// Global app controller
import Search from './models/Search';

/**
 * Global state of the app
 * Search object
 * Current recipe object
 * Shopping list object
 * Liked recipes
 */

const state = {};

const controlSearch = async () => {
  // Get the query from the view
  const query = 'pizza';

  if (query) {
    // new search object and add to state
    state.search = new Search(query);
    // prepare UI for results
    // search for recipes
    await state.search.getResults();
    // render results on UI
    console.log(state.search.result);
  }
}

document.querySelector('.search').addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});
