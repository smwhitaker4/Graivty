<template>
  <div>
    <Banner />
    <Menu />
    <div class="body">
    <nuxt />
    </div>
  </div>
</template>


<script>
import Menu from '~/components/Menu';
import Banner from '~/components/Banner';
export default {
  components: {
    Menu,
    Banner
  }
}
</script>

<style>
body{
  background-color: rgba(121, 121, 121, 0.589);

}
</style>
