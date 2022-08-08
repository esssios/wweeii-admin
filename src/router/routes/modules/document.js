import BasicLayout from "@/layouts/BasicLayout/index.vue";
import { views } from "@/views";
const document = {
  name: "document",
  path: "/",
  component: BasicLayout,
  meta: {
    title: "文档",
    icon: "carbon:document",
    order: 2,
  },
  children: [
    {
      name: "document_vue",
      path: "/document/vue",
      component: views.document_vue,
      meta: {
        title: "vue文档",
        icon: "ion:logo-vue",
      },
    },
    {
      name: "document_react",
      path: "/document/react",
      component: views.document_react,
      meta: {
        title: "react文档",
        icon: "ion:logo-react",
      },
    },
  ],
};

export default document;
