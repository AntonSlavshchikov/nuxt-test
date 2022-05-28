<template>
    <nav class="navbar">
        <div class="nav__logo">NuxtStore</div>
        <div class="nav__menu">
            <NuxtLink class="nav__link" to="/">Главная</NuxtLink>
            <NuxtLink class="nav__link" to="/about">О нас</NuxtLink>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
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
</style>