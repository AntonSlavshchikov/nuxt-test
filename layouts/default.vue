<template>
    <div class="page">
        <div class="wrapper">
            <Navbar/>
            <main class="main">
                <Nuxt />
                <Basket/>
            </main>
            <footer class="footer">It`s footer</footer>
        </div>
  </div>
</template>

<script>
export default {

}
</script>


<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap');

    *,
    *::before,
    *::after{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background: #eeeeee;
    }
    #__nuxt, #__layout, .page{
        height: 100%;
    }

    .wrapper{
        width: 100%;
        min-height: 100%;

        display: flex;
        flex-direction: column;
    }

    .main {
        flex: 1 0 auto;
        margin-top: 50px;
        
    }

    .container{
        padding: 0 40px;
    }

    .page__header{
        padding: 10px 0;
    }

    .footer{
        flex: 0 0 auto;
        
        height: 100px;
        width: 100%;

        background: #393E46;
    }
</style>