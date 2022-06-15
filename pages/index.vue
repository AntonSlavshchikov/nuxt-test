<template>
  <div>
    <div class="row__info">Главная</div>
    <CategoryList
      :categories='categories'
    /> 
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  transition:{
    name:'page'
  },
  computed : {
    categories() {
      return this.$store.state.categories;
    }
  },
}
</script>

<style lang="scss">
.row__info{
  padding: 10px 40px;
  color: #EEEE;
  background: #393E46;
}

.row__info-link{
  color: #eee;
  cursor: pointer;
  text-decoration: none;
}
</style>


