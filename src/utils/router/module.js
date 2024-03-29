/**
 * 权限路由排序
 * @param routes - 权限路由
 */
function sortRoutes(routes) {
  return routes.sort((next, pre) => Number(next.meta?.order) - Number(pre.meta?.order));
}

/**
 * 处理全部导入的路由模块
 * @param modules - 路由模块
 */
export function handleModuleRoutes(modules) {
  const routes = [];
  Object.keys(modules).forEach((key) => {
    const item = modules[key].default;
    if (item) {
      routes.push(item);
    } else {
      window.console.error(`路由模块解析出错: key = ${key}`);
    }
  });

  return sortRoutes(routes);
  // return routes
}
