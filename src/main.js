import Vue from "vue";
import App from "./App.vue";

import VueRouter from "vue-router";
import router from "@/router";
Vue.use(VueRouter);
import myNotice from "@/components/my-notice";
Vue.component(myNotice.name, myNotice);
import myNews from "@/components/my-news";
Vue.component(myNews.name, myNews);

Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
