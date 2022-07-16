import Layout from "@/layout/index.vue";
// import Home from '@/views/dashboard/index.vue'

export const basicRoutes = [
  {
    name: "404",
    path: "/404",
    component: () => import("@/views/error_page/404.vue"),
    isHidden: true,
  },
  {
    name: "REDIRECT",
    path: "/redirect",
    component: Layout,
    isHidden: true,
    children: [
      {
        name: "REDIRECT_NAME",
        path: "",
        component: () => import("@/views/redirect/index.vue"),
      },
    ],
  },
  {
    name: "LOGIN",
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    isHidden: true,
    meta: {
      title: "登录页",
    },
  },

  {
    name: "Dashboard",
    path: "/",
    component: Layout,
    redirect: "/workbench",
    meta: {
      title: "仪表盘",
      icon: "icon-park-outline:dashboard",
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
  },

  {
    name: "Document",
    path: "/document",
    component: Layout,
    redirect: "/document/vue_document",
    meta: {
      title: "文档",
      icon: "carbon:document",
    },
    children: [
      {
        name: "vue_document",
        path: "vue_document",
        component: () => import("@/views/document/vue_document/index.vue"),
        meta: {
          title: "vue文档",
          icon: "ion:logo-vue",
        },
      },
      {
        name: "react_document",
        path: "react_document",
        component: () => import("@/views/document/react_document/index.vue"),
        meta: {
          title: "react文档",
          icon: "ion:logo-react",
        },
      },
    ],
  },

  {
    name: "ErrorPage",
    path: "/error_page",
    component: Layout,
    redirect: "/error_page/404",
    meta: {
      title: "异常",
      icon: "carbon:error",
      index: 4,
    },
    children: [
      {
        name: "ERROR_404",
        path: "404",
        component: () => import("@/views/error_page/404.vue"),
        meta: {
          title: "404",
          icon: "tabler:error-404",
        },
      },
    ],
  },

  {
    name: "Test",
    path: "/test",
    component: Layout,
    redirect: "/test/unocss",
    meta: {
      title: "测试",
      icon: "file-icons:test-js",
    },
    children: [
      {
        name: "Unocss",
        path: "unocss",
        component: () => import("@/views/test_page/unocss/index.vue"),
        meta: {
          title: "测试Unocss",
        },
      },
      {
        name: "Message",
        path: "message",
        component: () => import("@/views/test_page/message/index.vue"),
        meta: {
          title: "测试Message",
        },
      },
    ],
  },

  // {
  //   name: 'ExternalLink',
  //   path: '/external-link',
  //   component: Layout,
  //   meta: {
  //     title: '外部链接',
  //     icon: 'mdi:link-variant',
  //   },
  //   children: [{
  //       name: 'LinkGithubSrc',
  //       path: 'https://github.com/zclzone/vue-naive-admin',
  //       meta: {
  //         title: '源码 - github',
  //         icon: 'mdi:github',
  //       },
  //     },
  //     {
  //       name: 'LinkGiteeSrc',
  //       path: 'https://gitee.com/zclzone/vue-naive-admin',
  //       meta: {
  //         title: '源码 - gitee',
  //         icon: 'simple-icons:gitee',
  //       },
  //     },
  //     {
  //       name: 'LinkDocs',
  //       path: 'https://zclzone.github.io/vue-naive-admin-docs',
  //       meta: {
  //         title: '文档 - vuepress',
  //         icon: 'mdi:vuejs',
  //       },
  //     },
  //   ],
  // },
];

export const NOT_FOUND_ROUTE = {
  name: "NotFound",
  path: "/:pathMatch(.*)*",
  redirect: "/404",
  isHidden: true,
};

const modules = import.meta.globEager("./modules/*.js");
const asyncRoutes = [];
Object.keys(modules).forEach((key) => {
  asyncRoutes.push(...modules[key].default);
});

export { asyncRoutes };
