# husky-vue-card

## introduction （介绍）

* High card flexibility（卡片灵活度高）
* Support custom configurations such as titles, decorations, custom slots, etc.（支持标题、装饰物、自定义插槽等灵活的自定义配置）
* Continuously update, focus on card component development（持续更新、专注卡片组件开发）

## demo (样品) 
  [demo](https://huskyareyouscared.github.io/husky-vue-card/dist/index.html)

## show (效果图)
  ![效果展示](https://huskyareyouscared.github.io/husky-vue-card/src/assets/demo.png)

## npm install plugin (安装插件)
```
npm install husky-vue-card -S
```
### use husky-vue-card (使用插件)
```javascript
import huskyVueCard from 'husky-vue-card'
Vue.use(huskyVueCard)
```

### basic config
```html
<husky-vue-card
  cardTheme="purple"
  headerHight="40px"
  :titleDecoration="true"
  title="this is title"
  >
  <div>custom content</div>
</husky-vue-card>
```

### API
| 参数（parameter） | 说明（description） | 类型（type） | 默认值（default） |
| :- | :- | :- | :- |
| cardTheme | card theme | String | blue、(available:orange、purple、green、pink) |
| headerHight | card height | String | 46px |
| titleDecoration | card Decoration(卡片装饰) | Boolean | true |
| title | card title(卡片标题) | String | 可以设置标题 |