import BasicLayout from "@/layouts/BasicLayout/index.vue";
const dashboard = {
  name: "Dashboard",
  path: "/",
  component: BasicLayout,
  redirect: "/workbench",
  meta: {
    title: "仪表盘",
    icon: "icon-park-outline:dashboard",
    order: 1,
  },
  children: [
    {
      name: "dashboard_workbench",
      path: "workbench",
      component: () => import("@/views/dashboard/workbench/index.vue"),
      meta: {
        title: "工作台",
        icon: "icon-park-outline:workbench",
      },
    },
    {
      name: "dashboard_analysis",
      path: "analysis",
      component: () => import("@/views/dashboard/analysis/index.vue"),
      meta: {
        title: "分析页",
        icon: "icon-park-outline:analysis",
      },
    },
  ],
};

export default dashboard;
