<template>
  <div class="cus-scroll h-full py-15 flex-col overflow-auto bg-cover" :style="{ backgroundImage: `url(${bgImg})` }">
    <div class="m-auto p-15 flex-center min-w-345 rounded-10 card-shadow bg-white bg-opacity-60">
      <div class="w-320 flex-col px-20 py-35">
        <h5 class="flex-center text-24 font-normal" color="#6a6a6a"><icon-custom-logo mr-30 text-50 />{{ title }}</h5>
        <div mt-30>
          <n-input
            v-model:value="loginInfo.name"
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
import { login } from "@/api/auth";
import { lStorage } from "@/utils/cache";
import { setToken } from "@/utils/token";
import { ref } from "vue";
import { useRouter } from "vue-router";
import bgImg from "@/assets/svg/cool-background.svg";

const title = import.meta.env.VITE_APP_TITLE;

const router = useRouter();

const loginInfo = ref({
  name: "",
  password: "",
});

initLoginInfo();

function initLoginInfo() {
  const localLoginInfo = lStorage.get("loginInfo");
  if (localLoginInfo) {
    loginInfo.value.name = localLoginInfo.name || "";
    loginInfo.value.password = localLoginInfo.password || "";
  }
}

const isRemember = ref(false);
async function handleLogin() {
  const { name, password } = loginInfo.value;
  if (!name || !password) {
    $message.warning("请输入用户名和密码");
    return;
  }
  try {
    const res = await login({ name, password: password.toString() });
    if (res.code === 0) {
      $message.success("登录成功");
      setToken(res.data.token);
      if (isRemember.value) {
        lStorage.set("loginInfo", { name, password });
      } else {
        lStorage.remove("loginInfo");
      }
      router.push("/");
    } else {
      $message.warning(res.message);
    }
  } catch (error) {
    $message.error(error.message);
  }
}
</script>
