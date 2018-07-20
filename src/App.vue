<template>
  <div id="app" style="overflow-x:hidden">
    <van-nav-bar 
  title="标题"
  :left-text=lefttext
  :left-arrow=arrow
  @click-left="onClickLeft"
/>
    <transition>
        <router-view ></router-view>    
    </transition>
    <van-tabbar v-model="active">
  <van-tabbar-item to="/home" icon="shop">首页</van-tabbar-item>
  <van-tabbar-item to="/messages" icon="chat" dot>消息</van-tabbar-item>
  <van-tabbar-item to="/texte" icon="records" info="5">便签</van-tabbar-item>
  <van-tabbar-item to="/money" icon="gold-coin" :info=this.$store.getters.showCount>钱包</van-tabbar-item>
</van-tabbar>
 
  </div>
</template>
<script>
export default {
  name: "App",
  created() {
    console.log(this.$route);
    if (this.$route.path === "/home") {
      this.arrow = false;
      this.lefttext = "";
    } else {
      this.arrow = true;
      this.lefttext = "返回";
    }
   this.moneyInfo=this.$store.state.count;
  },
  data: () => ({
    msg: "hello world",
    active: 0,
    arrow: true,
    lefttext: "返回",
    // moneyInfo:0
  }),
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  watch: {
    "$route.path": function(newValue) {
      if (newValue === "/home") {
        this.arrow = false;
        this.lefttext = "";
      } else {
        this.arrow = true;
        this.lefttext = "返回";
      }
    }
  }
};
</script>

<style lang="scss">
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-leave.active,
.v-enter-active {
  transition: all 0.5s ease;
}
</style>

