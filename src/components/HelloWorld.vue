<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>
      本A页面加载时发送消息到B页面，触发B页面的打印vueComponent函数,来回点几次发现并没有销毁，钩子函数没有起作用，这种情况下怎样才能销毁页面呢
    </h3>
    <ul>
      <li>
        <a style="cursor: pointer" @click="gofa">进入B页面</a>
      </li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import Utils from "./Util";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    gofa() {
      this.$router.replace("/fa");
    },
  },
  mounted() {
    console.log("A组件发送");
    Utils.$emit("message");
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
