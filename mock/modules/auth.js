import { resolveToken } from "../utils";

const ERROR_PARAM_CODE = 10000;
const ERROR_PARAM_MSG = "参数校验失败！";

const userModel = [
  {
    token: "__TOKEN_SUPER__",
    refreshToken: "__REFRESH_TOKEN_SUPER__",
    userId: "0",
    userName: "Super",
    userRole: "super",
    password: "123456",
  },
  {
    token: "__TOKEN_ADMIN__",
    refreshToken: "__REFRESH_TOKEN_ADMIN__",
    userId: "1",
    userName: "Admin",
    userRole: "admin",
    password: "123456",
  },
  {
    token: "__TOKEN_USER__",
    refreshToken: "__REFRESH_TOKEN_USER__",
    userId: "2",
    userName: "User",
    userRole: "user",
    password: "123456",
  },
];

export default [
  {
    url: "/api/auth/login",
    method: "post",
    response: (options) => {
      const { userName = undefined, password = undefined } = options.body;

      if (!userName || !password) {
        return {
          code: ERROR_PARAM_CODE,
          message: ERROR_PARAM_MSG,
          data: null,
        };
      }

      const findItem = userModel.find((item) => item.userName === userName && item.password === password);

      if (findItem) {
        return {
          code: 200,
          message: "ok",
          data: {
            token: findItem.token,
            refreshToken: findItem.refreshToken,
          },
        };
      }
      return {
        code: 1000,
        message: "用户名或密码错误！",
        data: null,
      };
    },
  },
  // 获取用户信息(请求头携带token, 根据token获取用户信息)
  {
    url: "/api/auth/getUserInfo",
    method: "get",
    response: (options) => {
      // 这里的mock插件得到的字段是authorization, 前端传递的是Authorization字段
      const { authorization = "" } = options.headers;
      console.log("authorization", authorization);
      const REFRESH_TOKEN_CODE = 66666;

      if (!authorization) {
        return {
          code: REFRESH_TOKEN_CODE,
          message: "用户已失效或不存在！",
          data: null,
        };
      }
      const userInfo = {
        userId: "",
        userName: "",
        userRole: "user",
      };
      const isInUser = userModel.some((item) => {
        const flag = item.token === resolveToken(authorization);
        if (flag) {
          const { userId: itemUserId, userName, userRole } = item;
          Object.assign(userInfo, { userId: itemUserId, userName, userRole });
        }
        return flag;
      });

      if (isInUser) {
        return {
          code: 200,
          message: "ok",
          data: userInfo,
        };
      }

      return {
        code: REFRESH_TOKEN_CODE,
        message: "用户信息异常！",
        data: null,
      };
    },
  },
  {
    url: "/api/auth/refreshToken",
    method: "post",
    response: ({ headers }) => {
      return {
        code: 0,
        data: {
          token: resolveToken(headers?.authorization),
        },
      };
    },
  },
];
