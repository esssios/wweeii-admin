<script setup>
const props = defineProps({
  buttonDisabled: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <button
    :disabled="buttonDisabled"
  ><slot></slot></button>
</template>

<style lang='scss' scoped>
button {
  border: none;
  outline: none;
  width: 38px;
  height: 38px;
  background-color: orange;
  color: #fff;
  border-radius: 5px;

  &:disabled {
    opacity: .6;
  }
}
</style>