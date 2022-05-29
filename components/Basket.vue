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
    <div v-if="$store.state.basket.length > 0">

    </div>
    <div v-else class="backet__empty">
      <h3 class="backet__empty__text">Корзина пуста!</h3>
    </div>
  </modal>
</template>

<script>

export default {
name: 'Busket',
}
</script>

<style scoped lang="scss">
.busket {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}
.busket__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
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
</style>