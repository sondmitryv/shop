<template>
  <div class="main">
    <h1>test</h1>
    <router-view></router-view>
    <!-- <catalog />
    <cart v-if="CART.length" :cart_data="CART"/> -->
  </div>
</template>

<script>
// import catalog from './catalog.vue'
// import cart from './cart.vue'
import {mapGetters} from 'vuex'
export default {
  name: 'main-wrapper',
  // components: {catalog, cart},
  props: {},
  computed:{
    ...mapGetters(["CART"]),
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
