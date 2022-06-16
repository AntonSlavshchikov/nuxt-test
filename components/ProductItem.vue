<template>
  <div class="product__item">
    <NuxtLink class="product__link" :to="'/product/'+product.id">
      <h4 class="product__name">{{ product.name }}</h4>
      <img class="category__img" v-lazy="product.img" alt="" />
    </NuxtLink>
    <div class="product__menu">
      <p class="product_price">{{ product.price }} руб.</p>
      <MyButton @click.prevent.native="setBacket(product)">Купить</MyButton>
    </div>
  </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue';

export default {
  components: {MyButton},
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

.product__name{
  color: #393e46;
}

.product__link{
  text-decoration: none;
}

.category__img{
  height: 250px;
  width: 250px;
}
</style>
