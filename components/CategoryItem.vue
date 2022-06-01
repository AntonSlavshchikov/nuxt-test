<template>
   <NuxtLink :to="'/category/'+category.id" class="category__item">
       <h4 class="cayegory__name">{{category.name}}</h4>
       <img class="category__img" v-lazy="category" alt="">
   </NuxtLink>
</template>

<script>
export default {
    name:'CategoryItem',
    props: {
        category: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
.category__item{
        padding: 20px;

        display: block;
        background: #00ADB5;
        text-decoration: none;

        margin-right: 20px;
        margin-top: 10px;
        margin-bottom: 10px;

        border-radius: 10px;
    }

    .cayegory__name{
        color: #eee;
    }

    .category__img{
        margin-top: 10px;

        height: 300px;
        width: 300px;
    }
</style>