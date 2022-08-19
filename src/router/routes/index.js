import { handleModuleRoutes } from "@/utils/router/module";
const modules = import.meta.globEager("./modules/*.js");
const routes = handleModuleRoutes(modules);

/** 根路由: / */
export const ROOT_ROUTE = {
  name: "root",
  path: "/",
  redirect: import.meta.env.VITE_ROUTE_HOME_PATH,
  isHidden: true,
  meta: {
    title: "Root",
  },
};

export const basicRoutes = [
  ROOT_ROUTE,
  ...routes,
  // {
  //   name: "404",
  //   path: "/404",
  //   component: () => import("@/views/error-page/404.vue"),
  //   isHidden: true,
  // }
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
