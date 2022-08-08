import BasicLayout from "@/layouts/BasicLayout/index.vue";
import { views } from "@/views";
const test = {
  name: "test",
  path: "/",
  component: BasicLayout,
  meta: {
    title: "测试",
    icon: "file-icons:test-js",
  },
  children: [
    {
      name: "test_unocss",
      path: "/test/unocss",
      component: views.test_unocss,
      meta: {
        title: "测试Unocss",
      },
    },
    {
      name: "test_message",
      path: "/test/message",
      component: views.test_message,
      meta: {
        title: "测试Message",
      },
    },
  ],
};

export default test;
