import { Offer } from '../types/offers';

const IMG_URL = 'img/';

const offers: Offer[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 12,
        longitude: 12,
        zoom: 10,
      },
      name: 'Cologne',
    },
    description: '',
    goods: [ 'Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat',
      'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host:{
      avatarUrl: `${IMG_URL}avatar-angelina.jpg`,
      id: 1,
      isPro: true,
      name: 'Angelina',
    },
    id: 1,
    images: [ `${IMG_URL}room.jpg`, `${IMG_URL}apartment-01.jpg`, `${IMG_URL}apartment-02.jpg`,
      `${IMG_URL}apartment-03.jpg`, `${IMG_URL}studio-01.jpg`, `${IMG_URL}apartment-01.jpg`],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 12,
      longitude: 12,
      zoom: 10,
    },
    maxAdults: 4,
    previewImage: `${IMG_URL}apartment-01.jpg`,
    price: 120,
    rating: 4,
    title: 'Beautiful &amp; luxurious apartment at great location',
    type: 'apartment',
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 12,
        longitude: 12,
        zoom: 10,
      },
      name: 'Cologne',
    },
    description: '',
    goods: [ 'Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat',
      'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host:{
      avatarUrl: `${IMG_URL}avatar-angelina.jpg`,
      id: 1,
      isPro: true,
      name: 'Angelina',
    },
    id: 2,
    images: [ `${IMG_URL}room.jpg`, `${IMG_URL}apartment-01.jpg`, `${IMG_URL}apartment-02.jpg`,
      `${IMG_URL}apartment-03.jpg`, `${IMG_URL}studio-01.jpg`, `${IMG_URL}apartment-01.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 12,
      longitude: 12,
      zoom: 10,
    },
    maxAdults: 4,
    previewImage: `${IMG_URL}room.jpg`,
    price: 80,
    rating: 4,
    title: 'Wood and stone place',
    type: 'room',
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 12,
        longitude: 12,
        zoom: 10,
      },
      name: 'Brussels',
    },
    description: '',
    goods: [ 'Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat',
      'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host:{
      avatarUrl: `${IMG_URL}avatar-angelina.jpg`,
      id: 1,
      isPro: true,
      name: 'Angelina',
    },
    id: 3,
    images: [ `${IMG_URL}room.jpg`, `${IMG_URL}apartment-01.jpg`, `${IMG_URL}apartment-02.jpg`,
      `${IMG_URL}apartment-03.jpg`, `${IMG_URL}studio-01.jpg`, `${IMG_URL}apartment-01.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 12,
      longitude: 12,
      zoom: 10,
    },
    maxAdults: 4,
    previewImage: `${IMG_URL}apartment-02.jpg`,
    price: 132,
    rating: 4,
    title: 'Canal View Prinsengracht',
    type: 'apartment',
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 12,
        longitude: 12,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: '',
    goods: [ 'Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat',
      'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
    host:{
      avatarUrl: `${IMG_URL}avatar-angelina.jpg`,
      id: 1,
      isPro: true,
      name: 'Angelina',
    },
    id: 4,
    images: [ `${IMG_URL}room.jpg`, `${IMG_URL}apartment-01.jpg`, `${IMG_URL}apartment-02.jpg`,
      `${IMG_URL}apartment-03.jpg`, `${IMG_URL}studio-01.jpg`, `${IMG_URL}apartment-01.jpg`],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 12,
      longitude: 12,
      zoom: 10,
    },
    maxAdults: 4,
    previewImage: `${IMG_URL}apartment-03.jpg`,
    price: 180,
    rating: 5,
    title: 'Canal View Prinsengracht',
    type: 'apartment',
  },
];

export default offers;
