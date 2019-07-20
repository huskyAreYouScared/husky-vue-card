<template>
  <div class="home">
    <div class="card-demo">
      <husky-vue-card
        cardTheme="purple"
        headerHight="40px"
        :titleDecoration="true"
        title="this is title"
        >
        <div class="test">
          <span>content</span>
          <p>test</p>
        </div>
      </husky-vue-card>
    </div>
    <div class="card-demo">
      <husky-vue-card>
        <div class="test">
          <span>content</span>
          <p>test</p>
        </div>
      </husky-vue-card>
    </div>
    <div class="card-demo">
      <husky-vue-card cardTheme="orange">
        <div class="test">
          <span>content</span>
          <p>test</p>
        </div>
      </husky-vue-card>
    </div>
    <div class="card-demo">
      <husky-vue-card cardTheme="green">
        <div class="test">
          <span>content</span>
          <p>test</p>
        </div>
      </husky-vue-card>
    </div>
    <div class="card-demo">
      <husky-vue-card cardTheme="purple" :titleDecoration="false" title="我是标题1">
        <div class="test">
          <span>content</span>
          <p>test</p>
        </div>
      </husky-vue-card>
    </div>
    <div class="card-demo">
      <husky-vue-card :titleDecoration="false" title="我是标题2">
        <div class="test">
          <span>content</span>
          <p>test</p>
        </div>
      </husky-vue-card>
    </div>
    <div class="card-demo">
      <husky-vue-card cardTheme="orange" :titleDecoration="false" title="我是标题3">
        <div class="test">
          <span>content</span>
          <p>test</p>
        </div>
      </husky-vue-card>
    </div>
    <div class="card-demo">
      <husky-vue-card cardTheme="green" :titleDecoration="false" title="我是标题4">
        <div class="test">
          <span>content</span>
          <p>test</p>
        </div>
      </husky-vue-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {}
}
</script>
<style lang="scss" scoped>
.home {
  width: 80%;
  position: absolute;
  left: 10%;
  top: 10%;
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-template-rows: repeat(8, auto);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  .card-demo {
    height: 300px;

    .test {
      box-shadow: #fff 1px 1px 10px;
      width: 100%;
      height: 200px;
      background: rgba(255, 255, 255, 0.1);
      font-size: 2em;
      text-align: center;
      color: #fff;
    }
  }
}
</style>
