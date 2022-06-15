<template>
    <div class="container">
        <ReadyModal/>
        <div class="order__page">
            <h3 class="page__header">Оформление заказа</h3>

            <div class="order__list">
                <div class="order__item" v-for="product in $store.state.basket" :key="product.item.id">
                    <img src="https://via.placeholder.com/80" alt="" class="order__img">
                    <p class="order__text">{{product.item.name}}</p>
                    <p class="order__text">{{product.item.price}}</p>
                    <p class="order__text">{{product.item.name}}</p>
                    <p class="order__text">x{{product.col}}</p>
                </div>
            </div>

            <h4>Общая стоимость: {{$store.state.total}} руб.</h4>

            <form class="order__form" @submit.prevent="$modal.show('ready-modal')">
                <h3>Заполните данные</h3>
                <input class="order__input" placeholder="ФИО" type="text" required>
                <input class="order__input" placeholder="Серия и номер паспорта" type="text" required>
                <input class="order__input" placeholder="Адрес доставки (город, улица, дом)" type="text" required>
                <input class="order__input" placeholder="Номер телефона" type="text" required>
                <button class="order__btn" type="submit">Оформить</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'order',
        mounted() {
            this.$modal.hide('customer-cart')
        }
    }
</script>

<style lang="scss" scoped>
    .order__page{
        margin-top: 10px;
    }

    .order__list{
        padding: 30px;
    }

    .order__item{
        display: flex;
        align-items: center;

        margin-bottom: 15px;
        padding-bottom: 5px;

        border-bottom: 1px solid #000;
    }

    .order__img{
        margin-right: 15px;
    }

    .order__text{
        margin-right: 15px;
        
        font-size: 16px;
        font-weight: 700;

        &:last-child{
            margin-right: 0;
        }
    }



    .order__form{
        background: #fff;
        padding: 30px;
        width: 50%;
        margin-top: 20px;

        border-radius: 20px;

        box-shadow: 1px 1px 5px #000;
    }

    .order__input{
        display: block;

        border: none;
        background: #eeeeee;
        border-radius: 5px;
        padding: 10px;

        font-size: 18px;
        color: #222831;
        margin-bottom: 8px;

        width: 100%;
    }

    .order__btn{
        height: 30px;
        border: none;
        background: #393E46;
        color: #fff;
        padding: 8px;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        cursor: pointer;
        border-radius: 5px;

        text-decoration: none;

        transition: all .2s linear;

        &:hover{
            background: lighten($color: #393E46, $amount: 10);
        }
    }

</style>