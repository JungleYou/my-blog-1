import VueRouter from "vue-router";
// 解决编程路由导航反复点击报错问题
const includPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return includPush.call(this, location).catch((err) => err);
};
VueRouter.prototype.replace = function replace(location) {
  return includPush.call(this, location).catch((err) => err);
};
// index.js注册路由
const router = new VueRouter({
  routes: [
    {
      path: "*",
      redirect: "/homePage",
    },
    {
      name: "homePage",
      path: "/homePage",
      component: () => import("@/pages/home-page"),
    },
    {
      name: "blogInfo",
      path: "/blogInfo",
      component: () => import("@/pages/blog-info"),
    },
  ],
});
export default router;
