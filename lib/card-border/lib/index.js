import cardBorder from './card-border.vue'

const vueCardBorder = {
  install (Vue, options) {
    Vue.component('card-border', cardBorder)
  }
}

export default vueCardBorder
