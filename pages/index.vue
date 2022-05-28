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
  data() {
        return ({
            categories: [
                {
                    id: 1,
                    name: 'Смартфоны',
                },
                {
                    id: 2,
                    name: 'Ноутбуки',
                },
                {
                    id: 3,
                    name: 'Бытовая техника',
                },
                {
                    id: 4,
                    name: 'Компьютеры',
                },
            ],
        })
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


