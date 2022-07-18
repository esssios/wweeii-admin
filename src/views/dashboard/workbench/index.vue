<template>
  <n-space :vertical="true" :size="16">
    <workbenchHeader></workbenchHeader>
    <workbenchMain></workbenchMain>
  </n-space>
</template>

<script setup>
import workbenchHeader from "./components/workbenchHeader/index.vue";
import workbenchMain from "./components/workbenchMain/index.vue";
</script>
