<template>
  <div class="main max-w-5xl mx-auto">
    <h1>test</h1>
    <router-link :to="'catalog'">Catalog</router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'home',
  props: {},
  computed:{

  },
  data () {
    return {

    }
  }
}
</script>
