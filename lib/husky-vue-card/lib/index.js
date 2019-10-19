import cardBorder from './card-border.vue'
import overflowHidden from './overflowHidden.js'
const vueCardBorder = {
  install (Vue, options) {
    Vue.component('husky-vue-card', cardBorder)
    Vue.directive('overflowHidden', overflowHidden)
  }
}

export default vueCardBorder
