<template>
  <n-layout has-sider style="height: 100%">
    <n-layout-sider bordered collapse-mode="width" :collapsed-width="64" :width="220" :native-scrollbar="false">
      <SideBar />
    </n-layout-sider>
    <n-layout>
      <n-layout-header>
        <Header />
      </n-layout-header>
      <n-layout style="background-color: #f5f6fb">
        <Tags />
        <Content />
      </n-layout>
    </n-layout>
  </n-layout>
</template>

<script setup>
import Header from "./components/header/index.vue";
import SideBar from "./components/sidebar/index.vue";
import Content from "./components/content/index.vue";
import Tags from "./components/tags/index.vue";
</script>

<style lang="scss" scoped></style>
