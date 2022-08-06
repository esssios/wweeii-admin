import BasicLayout from "@/layouts/BasicLayout/index.vue";
import { handleModuleRoutes } from "@/utils/router/module";
const modules = import.meta.globEager("./modules/*.js");
const routes = handleModuleRoutes(modules);

export const basicRoutes = [
  ...routes,
  {
    name: "404",
    path: "/404",
    component: () => import("@/views/error_page/404.vue"),
    isHidden: true,
  },
  {
    name: "REDIRECT",
    path: "/redirect",
    component: BasicLayout,
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
    name: "ErrorPage",
    path: "/error_page",
    component: BasicLayout,
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
    component: BasicLayout,
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
];

export const NOT_FOUND_ROUTE = {
  name: "NotFound",
  path: "/:pathMatch(.*)*",
  redirect: "/404",
  isHidden: true,
};

// const modules = import.meta.globEager("./modules/*.js");
const asyncRoutes = [];
// Object.keys(modules).forEach((key) => {
//   asyncRoutes.push(...modules[key].default);
// });

export { asyncRoutes };
