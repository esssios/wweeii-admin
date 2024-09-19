<script setup>
const props = defineProps({
  buttonDisabled: {
    left: {
      type: Boolean,
      default: true
    },
    right: {
      type: Boolean,
      default: true
    }
  }
})

  const emit = defineEmits(['clickLeftButton', 'clickRightButton']);
const clickLeftButton = () => {
  emit('clickLeftButton')
}
const clickRightButton = () => {
  emit('clickRightButton')
}
</script>

<template>
  <div class="box button-group">
    <button
      :disabled="buttonDisabled.left"
      @click="clickLeftButton"
    >&lt;</button>
    <button
      :disabled="buttonDisabled.right"
      @click="clickRightButton"
    >&gt;</button>
  </div>
</template>

<style lang='scss' scoped>
.button-group {
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;

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

    &:nth-child(2) {
      margin-left: 10px;
    }
  }
}
</style>