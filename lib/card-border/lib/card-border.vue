<!--  -->
<template>
  <div class='card-container'>
    <div class="card-header" :class="selfTheme" :style="{height:headerHight,lineHeight:headerHight}">
      <span v-show="titleDecoration" class="card-header-small"></span>
      <span v-show="titleDecoration" class="card-header-middle"></span>
      <span class="card-title">{{title}}</span>
      <span v-show="titleDecoration" class="card-header-middle"></span>
      <span v-show="titleDecoration" class="card-header-small"></span>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    // 设置卡片标题
    title: {
      type: String,
      default: '可以设置标题'
    },
    // 卡片标题装饰物是否显示
    titleDecoration: {
      type: Boolean,
      default: true
    },
    // 卡片的主题色
    cardTheme: {
      type: String,
      default: 'blue'
    },
    // 卡片的高度
    headerHight: {
      type: String,
      default: '46px'
    }
  },
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    // 这里存放数据
    return {
      selfTheme: {
        [this.cardTheme]: true
      }
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  }
}
</script>
<style  scoped>
  .card-container{
    width: 100%;
    height: auto;
    padding: 0px;
    margin: 0px;
  }
  .card-header{
    width: 100%;
    /* height:46px; */
    text-align: center;
    border-radius:6px 6px 0px 0px;
    /* line-height: 46px; */
  }
  .card-header-small::before{
    margin-left: 0.5vw;
    margin-right: 0.5vw;
    content: "";
    color: #fff;
    width: 0.5vw;
    height: 0.5vw;
    background: #fff;
    display: inline-block;
    transform: rotateZ(45deg) scale(0.7);
  }
  .card-header-middle::before{
    margin-left: 0.6vw;
    margin-right: 0.6vw;
    content: "";
    color: #fff;
    width: 0.5vw;
    height: 0.5vw;
    background: #fff;
    display: inline-block;
    transform: rotateZ(45deg) scale(0.9);
  }
  .card-title{
    color: #fff;
    font-size: 22px;
  }

  /* 主题色  theme */
  .orange{
     background:linear-gradient(-78deg,rgba(251,119,81,1),rgba(244,159,66,1));
  }
  .blue{
    background:linear-gradient(-51deg,rgba(94,223,240,0.96),rgba(11,184,248,0.96));
  }
  .green{
     background:linear-gradient(-78deg,rgba(57,233,178,1),rgba(67,233,214,1));
  }
  .purple{
     background:linear-gradient(-78deg,rgba(109,86,251,1),rgba(155,86,251,1));
  }
  .pink{
     background:linear-gradient(-78deg,rgba(249,77,144,0.96),rgba(249,74,75,0.96));
  }
</style>
