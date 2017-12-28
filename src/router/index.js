import Vue from 'vue'
import Router from 'vue-router'
import Player from 'components/player/player.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'player',
      component: Player
    }
  ]
})
