<template>
  <div p-16 class="{ 'p-16' : showPadding }">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-slide" mode="out-in" appear>
        <keep-alive :include="keepAliveRouteNames">
          <component :is="Component" v-if="appStore.reloadFlag" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { useAppStore } from "@/store/modules/app";
import { useRouter } from "vue-router";
import { computed } from "vue";

defineProps({
  showPadding: {
    type: Boolean,
    default: true,
  },
});

const appStore = useAppStore();
const router = useRouter();
const allRoutes = router.getRoutes();
const keepAliveRouteNames = computed(() => {
  return allRoutes.filter((route) => route.meta?.keepAlive).map((route) => route.name);
});
</script>
