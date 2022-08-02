<template>
  <header class="global-header px-16 h-60 flex items-center">
    <div flex items-center>
      <MenuCollapse />
      <BreadCrumb ml-15 />
    </div>
    <div ml-auto flex items-center>
      <GithubSite />
      <FullScreen />
      <UserAvatar />
    </div>
  </header>
</template>

<script setup>
import BreadCrumb from "./components/BreadCrumb.vue";
import MenuCollapse from "./components/MenuCollapse.vue";
import FullScreen from "./components/FullScreen.vue";
import UserAvatar from "./components/UserAvatar.vue";
import GithubSite from "./components/GithubSite.vue";
</script>

<style scoped>
.global-header {
  border-bottom: 2px solid rgb(246, 248, 247);
}
</style>
