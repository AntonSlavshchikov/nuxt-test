<template>
  <div class="product__item">
    <h4 class="product__name">{{product.name}}</h4>
    <img class="category__img" src="https://via.placeholder.com/250" alt="">
    <div class="product__menu">
        <p class="product_price">{{product.price}} руб.</p>
        <button class="btn" @click.prevent="setBucket(product)">Купить</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ProductItem',
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    methods: {
        setBucket (item){
            this.$store.dispatch('fetchBusket', item);
            console.log(this.$store.state.busket);
        }
    },
}
</script>

<style scoped lang="scss">
 .product__item{
    background: #00ADB5;
    border-radius: 8px;
    padding: 10px;

    margin-right: 10px;
    margin-bottom: 10px;

    color: #eee;
  }

  .product__menu{
      display: flex;
      justify-content: space-between;
      align-items: center;
  }

  .btn{
      background: #393E46;
      border: none;
      padding: 8px;

      color: #eee;
      text-transform: uppercase;
      border-radius: 5px;
      cursor:pointer;

      transition: all .2s linear;

      &:hover{
          background: lighten($color: #393E46, $amount: 10);
      }
  }
</style>