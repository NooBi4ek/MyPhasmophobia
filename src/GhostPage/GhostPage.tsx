import React from 'react';
import { useParams } from 'react-router-dom';

const GhostPage: React.FC = ({ ghosts }) => {
  const { id } = useParams();
  return <div>{ghosts.map((el) => el.id == id && <div>{el.name}</div>)}</div>;
};
export default GhostPage;

// import { configureStore } from '@reduxjs/toolkit';
// import shopReducer from './internet_shop_slice.ts';
// const store = configureStore({
//   reducer: {
//     fazma: shopReducer,
//   },
// });
// export default store;

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { IPhones } from '../models/modelPhone';

// type Categories = {
//   id: number;
//   namecat: string;
// };
// type ShopState = {
//   phones: IPhones[];
//   categories: Categories[];
//   All_category: boolean;
//   orders: IPhones[];
//   filter_phone: IPhones[];
//   versus_Phone: IPhones[];
//   filterSearch: [];
//   sum: number;
//   maxPrice: number;
//   maxThreads: number;
//   nameCategory: string;
// };
// const initialState: ShopState = {
//   phones: [
//     {
//       id: 1,
//       name: 'Apple iPhone 11 128GB',
//       company: 'Apple',
//       short_desc: 'something',
//       img: 'Apple_Iphone11_128.jpg',
//       threads_name: 'Apple A13 Bionic',
//       front_camera: '12MP',
//       main_camera: '12MP',
//       count: 1,
//       quantity_threads: 6,
//       memory: 128,
//       price: 10000,
//       click: false,
//       click_versus: false,
//     },
//     {
//       id: 2,
//       name: 'Apple iPhone 13 128GB',
//       company: 'Apple',
//       short_desc: 'something',
//       img: 'Apple_Iphone13_128.jpg',
//       threads_name: 'Apple A14 Bionic',
//       front_camera: '12MP',
//       main_camera: '12MP',
//       price: 15000,
//       count: 1,
//       quantity_threads: 6,
//       memory: 128,
//       click: false,
//       click_versus: false,
//     },
//     {
//       id: 3,
//       name: 'Apple iPhone 13 PRO 128GB',
//       company: 'Apple',
//       short_desc: 'something',
//       img: 'Apple_Iphone13_pro_128.jpg',
//       threads_name: 'Apple A15 Bionic',
//       front_camera: '12MP',
//       main_camera: '12MP',
//       price: 17000,
//       count: 1,
//       quantity_threads: 6,
//       memory: 128,
//       click: false,
//       click_versus: false,
//     },
//     {
//       id: 4,
//       name: 'Apple iPhone 13 PRO MAX 128GB',
//       company: 'Apple',
//       short_desc: 'something',
//       img: 'Apple_Iphone13_pro_max_128.jpg',
//       threads_name: 'Apple A15 Bionic',
//       front_camera: '12MP',
//       main_camera: '12MP',
//       price: 20000,
//       count: 1,
//       quantity_threads: 6,
//       memory: 128,
//       click: false,
//       click_versus: false,
//     },
//     {
//       id: 5,
//       name: 'Infinix Note 10 PRO 8/128GB',
//       company: 'Infinix',
//       short_desc: 'something',
//       img: 'Infinix_note10_pro_8_128.jpg',
//       threads_name: 'MediaTek Helio G95',
//       main_camera: '64MP + 8MP + 2MP + 2MP',
//       front_camera: '16MP',
//       price: 7000,
//       count: 1,
//       quantity_threads: 8,
//       memory: 128,
//       click: false,
//       click_versus: false,
//     },
//     {
//       id: 6,
//       name: 'Motorola Moto G60 6/128GB',
//       company: 'Motorola',
//       short_desc: 'something',
//       img: 'Motorola_moto_g60_6_128.jpg',
//       threads_name: 'Qualcomm Snapdragon 732G',
//       main_camera: '108MP + 8MP + 2MP',
//       front_camera: '32MP',
//       price: 9000,
//       count: 1,
//       quantity_threads: 8,
//       memory: 128,
//       click: false,
//       click_versus: false,
//     },
//     {
//       id: 7,
//       name: 'Samsung Galaxy A32 4/64GB',
//       company: 'Samsung',
//       short_desc: 'something',
//       img: 'Samsung_galaxy_a32_4_64.jpg',
//       threads_name: 'MediaTek Helio G80',
//       main_camera: '64MP + 8MP + 5MP + 5MP',
//       front_camera: '20MP',
//       price: 5000,
//       count: 1,
//       quantity_threads: 8,
//       memory: 64,
//       click: false,
//       click_versus: false,
//     },
//     {
//       id: 8,
//       name: 'Samsung Galaxy A32 4/128GB',
//       company: 'Samsung',
//       short_desc: 'something',
//       img: 'Samsung_galaxy_a32_4_128.jpg',
//       threads_name: 'MediaTek Helio G80',
//       main_camera: '64MP + 8MP + 5MP + 5MP',
//       front_camera: '20MP',
//       price: 10000,
//       count: 1,
//       quantity_threads: 8,
//       memory: 128,
//       click: false,
//       click_versus: false,
//     },
//     {
//       id: 9,
//       name: 'Samsung Galaxy A53 5G 6/128GB',
//       company: 'Samsung',
//       short_desc: 'something',
//       img: 'Samsung_galaxy_a53_5g_6_128.jpg',
//       threads_name: 'Samsung Exynos 1280',
//       main_camera: '64MP + 12MP + 5MP + 5MP',
//       front_camera: '32MP',
//       price: 17000,
//       count: 1,
//       quantity_threads: 8,
//       memory: 128,
//       click: false,
//       click_versus: false,
//     },
//     {
//       id: 10,
//       name: 'Samsung Galaxy M32 6/128GB',
//       company: 'Samsung',
//       short_desc: 'something',
//       img: 'Samsung_galaxy_m32_6_128.jpg',
//       threads_name: 'MediaTek Helio G80',
//       main_camera: '64MP + 8MP + 2MP + 2MP',
//       front_camera: '20MP',
//       price: 17000,
//       count: 1,
//       quantity_threads: 8,
//       memory: 128,
//       click: false,
//       click_versus: false,
//     },
//     {
//       id: 11,
//       name: 'Samsung Galaxy M52 5G 6/128GB',
//       company: 'Samsung',
//       short_desc: 'something',
//       img: 'Samsung_galaxy_m52_5g_6_128.jpg',
//       threads_name: 'Qualcomm Snapdragon 778G',
//       main_camera: '64MP + 12MP + 5MP',
//       front_camera: '32MP',
//       price: 11000,
//       count: 1,
//       quantity_threads: 8,
//       memory: 128,
//       click: false,
//       click_versus: false,
//     },
//     {
//       id: 12,
//       name: 'Samsung Galaxy M53 5G 6/128GB',
//       company: 'Samsung',
//       short_desc: 'something',
//       img: 'Samsung_galaxy_m53_5g_6_128.jpg',
//       threads_name: 'Qualcomm Snapdragon 778G',
//       main_camera: '64MP + 12MP + 5MP',
//       front_camera: '32MP',
//       price: 17000,
//       count: 1,
//       quantity_threads: 8,
//       memory: 128,
//       click: false,
//       click_versus: false,
//     },
//   ],
//   categories: [
//     { id: 1, namecat: 'All' },
//     { id: 2, namecat: 'Apple' },
//     { id: 3, namecat: 'Samsung' },
//     { id: 4, namecat: 'Infinix' },
//   ],
//   All_category: false,
//   orders: Orders,
//   filter_phone: Filter_phone,
//   versus_Phone: Versus,
//   filterSearch: [],
//   sum: 0,
//   maxPrice: 0,
//   maxThreads: 0,
//   nameCategory: '',
// };

// const fazmaSlice = createSlice({
//   name: 'fazma',
//   initialState,
//   reducers: {

//   },
// });
// export const {

// } = fazmaSlice.actions;
// export default fazmaSlice.reducer;
