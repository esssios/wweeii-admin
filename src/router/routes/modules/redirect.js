import BasicLayout from "@/layouts/BasicLayout/index.vue";
import {
    views
} from "@/views";

const redirect = {
    name: "redirect",
    path: "/redirect",
    component: BasicLayout,
    isHidden: true,
    children: [{
        name: "REDIRECT_NAME",
        path: "",
        component: views.redirect,
    }, ],
}

export default redirect;