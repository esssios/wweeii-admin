<template>
  <router-link h-60 flex-center to="/">
    <icon-custom-logo text-36></icon-custom-logo>
    <h2 v-show="!appStore.collapsed" ml-10 color-primary text-16 font-bold max-w-140 flex-shrink-0>
      {{ title }}
    </h2>
  </router-link>
</template>

<script setup>
import { useAppStore } from "@/store/modules/app";
const title = import.meta.env.VITE_APP_TITLE;

const appStore = useAppStore();
</script>
