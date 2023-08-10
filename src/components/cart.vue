<template>
  <div class="cart max-w-5xl mx-auto">
    <h2>Cart total</h2>
    <router-link :to="'catalog'">Go to catalog</router-link>
    <div class="flex flex-wrap gap-5 pt-10">
      <cart-item
      v-for="(cart, index) in CART"
      :key="cart.article"
      :cart_item_data="cart"
      @delFromCart="delFromCart(index)"
      ></cart-item>
    </div>

  </div>
</template>

<script>
import cartItem from './cart-item.vue'
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'cart',
  components:{cartItem},
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      }

    }
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['CART'])
  },
  methods: {
    ...mapActions(['DEL_FROM_CART']),
    delFromCart(index) {
      this.DEL_FROM_CART(index)
      console.log(index)
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
