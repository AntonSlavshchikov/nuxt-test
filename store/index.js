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
            id: 1,
            category: 1,
            name: 'iPhone X',
            description: 'Новая модель айфона',
            price: '70000'
          },
          {
            id: 2,
            category: 1,
            name: 'iPhone XR',
            description: 'Новая модель айфона',
            price: '100000'
          },
          {
            id: 3,
            category: 1,
            name: 'Samsung A50',
            description: 'Новая модель Samsung',
            price: '15000'
          },
          {
            id: 4,
            category: 1,
            name: 'Xiaomi MI10',
            description: 'Новая модель Xiaomi',
            price: '10000'
          },
          {
            id: 5,
            category: 2,
            name: 'MacBook',
            description: 'Новая модель MacBook',
            price: '70000'
          },
          {
            id: 6,
            category: 2,
            name: 'Aser laptop',
            description: 'Новая модель Aser',
            price: '100000'
          },
          {
            id: 7,
            category: 2,
            name: 'Hp nout',
            description: 'Новая модель Hp nout',
            price: '15000'
          },
          {
            id: 8,
            category: 2,
            name: 'Lenovo book',
            description: 'Новая модель Lenovo',
            price: '10000'
          },
          {
            id: 9,
            category: 3,
            name: 'Стиральная машинка',
            description: 'Новая модель стиралки',
            price: '70000'
          },
          {
            id: 10,
            category: 3,
            name: 'Миксер',
            description: 'Новая модель миксера',
            price: '100000'
          },
          {
            id: 11,
            category: 3,
            name: 'Холодильник',
            description: 'Новая модель Холодильника',
            price: '15000'
          },
          {
            id: 12,
            category: 3,
            name: 'Микроволновая печь',
            description: 'Новая модель Микроволновой печи',
            price: '10000'
          },
          {
            id: 13,
            category: 4,
            name: 'Супер комп',
            description: 'Новая модель компа',
            price: '70000'
          },
          {
            id: 14,
            category: 4,
            name: 'Ультра комп',
            description: 'Новая модель компа',
            price: '100000'
          },
          {
            id: 15,
            category: 4,
            name: 'Самый топовый ПК',
            description: 'Новая модель ПК',
            price: '15000'
          },
          {
            id: 16,
            category: 4,
            name: 'ПК',
            description: 'Новая модель ПК',
            price: '10000'
          },
    ],
    basket:[]
})

export const getters = {
  getByIdCategories: (state) => (id) => {
    return state.categories.find(category => category.id === Number(id));
  },

  getSortedProducts: (state) => (id) => {
    return state.products.filter(product => product.category === Number(id));
  }
}
