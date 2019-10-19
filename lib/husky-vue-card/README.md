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
  cardTheme="green" 
  :titleShow="false" 
  :titleDecoration="false" 
  title="dajiahao">
  <template v-slot:iconTitle>
    <img src="../assets/fund-fill.svg" alt="">
  </template>
  <template v-slot:body>
      <div class="test">
      <span>content</span>
      <p>test</p>
    </div>
  </template>
</husky-vue-card>
```

### API
| parameter（参数） | description（说明） | type（类型） | default（默认值） |
| :- | :- | :- | :- |
| cardTheme | card theme | String | blue、(available:orange、purple、green、pink) |
| headerHight | card height | String | 46px |
| titleDecoration | card Decoration(卡片装饰) | Boolean | true |
| titleShow | Card text title can be hidden(卡片文字标题可以隐藏) | Boolean | true |
| title | card title(卡片标题) | String | 可以设置标题 |

### slot
| slot name(插槽名称) | description（说明） |
| :- | :- |
| iconTitle（图片标题） |  add icon title（添加图片标题） |
| body（卡片主体） | add card body content（添加卡片主题内容） |

### 指令（directive）
| directive name(指令名称) | description（说明） |
| :- | :- |
| v-overflowHidden |  [to FAQ no:1](#FAQ) |


### FAQ

```
  1. 原因：CSS2.1的盒模型中规定,所有毗邻的两个或更多盒元素的margin将会合并为一个margin共享
  (In this specification, the expression collapsing margins means that adjoining margins (no non-empty content, padding or border areas or clearance separate them) of two or more boxes (which may be next to one another or nested) combine to form a single margin. )
  
  (解决办法：在body solt的父容器上加入v-overflowHidden)

  eg:
  <husky-vue-card cardTheme="green"  :titleDecoration="false" title="欢迎使用">
    <template v-slot:body>
        <div class="test" v-overflowHidden>
          <div style="margin-top:50px" >使用v-overflowHidden指令
            来避免所有毗邻的两个或更多盒元素的margin将会合并为一个margin共享
          </div>
      </div>
    </template>
    <template v-slot:iconTitle>
        <img src="../assets/fund-fill.svg" alt="">
    </template>
  </husky-vue-card>
```