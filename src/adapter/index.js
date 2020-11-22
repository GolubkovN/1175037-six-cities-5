import {extend} from '../utils/store';

export const adaptOfferToClient = (data) => {
  const adaptedOffers = extend(data,
      {
        location: {
          name: data.city.name,
          coords: {
            lat: data.city.location.latitude,
            lon: data.city.location.longitude,
            zoom: data.city.location.zoom,
          },
        },
        picture: data.preview_image,
        features: data.goods,
        owner: {
          avatar: data.host.avatar_url,
          id: data.host.id,
          name: data.host.name,
          isSuper: data.host.is_pro,
        },
        photos: data.images,
        isFavorite: data.is_favorite,
        isPremium: data.is_premium,
        coordinates: {
          lat: data.location.latitude,
          lon: data.location.longitude,
          zomm: data.location.zoom,
        },
        guests: data.max_adults,
      });

  delete adaptedOffers.city;
  delete adaptedOffers.goods;
  delete adaptedOffers.host;
  delete adaptedOffers.images;
  delete adaptedOffers.is_favorite;
  delete adaptedOffers.is_premium;
  delete adaptedOffers.max_adults;


  return adaptedOffers;
};
