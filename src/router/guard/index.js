// import { createPageLoadingGuard } from "./page-loading-guard";
// import { createPageTitleGuard } from "./page-title-guard";
// import { createPermissionGuard } from "./permission-guard";

// export function setupRouterGuard(router) {
//   createPageLoadingGuard(router);
//   createPermissionGuard(router);
//   createPageTitleGuard(router);
// }

// import type {
//   Router
// } from 'vue-router';
import { useTitle } from "@vueuse/core";
import { createPermissionGuard } from "./permission";

/**
 * 路由守卫函数
 * @param router - 路由实例
 */
export function setupRouterGuard(router) {
  router.beforeEach(async (to, from, next) => {
    // 开始 loadingBar
    window.$loadingBar?.start();
    // 页面跳转权限处理
    await createPermissionGuard(to, from, next);
  });
  router.afterEach((to) => {
    // 设置document title
    useTitle(to.meta.title);
    // 结束 loadingBar
    window.$loadingBar?.finish();
  });
}
