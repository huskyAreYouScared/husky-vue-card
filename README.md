# husky-vue-card

## demo (样品) 
  [demo](https://huskyareyouscared.github.io/husky-vue-card/dist/index.html)

## show (效果图)
  ![效果展示](https://huskyareyouscared.github.io/husky-vue-card/src/assets/demo.png)

## npm install plugin (安装插件)
```
npm install husky-vue-card -S
```

### use husky-vue-card (使用插件)
```
import huskyVueCard from 'husky-vue-card'

Vue.use(huskyVueCard)
```

### basic config
```
 <husky-vue-card
    cardTheme="purple"
    headerHight="40px"
    :titleDecoration="true"
    title="this is title"
    >
    <!-- this slot-->
  </husky-vue-card>
```

### API
|参数（parameter）|说明（description）|类型（type）|默认值（default）|
|：-|：-|：-|：-|
|cardTheme|card theme|String|blue、(available:orange、purple、green、pink)|
|headerHight|card height|String|46px|
|titleDecoration|card Decoration(卡片装饰)|Boolean|true|
|title|card title(卡片标题)|String|可以设置标题|
