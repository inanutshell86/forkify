// Global app controller
import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';
import Recipe from './models/Recipe';

/**
 * Global state of the app
 * Search object
 * Current recipe object
 * Shopping list object
 * Liked recipes
 */

const state = {};

/**
 * SEARCH CONTROLLER
 */

const controlSearch = async () => {
  // Get the query from the view
  const query = searchView.getInput();

  if (query) {
    // new search object and add to state
    state.search = new Search(query);
    // prepare UI for results
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);
    // search for recipes
    await state.search.getResults();
    // render results on UI
    clearLoader();
    searchView.renderResults(state.search.result);
  }
}

elements.searchBtn.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
  const btn = e.target.closest('.btn-inline');

  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage)
  }
});

/**
 * RECIPE CONTROLLER
 */
const r = new Recipe('99b1c6');
r.getRecipe();
console.log(r);
