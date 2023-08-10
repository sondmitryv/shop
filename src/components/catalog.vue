<template>
  <div class="catalog">
    <h2>{{  CART.length }}</h2>
    <router-link v-bind:to="'cart'">Cart</router-link>
    <div class="flex flex-wrap gap-5 pt-10 max-w-5xl mx-auto">
      <catalog-item
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data = "product"
        @addToCart="addToCard"
        />
     </div>
  </div>
</template>

<script>
import catalogItem from './catalog-item.vue'
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'catalog',
  components: {catalogItem},
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['PRODUCTS', 'CART'])
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API','ADD_TO_CART']),
    addToCard(data) {
      this.ADD_TO_CART(data);
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
    .then((response) => {
      if(response.data) {
        console.log('Нет данных')
      }
    })
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
