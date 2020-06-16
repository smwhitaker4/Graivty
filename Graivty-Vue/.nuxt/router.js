import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1d184400 = () => interopDefault(import('../pages/Constilations/index.vue' /* webpackChunkName: "pages/Constilations/index" */))
const _5d88ae28 = () => interopDefault(import('../pages/Galaxies/index.vue' /* webpackChunkName: "pages/Galaxies/index" */))
const _749c63e2 = () => interopDefault(import('../pages/Nebulae/index.vue' /* webpackChunkName: "pages/Nebulae/index" */))
const _8b9fdc86 = () => interopDefault(import('../pages/Stars/index.vue' /* webpackChunkName: "pages/Stars/index" */))
const _a9263868 = () => interopDefault(import('../pages/Constilations/Coordinates/index.vue' /* webpackChunkName: "pages/Constilations/Coordinates/index" */))
const _7590ba6a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _1d184400,
    name: "Constilations"
  }, {
    path: "/Galaxies",
    component: _5d88ae28,
    name: "Galaxies"
  }, {
    path: "/Nebulae",
    component: _749c63e2,
    name: "Nebulae"
  }, {
    path: "/Stars",
    component: _8b9fdc86,
    name: "Stars"
  }, {
    path: "/Constilations/Coordinates",
    component: _a9263868,
    name: "Constilations-Coordinates"
  }, {
    path: "/",
    component: _7590ba6a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
