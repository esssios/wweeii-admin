// import { EnumStorageKey } from '@/enum';
import { router } from "@/router";
import { getLocal, removeLocal, setLocal } from "../storage/local";

/** 设置token */
export function setToken(token) {
  setLocal("__TOKEN__", token);
}

/** 获取token */
export function getToken() {
  console.log("getToken");
  return getLocal("__TOKEN__") || "";
}

/** 去除token */
export function removeToken() {
  removeLocal("__TOKEN__");
}

/** 获取refresh token */
export function getRefreshToken() {
  return getLocal("__REFRESH_TOKEN__") || "";
}

/** 设置refresh token */
export function setRefreshToken(token) {
  setLocal("__REFRESH_TOKEN__", token);
}

/** 去除refresh token */
export function removeRefreshToken() {
  removeLocal("__REFRESH_TOKEN__");
}

/** 获取用户信息 */
export function getUserInfo() {
  const emptyInfo = {
    userId: "",
    userName: "",
    userRole: "",
  };
  const userInfo = getLocal("__USER_INFO__") || emptyInfo;
  return userInfo;
}

/** 设置用户信息 */
export function setUserInfo(userInfo) {
  setLocal("__USER_INFO__", userInfo);
}

/** 去除用户信息 */
export function removeUserInfo() {
  removeLocal("__USER_INFO__");
}

/** 去除用户相关缓存 */
export function clearAuthStorage() {
  removeToken();
  removeRefreshToken();
  removeUserInfo();
}

export function toLogin() {
  router.replace({
    path: "/login",
  });
}
