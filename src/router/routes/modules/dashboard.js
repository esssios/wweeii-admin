import BasicLayout from "@/layouts/BasicLayout/index.vue";
import { views } from "@/views";
const dashboard = {
  name: "dashboard",
  path: "/",
  component: BasicLayout,
  redirect: "/dashboard/workbench",
  meta: {
    title: "仪表盘",
    icon: "icon-park-outline:dashboard",
    order: 1,
  },
  children: [
    {
      name: "dashboard_workbench",
      path: "/dashboard/workbench",
      component: views.dashboard_workbench,
      meta: {
        title: "工作台",
        icon: "icon-park-outline:workbench",
      },
    },
    {
      name: "dashboard_analysis",
      path: "/dashboard/analysis",
      component: views.dashboard_analysis,
      meta: {
        title: "分析页",
        icon: "icon-park-outline:analysis",
      },
    },
  ],
};

export default dashboard;
