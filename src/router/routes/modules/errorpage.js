import BasicLayout from "@/layouts/BasicLayout/index.vue";
import { views } from "@/views";

const errorPage = {
  name: "errorpage",
  path: "/errorpage",
  component: BasicLayout,
  meta: {
    title: "异常",
    icon: "carbon:error",
    order: 5,
  },
  children: [
    {
      name: "403",
      path: "/403",
      component: views["errorpage_403"],
      meta: {
        title: "403",
        icon: "tabler:error-403",
      },
    },
    {
      name: "404",
      path: "/404",
      component: views.errorpage_404,
      meta: {
        title: "404",
        icon: "tabler:error-404",
      },
    },
  ],
};

export default errorPage;
