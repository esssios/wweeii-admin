import { unref } from "vue";
import { defineStore } from "pinia";
import { router } from "@/router";
import { fetchLogin, fetchUserInfo } from "@/api";
import { useRouterPush } from "@/composables";
import { clearAuthStorage, getToken, getUserInfo, setRefreshToken, setToken, setUserInfo } from "@/utils";
import { useTagsStore } from "../tag";

export const useAuthStore = defineStore("auth-store", {
  state: () => ({
    /** 用户信息 */
    userInfo: getUserInfo(),
    /** 用户信息 */
    token: getToken(),
    /** 登录的加载状态 */
    loginLoading: false,
  }),
  getters: {
    /** 是否登录 */
    isLogin(state) {
      return Boolean(state.token);
    },
  },
  actions: {
    /** 重置auth状态 */
    resetAuthStore() {
      const { toLogin } = useRouterPush(false);
      const { removeTag } = useTagsStore();
      const route = unref(router.currentRoute);

      clearAuthStorage();
      this.$reset();

      removeTag();

      if (route.meta.requiresAuth) {
        toLogin();
      }
    },
    /**
     * 处理登录后成功或失败的逻辑
     * @param backendToken - 返回的token
     */
    async handleActionAfterLogin(backendToken) {
      const { toLoginRedirect } = useRouterPush(false);

      const loginSuccess = await this.loginByToken(backendToken);

      if (loginSuccess) {
        // 跳转登录后的地址
        toLoginRedirect();

        // 登录成功弹出欢迎提示
        window.$notification?.success({
          title: "登录成功!",
          content: `欢迎回来，${this.userInfo.userName}!`,
          duration: 3000,
        });

        return;
      }

      // 不成功则重置状态
      this.resetAuthStore();
    },
    /**
     * 根据token进行登录
     * @param backendToken - 返回的token
     */
    async loginByToken(backendToken) {
      let successFlag = false;

      // 先把token存储到缓存中(后面接口的请求头需要token)
      const { token, refreshToken } = backendToken;
      setToken(token);
      setRefreshToken(refreshToken);

      // 获取用户信息
      const { data } = await fetchUserInfo();
      if (data) {
        // 成功后把用户信息存储到缓存中
        setUserInfo(data);

        // 更新状态
        this.userInfo = data;
        this.token = token;

        successFlag = true;
      }

      return successFlag;
    },
    /**
     * 登录
     * @param userName - 用户名
     * @param password - 密码
     */
    async login(userName, password) {
      this.loginLoading = true;
      const { data } = await fetchLogin(userName, password);
      console.log("data", data);
      if (data) {
        await this.handleActionAfterLogin(data);
      }
      this.loginLoading = false;
    },
    /**
     * 更换用户权限(切换账号)
     * @param userRole
     */
    async updateUserRole(userRole) {
      const { resetRouteStore, initAuthRoute } = useRouteStore();

      const accounts = {
        super: {
          userId: 0,
          userName: "Super",
          password: "123456",
        },
        admin: {
          userId: 1,
          userName: "Admin",
          password: "123456",
        },
        user: {
          userId: 2,
          userName: "User",
          password: "123456",
        },
      };
      const { userName, password } = accounts[userRole];
      const { data } = await fetchLogin(userName, password);
      if (data) {
        await this.loginByToken(data);
        resetRouteStore();
        initAuthRoute();
      }
    },
  },
});
