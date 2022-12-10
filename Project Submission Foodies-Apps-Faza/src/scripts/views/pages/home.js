import '../components/Hero';
import RestaurantData from '../../data/restaurant-data';
import { restaurantItemTemplate } from '../templates/template-restaurant';

const Home = {
  async render() {
    return `
    <hero-header> </hero-header>
    <div class="list">
      <h1 class="list-label">Explore Restaurant</h1><hr>
        <div id="restaurant" class="restaurant"></div>
      </div>
      `;
  },

  async afterRender() {
    const restaurant = await RestaurantData.getDataRestaurant();
    const restaurantContainer = document.querySelector('#restaurant');
    restaurant.forEach((restaurants) => {
      restaurantContainer.innerHTML += restaurantItemTemplate(restaurants);
    });
  },
};

export default Home;
