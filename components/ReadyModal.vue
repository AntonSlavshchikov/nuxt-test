<template>
     <modal
    name="ready-modal"
    transition="pop-out"
    height="100%"
    width="100%"
    :max-width="400"
    :max-height="250"
    :adaptive="true"
    :scrollable="true"
    :pivot-y="0.5"
    :reset="true"
    classes="v--modal-customer-cart"
 >
    <div class="ready__modal">
        <div class="ready__modal__content">
            <h1 class="ready__modal__text">Заказ оформлен!</h1>
            <NuxtLink to='/' class="ready__btn">OK</NuxtLink>
        </div>
       
    </div>
  </modal>
</template>

<script>
    export default {
        name: 'ReadyModal'
    }
</script>

<style lang="scss" scoped>
    .ready__modal{
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .ready__modal__content{
        text-align: center;
    }

    .ready__modal__text{
        margin-bottom: 20px;
    }

    .ready__btn{
        background: teal;
        border: none;
        padding: 10px 20px;
        color: #fff;
        font-size: 14px;
        text-decoration: none;

        border-radius: 5px;
    }
</style>