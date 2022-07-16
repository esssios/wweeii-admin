<template>
  <div p-15>
    <n-card rounded-10>
      <div flex items-center>
        <img rounded-full width="60" :src="userStore.avatar" />
        <div ml-20>
          <p text-16>Hello, {{ userStore.name }}</p>
          <p mt-5 text-24 op-60>今天又是元气满满的一天</p>
        </div>
        <div ml-auto flex items-center>
          <n-statistic label="待办" :value="4">
            <template #suffix> / 10 </template>
          </n-statistic>
          <n-statistic label="Stars" w-100 ml-80>
            <a href="https://github.com/zclzone/vue-naive-admin">
              <img allt="stars" src="https://badgen.net/github/stars/zclzone/vue-naive-admin" />
            </a>
          </n-statistic>
          <n-statistic label="Forks" w-100 ml-80>
            <a href="https://github.com/zclzone/vue-naive-admin">
              <img allt="forks" src="https://badgen.net/github/forks/zclzone/vue-naive-admin" />
            </a>
          </n-statistic>
        </div>
      </div>
    </n-card>
  </div>
</template>

<script setup>
import { useUserStore } from "@/store/modules/user";

const userStore = useUserStore();
</script>
