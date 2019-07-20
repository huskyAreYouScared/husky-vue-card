import cardBorder from './card-border.vue'

const vueCardBorder = {
  install (Vue, options) {
    Vue.component('husky-vue-card', cardBorder)
  }
}

export default vueCardBorder
