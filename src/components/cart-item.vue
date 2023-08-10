<template>
  <div class="cart-item flex-1">
      <img :src="require('../assets/images/' + cart_item_data.image)" alt="pic">
      <h2>{{ cart_item_data.name }}</h2>
      <p>{{cart_item_data.price}}</p>
      <div>
      quantity : {{ cart_item_data.quantity }}
    </div>
    <button @click="delFromCart">Delete</button>
    </div>


</template>

<script>
export default {
  name: 'cart',
  props:{
    cart_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data () {
    return {

    }
  },
  methods: {
    delFromCart() {
      this.$emit('delFromCart')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart-item {
  -webkit-box-shadow: -2px -1px 37px -8px rgba(0,0,0,0.75);
    -moz-box-shadow: -2px -1px 37px -8px rgba(0,0,0,0.75);
    box-shadow: -2px -1px 37px -8px rgba(0,0,0,0.75);
}
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
