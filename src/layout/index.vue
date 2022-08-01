<template>
  <n-layout has-sider style="height: 100%">
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :collapsed="appStore.collapsed"
      :width="220"
      :native-scrollbar="false"
    >
      <SideBar />
    </n-layout-sider>
    <n-layout>
      <n-layout-header h-60>
        <Header />
      </n-layout-header>
      <n-layout style="background-color: #f5f6fb">
        <Tags v-if="useTheme.tags.visible" />
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
import { useAppStore } from "@/store/modules/app";
import { useThemeStore } from "@/store/modules/theme";

const appStore = useAppStore();
const useTheme = useThemeStore();
</script>

<style lang="scss" scoped></style>
