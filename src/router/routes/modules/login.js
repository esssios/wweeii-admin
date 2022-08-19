import { views } from "@/views";

const login = {
  name: "login",
  path: "/login",
  component: views.login,
  isHidden: true,
  meta: {
    title: "登录页",
  },
};

export default login;
