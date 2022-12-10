/* eslint-disable no-console */
import UrlParser from '../../routes/url-parser';
import RestaurantData from '../../data/restaurant-data';
import { restaurantDetailTemplate } from '../templates/template-restaurant';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant-detail"></div>
      <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantData.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = restaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        description: restaurant.description,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
