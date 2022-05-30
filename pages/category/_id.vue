<template>
  <div>
      <div class="row__info">
          <NuxtLink class="row__info-link" to="/">Главная</NuxtLink>
         /{{getNameCategories.name}}
       </div>
       <div class="container">
         <h3 class="page__header">{{getNameCategories.name}}</h3>
         <ProductList :products="getCategoryProdycts"/>
       </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from "vuex";

export default {
  computed: {
    ...mapGetters([
      'getByIdCategories',
      'getSortedProducts'
    ]),
    getNameCategories() {
      return this.getByIdCategories(this.$route.params.id);
    },
    getCategoryProdycts() {
      return this.getSortedProducts(this.$route.params.id);
    }
  }
}
</script>

<style scoped lang="scss">
  
</style>