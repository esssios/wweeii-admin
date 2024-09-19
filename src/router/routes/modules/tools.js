import BasicLayout from "@/layouts/BasicLayout/index.vue";
import { views } from "@/views";
const tools = {
  name: "tools",
  path: "/tools",
  component: BasicLayout,
  meta: {
    title: "工具",
    icon: "carbon:tools",
    order: 4,
  },
  children: [
    {
      name: "transfer",
      path: "/tools/Transfer",
      component: views.tools_Transfer,
      meta: {
        title: "穿梭框",
        icon: "tabler:arrows-exchange-2",
      },
    },
    {
      name: "other",
      path: "/tools/Other",
      component: views.tools_Other,
      meta: {
        title: "其它",
        icon: "tabler:arrows-exchange-2",
      },
    },
  ],
};

export default tools;
