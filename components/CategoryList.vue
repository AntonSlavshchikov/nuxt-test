<template>
  <div class="category">
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
    .category{
        padding: 0 40px;
    }
    .category__list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        width: 100%;
    }
</style>