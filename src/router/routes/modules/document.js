import BasicLayout from "@/layouts/BasicLayout/index.vue";
const document = {
  name: "Document",
  path: "/document",
  component: BasicLayout,
  redirect: "/document/vue_document",
  meta: {
    title: "文档",
    icon: "carbon:document",
    order: 2,
  },
  children: [
    {
      name: "vue_document",
      path: "vue_document",
      component: () => import("@/views/document/vue_document/index.vue"),
      meta: {
        title: "vue文档",
        icon: "ion:logo-vue",
      },
    },
    {
      name: "react_document",
      path: "react_document",
      component: () => import("@/views/document/react_document/index.vue"),
      meta: {
        title: "react文档",
        icon: "ion:logo-react",
      },
    },
  ],
};

export default document;
