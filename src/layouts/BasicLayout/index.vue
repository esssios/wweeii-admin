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
      <global-side />
    </n-layout-sider>
    <n-layout>
      <n-layout-header>
        <global-header />
      </n-layout-header>
      <n-layout style="background-color: #f5f6fb">
        <global-tab v-if="useTheme.tags.visible" />
        <global-content />
      </n-layout>
    </n-layout>
  </n-layout>
</template>

<script setup>
import GlobalHeader from "../common/GlobalHeader/index.vue";
import GlobalSide from "../common/GlobalSide/index.vue";
import GlobalContent from "../common/GlobalContent/index.vue";
import GlobalTab from "../common/GlobalTab/index.vue";
import { useAppStore } from "@/store/modules/app";
import { useThemeStore } from "@/store/modules/theme";

const appStore = useAppStore();
const useTheme = useThemeStore();
</script>

<style lang="scss" scoped></style>
