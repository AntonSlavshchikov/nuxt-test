<template>
  <div class="product__list">
    <ProductItem
        v-for="product in products"
        :product="product"
        :key="product.id"
    />         
  </div>
</template>

<script>
export default {
    name: 'ProductList',
    props: {
        products: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
.product__list{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>