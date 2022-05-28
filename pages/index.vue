<template>
  <div>
    <div class="row__info">Главная</div>
    <CategoryList
      :categories='$store.state.categories'
    /> 
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
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


