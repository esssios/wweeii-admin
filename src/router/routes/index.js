import { handleModuleRoutes } from "@/utils/router/module";
const modules = import.meta.globEager("./modules/*.js");
const routes = handleModuleRoutes(modules);
export const basicRoutes = [
  ...routes,
  {
    name: "404",
    path: "/404",
    component: () => import("@/views/error-page/404.vue"),
    isHidden: true,
  }
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
