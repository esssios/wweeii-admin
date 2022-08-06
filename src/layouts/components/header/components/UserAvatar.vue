<template>
  <n-dropdown :options="options" @select="handleSelect">
    <div flex items-center cursor-pointer>
      <img :src="userStore.avatar" mr10 w-35 h-35 rounded-full />
      <span>{{ userStore.name }}</span>
    </div>
  </n-dropdown>
</template>

<script setup>
import { useUserStore } from "@/store/modules/user";
import { renderIcon } from "@/utils/icon";

const userStore = useUserStore();

const options = [
  {
    label: "退出登录",
    key: "logout",
    icon: renderIcon("mdi:exit-to-app", { size: "14px" }),
  },
  {
    label: "切换角色",
    key: "switchRoles",
    icon: renderIcon("ant-design:user-switch-outlined", { size: "14px" }),
  },
];

function handleSelect(key) {
  console.log(this);
  if (key === "logout") {
    $dialog.info({
      title: "提示",
      content: "确认退出？",
      positiveText: "确定",
      negativeText: "不确定",
      onPositiveClick: () => {
        userStore.logout();
        $message.success("已退出登录");
      },
      onNegativeClick: () => {
        message.error("不确定");
      },
    });
  }
}
</script>
