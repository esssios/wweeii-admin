<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "列表",
  },
  leftOrRight: {
    type: String,
    validator (value) {
      return ['left', 'right'].includes(value);
    }
  }
});

const emit = defineEmits(['clickChangeCheckedAll']);
const clickChangeCheckedAll = (checked, leftOrRight) => {
  emit('clickChangeCheckedAll', checked, leftOrRight)
}
</script>

<template>
  <div class="head">
    <input type="checkbox"
    @click="clickChangeCheckedAll($event.target.checked, leftOrRight)"
    />
    <h1 class="list-title">{{ title }}</h1>
  </div>
</template>

<style lang='scss' scoped>
.head {
  display: flex;
  flex-direction: row;
  background-color: #efefef;
  border-bottom: 1px solid #ddd;
  .list-title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 38px;
    font-weight: normal;
    margin: 0;
    color: #666;
    font-size: 14px;
  }
}
</style>