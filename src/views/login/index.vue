<template>
  <div class="cus-scroll h-full py-15 flex-col overflow-auto bg-cover" :style="{ backgroundImage: `url(${bgImg})` }">
    <div class="m-auto p-15 flex-center min-w-345 rounded-10 card-shadow bg-white bg-opacity-60">
      <div class="w-320 flex-col px-20 py-35">
        <h5 class="flex-center text-24 font-normal" color="#6a6a6a"><icon-custom-logo mr-30 text-50 />{{ title }}</h5>
        <div mt-30>
          <n-input
            v-model:value="loginInfo.userName"
            autofocus
            class="text-16 items-center h-50 pl-10"
            placeholder="admin"
            :maxlength="20"
          >
          </n-input>
        </div>
        <div mt-30>
          <n-input
            v-model:value="loginInfo.password"
            class="text-16 items-center h-50 pl-10"
            type="password"
            show-password-on="mousedown"
            placeholder="123456"
            :maxlength="20"
            @keydown.enter="handleLogin"
          />
        </div>

        <div mt-20>
          <n-checkbox :checked="isRemember" label="记住我" :on-update:checked="(val) => (isRemember = val)" />
        </div>

        <div mt-20>
          <n-button class="w-full h-50 rounded-5 text-16" type="primary" :loading="loging" @click="handleLogin"
            >登录</n-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from "@/store";
import { setToken, getUserInfo, setUserInfo, removeUserInfo } from "@/utils";
import { ref } from "vue";
import { useRouter } from "vue-router";
import bgImg from "@/assets/svg/cool-background.svg";

const title = import.meta.env.VITE_APP_TITLE;

const router = useRouter();

const auth = useAuthStore();

const loginInfo = ref({
  userName: "Admin",
  password: "123456",
});

const isRemember = ref(false);
const loging = ref(false);
async function handleLogin() {
  const { userName, password } = loginInfo.value;
  if (!userName || !password) {
    $message.warning("请输入用户名和密码");
    return;
  }
  await auth.login({ userName, password: password.toString() });
}
</script>
