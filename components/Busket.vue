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
     <div class="busket" v-if="$store.state.busket.length > 0">
       <div class="busket__list">
         <h3>Общая стоимость: {{$store.state.total}} руб.</h3>
         <div class="busket__item" v-for="product in $store.state.busket" :key="product.id">
           <img src="https://via.placeholder.com/150" alt="" class="busket__img">
           <div class="busket__content">
             <p><strong>Наименование:</strong> {{product.item.name}}</p>
             <p><strong>Цена:</strong> {{product.item.price*product.col}} руб.</p>
             <p><strong>Описание:</strong> {{product.item.description}}</p>
           </div>
           <h3>Количество:  <input type="number" min="1" :value="product.col" :id="product.item.id" @input="updateRow" class="busket__input"></h3>
           <button class="busket__btn" @click="removeItem(product.item.id)">Удалить</button>
         </div>
       </div>
    </div>
    <div v-else class="backet__empty">
      <h3 class="backet__empty__text">Корзина пуста!</h3>
    </div>
  </modal>
</template>

<script>

export default {
name: 'Busket',
methods:{
  updateRow (e) {
    this.$store.commit('updateColBusket', [e.target.id, e.target.value]);
    this.$store.commit('setTotal');
  },
  removeItem (id) {
    this.$store.commit('removeRowBusket', id);
    this.$store.commit('setTotal');
  },
},
}
</script>

<style scoped lang="scss">
.busket {
 height: 100%;
 padding: 40px;
 overflow-y: scroll;
}


.busket__item{
  display: flex;
  justify-content: space-between;
  align-items: top;
  padding: 15px;
  margin-bottom: 15px;

  box-shadow: 2px 2px 4px gray;
}

.busket__btn{
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

  transition: all .2s linear;

  &:hover{
    background: lighten($color: #393E46, $amount: 10);
  }
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

.busket__input{
  width: 50px;
  padding: 3px;
}
</style>