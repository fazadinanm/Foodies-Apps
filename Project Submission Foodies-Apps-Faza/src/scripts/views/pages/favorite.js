import RestaurantIdb from '../../data/restaurant-idb';
import { restaurantItemTemplate } from '../templates/template-restaurant';

const Favorite = {
  async render() {
    return `
    <div class="list">
    <h1 class="list-label">Favorite List</h1><hr>
      <div id="restaurant" class="restaurant"></div>
    <div>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#restaurant');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += restaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
