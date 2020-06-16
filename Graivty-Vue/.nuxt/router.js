import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _23cc80e5 = () => interopDefault(import('..\\pages\\Constilations\\index.vue' /* webpackChunkName: "pages_Constilations_index" */))
const _163d0186 = () => interopDefault(import('..\\pages\\Galaxies\\index.vue' /* webpackChunkName: "pages_Galaxies_index" */))
const _79950d43 = () => interopDefault(import('..\\pages\\Nebulae\\index.vue' /* webpackChunkName: "pages_Nebulae_index" */))
const _f0a6aa70 = () => interopDefault(import('..\\pages\\Stars\\index.vue' /* webpackChunkName: "pages_Stars_index" */))
const _11f79eea = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Constilations",
    component: _23cc80e5,
    name: "Constilations"
  }, {
    path: "/Galaxies",
    component: _163d0186,
    name: "Galaxies"
  }, {
    path: "/Nebulae",
    component: _79950d43,
    name: "Nebulae"
  }, {
    path: "/Stars",
    component: _f0a6aa70,
    name: "Stars"
  }, {
    path: "/",
    component: _11f79eea,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
