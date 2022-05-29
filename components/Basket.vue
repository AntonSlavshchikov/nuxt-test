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
    <!-- <div class="busket">
        <div class="busket__content"></div>
    </div> -->
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
</style>