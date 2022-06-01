<template>
  <div class="container">
      <h3 class="page__header">Выберите категорию</h3>
      <div class="category__list">
          <CategoryItem
            v-for='category in categories' 
            :key="category.id"
            :category='category'
          />
      </div>
  </div>
</template>

<script>
export default {
    name: "CategoryList",
    props: {
        categories: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
    .category__list{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        width: 100%;
    }
</style>