<template>
 <modal
    name="customer-cart"
    transition="pop-out"
    height="95%"
    width="95%"
    :max-width="960"
    :adaptive="true"
    :scrollable="true"
    :pivot-y="0.5"
    :reset="true"
    classes="v--modal-customer-cart"
 >
    <!-- <div v-if="$store.state.basket.length > 0">

    </div> -->
     <div class="basket" v-if="$store.state.basket.length > 0">
       <div class="basket__list">
         <h3>Общая стоимость: {{$store.state.total}} руб.</h3>
         <div class="basket__item" v-for="product in $store.state.basket" :key="product.id">
           <img src="https://via.placeholder.com/150" alt="" class="basket__img">
           <div class="basket__content">
             <p><strong>Наименование:</strong> {{product.item.name}}</p>
             <p><strong>Цена:</strong> {{product.item.price*product.col}} руб.</p>
             <p><strong>Описание:</strong> {{product.item.description}}</p>
           </div>
           <h3>Количество:  <input type="number" min="1" :value="product.col" :id="product.item.id" @input="updateRow" class="busket__input"></h3>
           <MyButton @click.native="removeItem(product.item.id)">Удалить</MyButton>
         </div>
         <MyButton @click.native="$router.push('/order')" v-if="$store.state.isAuth">Оформить заказ</MyButton>
         <p v-else>Войдите чтобы оформить заказ: <MyButton @click.native="$modal.show('auth-modal')" to='/order'>Войти</MyButton></p>
       </div>
    </div>
    <div v-else class="backet__empty">
      <h3 class="backet__empty__text">Корзина пуста!</h3>
    </div>
  </modal>
</template>

<script>
import MyButton from '~/components/UI/MyButton.vue'
export default {
components: { MyButton },
name: 'Basket',
methods:{
  updateRow (e) {
    if(e.target.value > "0"){
      this.$store.commit('updateColBasket', [e.target.id, e.target.value]);
      this.$store.commit('setTotal');
    }
    else{
      e.target.value = 1;
      this.$store.commit('updateColBasket', [e.target.id, e.target.value]);
      this.$store.commit('setTotal');
    }
  },
  removeItem (id) {
    this.$store.commit('removeRowBasket', id);
    this.$store.commit('setTotal');
  },
},
}
</script>

<style scoped lang="scss">
::-webkit-scrollbar{
  width: 4px;
}

// ::-webkit-scrollbar-track{
//     background: #f0f0f0;
// }

::-webkit-scrollbar-thumb{
    background-color: #b4b4b4;
    border-radius: 20px;
    // border: 3px solid #f0f0f0;
}

.basket {
 height: 100%;
 padding: 40px;
 overflow-y: scroll;
}


.basket__item{
  display: flex;
  justify-content: space-between;
  align-items: top;
  padding: 15px;
  margin-bottom: 15px;

  box-shadow: 2px 2px 4px gray;
}

.backet__empty{
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.backet__empty__text{
  margin: auto 0;

  color: rgba(0, 0, 0, 0.5);
  font-size: 30px;
  font-weight: 700;

}

.basket__input{
  width: 50px;
  padding: 3px;
}
</style>