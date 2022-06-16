<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'MyButton'
    }
</script>

<style lang="scss" scoped>
.btn {
  height: 30px;
  background: #393e46;
  border: none;
  padding: 8px;

  color: #eee;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;

  transition: all 0.2s linear;

  &:hover {
    background: lighten($color: #393e46, $amount: 10);
  }
}
</style>