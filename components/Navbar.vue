<template>
    <nav class="navbar">
        <div class="nav__logo">NuxtStore</div>
        <div class="nav__menu">
            <NuxtLink class="nav__link" to="/">Главная</NuxtLink>
            <NuxtLink class="nav__link" to="/about">О нас</NuxtLink>
            <a class="nav__link" @click="$modal.show('customer-cart')"><img src="@/assets/ico/cors.png" alt=""></a>
            <div class="counter__block" v-if="getCount">
                <p class="counter">{{getCount}}</p>
            </div>
        </div>
    </nav>
</template>

<script>
import {mapGetters} from "vuex";
export default {
    name: 'Navbar',
     computed: {
    ...mapGetters([
      'getCountBusket',
    ]),
    getCount() {
      return this.getCountBusket;
    },
  }
}
</script>

<style scoped lang="scss">
    .navbar{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;

        background: #222831;

        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 10px 40px;
    }

    .nav__logo{
        font-size: 28px;
        font-weight: 900;
        font-style: italic;

        color: #EEEEEE;
    }

    .nav__menu{
        display: flex;
    }

    .nav__link{
        margin-right: 15px;
        cursor: pointer;

        color: #EEEEEE;
        font-size: 16px;
        font-weight: 300;
        text-decoration: none;

        &:last-child{
            margin-right: 0;
        }
    }

    .counter__block{
        height: 16px;
        width: 16px;
        background: #fff;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .counter{
        color: #333;
        font-size: 14px;
        font-weight: 900;
    }
</style>