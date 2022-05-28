<template>
  <div>
      <div class="row__info">
          <NuxtLink class="row__info-link" to="/">Главная</NuxtLink>
         /{{$route.params.id}}
        </div>
        <h1>Эта страница - {{$route.params.id}}</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>