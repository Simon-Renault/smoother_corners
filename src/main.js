import DefaultLayout from "~/layouts/Default.vue";

import "@/assets/main.scss"

export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
}
