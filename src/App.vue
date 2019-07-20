<template>
  <div id="app">
    <router-view/>
    <div class="verson">背景图片来源于网络</div>
  </div>
</template>

<style lang="scss">
html,body{
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background: url('./assets/bg.jpg') no-repeat;
  background-size: 100% 100%;
  filter: blur(0.5)
}
.verson{
  position: absolute;
  bottom: 0px;
  right: 0px;
}
</style>
