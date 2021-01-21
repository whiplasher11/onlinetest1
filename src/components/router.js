import Vue from "vue";
import Father from "./Father";
import Son from "./Son";
import Helloword from "./HelloWorld";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/fa", component: Father },
    { path: "/son", component: Son },
    { path: "/home", component: Helloword },

    { path: "/", redirect: "/home" }
  ]
});
//挂载路由导航守卫
router.beforeEach((to, from, next) => {
  //to 将要访问的路径
  //from 从哪个路径过来
  next();
});
export default router;
