<template>
  <div>
    <div>这是B页面</div>
    <br />
    <div @click="$router.replace('/home')" style="cursor: pointer">
      点击返回A页面
    </div>
  </div>
</template>

<script>
import Utils from "./Util";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  mounted() {
    var that = this;
    console.log("B");
    console.log(this);
    Utils.$on("message", function () {
      console.log("收到");
      console.log(that);
    });
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
