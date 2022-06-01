<template>
  <div class="product__item">
    <h4 class="product__name">{{ product.name }}</h4>
    <img class="category__img" v-lazy="product.img" alt="" />
    <div class="product__menu">
      <p class="product_price">{{ product.price }} руб.</p>
      <button class="btn" @click.prevent="setBacket(product)">Купить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    setBacket(item) {
      this.$store.dispatch('fetchBasket', item);
    },
  },
}
</script>

<style scoped lang="scss">
.product__item {
  background: #00adb5;
  border-radius: 8px;
  padding: 10px;

  margin-right: 10px;
  margin-bottom: 10px;

  color: #eee;
}

.product__menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn {
  background: #393e46;
  border: none;
  padding: 8px;

  color: #eee;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;

  transition: all 0.2s linear;

  &:hover {
    background: lighten($color: #393e46, $amount: 10);
  }
}

.category__img{
  height: 250px;
  width: 250px;
}
</style>
