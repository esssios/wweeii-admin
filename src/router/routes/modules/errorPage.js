import BasicLayout from "@/layouts/BasicLayout/index.vue";
import { views } from "@/views";

const errorPage = {
  name: "error-page",
  path: "/error-page",
  component: BasicLayout,
  meta: {
    title: "异常",
    icon: "carbon:error",
    order: 4,
  },
  children: [
    {
      name: "404",
      path: "404",
      component: () => import("@/views/error-page/404.vue"),
      meta: {
        title: "404",
        icon: "tabler:error-404",
      },
    },
  ],
};

export default errorPage;
