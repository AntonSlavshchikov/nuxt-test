export const state = () => ({
    categories: [
        {
            id: 1,
            name: 'Смартфоны',
        },
        {
            id: 2,
            name: 'Ноутбуки',
        },
        {
            id: 3,
            name: 'Бытовая техника',
        },
        {
            id: 4,
            name: 'Компьютеры',
        },
    ],
    products: [
        {
            id: '1',
            category: '1',
            name: 'iPhone X',
            description: 'Новая модель айфона',
            price: '70000'
          },
          {
            id: '2',
            category: '1',
            name: 'iPhone XR',
            description: 'Новая модель айфона',
            price: '100000'
          },
          {
            id: '3',
            category: '1',
            name: 'Samsung A50',
            description: 'Новая модель Samsung',
            price: '15000'
          },
          {
            id: '4',
            category: '1',
            name: 'Xiaomi MI10',
            description: 'Новая модель Xiaomi',
            price: '10000'
          },
          {
            id: '5',
            category: '2',
            name: 'iPhone X',
            description: 'Новая модель айфона',
            price: '70000'
          },
          {
            id: '6',
            category: '2',
            name: 'iPhone XR',
            description: 'Новая модель айфона',
            price: '100000'
          },
          {
            id: '7',
            category: '2',
            name: 'Samsung A50',
            description: 'Новая модель Samsung',
            price: '15000'
          },
          {
            id: '8',
            category: '2',
            name: 'Xiaomi MI10',
            description: 'Новая модель Xiaomi',
            price: '10000'
          },
          {
            id: '9',
            category: '3',
            name: 'iPhone X',
            description: 'Новая модель айфона',
            price: '70000'
          },
          {
            id: '10',
            category: '3',
            name: 'iPhone XR',
            description: 'Новая модель айфона',
            price: '100000'
          },
          {
            id: '11',
            category: '3',
            name: 'Samsung A50',
            description: 'Новая модель Samsung',
            price: '15000'
          },
          {
            id: '12',
            category: '3',
            name: 'Xiaomi MI10',
            description: 'Новая модель Xiaomi',
            price: '10000'
          },
          {
            id: '13',
            category: '4',
            name: 'iPhone X',
            description: 'Новая модель айфона',
            price: '70000'
          },
          {
            id: '14',
            category: '4',
            name: 'iPhone XR',
            description: 'Новая модель айфона',
            price: '100000'
          },
          {
            id: '15',
            category: '4',
            name: 'Samsung A50',
            description: 'Новая модель Samsung',
            price: '15000'
          },
          {
            id: '16',
            category: '4',
            name: 'Xiaomi MI10',
            description: 'Новая модель Xiaomi',
            price: '10000'
          },
    ],
})

// export const actions = {
//     getCategoryName (state, {route}) {
//         const name = state.categories;
//         commit('SET_CATEGORIES', name);
//     }
// }

// export const mutations = {
//     SET_CATEGORIES (state, categories) {
//         state.categories = categories;
//     },

//     SET_PRODUCTS (state, products) {
//         state.products = products;
//     }
// }