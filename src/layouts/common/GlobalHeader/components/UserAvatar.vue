<template>
  <n-dropdown :options="options" @select="handleSelect">
    <div flex items-center cursor-pointer>
      <icon-custom-avatar class="text-32px" />
      <span>{{ auth.userInfo.userName }}</span>
    </div>
  </n-dropdown>
</template>

<script setup>
import { useAuthStore } from "@/store";
import { renderIcon } from "@/utils";

const auth = useAuthStore();

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
  if (key === "logout") {
    $dialog.info({
      title: "提示",
      content: "确认退出？",
      positiveText: "确定",
      negativeText: "不确定",
      onPositiveClick: () => {
        auth.resetAuthStore();
        $message.success("已退出登录");
      },
      onNegativeClick: () => {
        message.error("不确定");
      },
    });
  }
}
</script>
