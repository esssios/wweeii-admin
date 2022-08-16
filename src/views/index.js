const importViews = import.meta.glob("./**/index.vue");

const COMPONENTS_KEY = "components";
const PREFIX = "./";
const SUFFIX = "/index.vue";
const PATH_SPLIT_MARK = "/";
const ROUTE_KEY_SPLIT_MARK = "_";

/** 过滤掉组件文件 */
const viewKeys = Object.keys(importViews).filter((key) => !key.includes(COMPONENTS_KEY));

/** 获取页面组件 */
function getViewComponent() {
  const components = {};
  viewKeys.forEach((key) => {
    const routeKey = key
      .replace(PREFIX, "")
      .replace(SUFFIX, "")
      .replace(new RegExp(PATH_SPLIT_MARK, "g"), ROUTE_KEY_SPLIT_MARK)
    components[routeKey] = importViews[key];
  });

  return components;
}

export const views = getViewComponent();
