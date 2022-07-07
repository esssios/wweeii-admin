<template>
  <AppProvider>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </AppProvider>
</template>

<script setup></script>

<style lang="scss">
#app {
  height: 100%;
  .n-config-provider {
    height: inherit;
  }
}
</style>
