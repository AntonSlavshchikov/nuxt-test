<template>
  <div>
      <div class="row__info">
          <NuxtLink class="row__info-link" to="/">Главная</NuxtLink>
         /<NuxtLink class="row__info-link" :to="'/category/'+getProdId.category">{{getName}}</NuxtLink>
         /{{getProdId.name}}
       </div>
       <div class="container">
           <h1>{{getProdId.name}}</h1>
           <div class="prod__id">
               <img class="category__img" v-lazy="getProdId" alt="">
               <div class="prod__id-content">
                   <p><strong>Цена: </strong>{{getProdId.price}} рублей</p>
                   <p><strong>Описание: </strong>{{getProdId.description}}</p>
               </div>
           </div>
       </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters([
            'getByProductId',
            'getCategoryByName'
        ]),
        getProdId() {
            return this.getByProductId(this.$route.params.id);
        },

        getName() {
            return this.getCategoryByName(this.$route.params.id);
        }
    }
}
</script>

<style scoped lang="scss">
    .prod__id{
        display: flex;
        align-items: flex-end;
    }

    .prod__id-content{
        margin-left: 20px;
    }
</style>