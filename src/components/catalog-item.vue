<template>
  <div class="catalog-item flex-1">
    <img :src="require('../assets/images/' + product_data.image)" alt="pic">
    <h2>{{ product_data.name }}</h2>
    <p>{{product_data.price}}</p>
    <button @click="addToCart">add to cart</button>
  </div>
</template>

<script>

export default {
  name: 'catalog-item',
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {},
  data () {
    return {}
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product_data)
    }
  }
}
</script>

<style scoped>
  .catalog-item {
    -webkit-box-shadow: -2px -1px 37px -8px rgba(0,0,0,0.75);
    -moz-box-shadow: -2px -1px 37px -8px rgba(0,0,0,0.75);
    box-shadow: -2px -1px 37px -8px rgba(0,0,0,0.75);
  }
</style>