<template>
  <div>
      <div class="row__info">
          <NuxtLink class="row__info-link" to="/">Главная</NuxtLink>
         /{{$route.params.id}}
       </div>
       <div class="container">
         <h3 class="page__header">{{categories}}</h3>
         <ProductList :products="products"/>
       </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  // async asyncData ({ app, params, route, error }){
  //   await app.store.dispatch('getCategoryName', {route})
  // },
  computed: {
   ...mapState({
      categories: 'categories',
      products: 'products'
   })
  }
}
</script>

<style scoped lang="scss">
  
</style>