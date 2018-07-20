<template>
    <div>
        <!-- <h1>钱包</h1> -->
        <van-goods-action class="money">
            <van-goods-action-mini-btn icon="chat" text="客服" />
            <van-goods-action-mini-btn icon="cart" text="购物车" :info=this.$store.getters.showCount />
            <van-goods-action-mini-btn icon="shop" text="店铺" />
            <van-goods-action-big-btn text="加入购物车" @click="onClickBigBtn" />
            <van-goods-action-big-btn text="立即购买" primary />
        </van-goods-action>
    </div>
</template>
<script>
export default {
  created() {
  },
  data:()=>({
  }),
  methods:{
      onClickBigBtn:function(){
          this.$store.commit("addCount")
      }
  }
};
</script>
<style lang="scss" scoped>

.money {
  top: 50%;
  height: 50px;
  position: static;
  // position: absolute;
}
</style>


