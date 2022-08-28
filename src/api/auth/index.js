import { defAxios as request } from "@/utils/http";

export const fetchLogin = (data) => {
  return request({
    url: "/auth/login",
    method: "post",
    data,
  });
};

export const fetchUserInfo = () => {
  return request({
    url: "/auth/getUserInfo",
    method: "get",
  });
};

export const refreshToken = () => {
  return request({
    url: "/auth/refreshToken",
    method: "post",
  });
};
