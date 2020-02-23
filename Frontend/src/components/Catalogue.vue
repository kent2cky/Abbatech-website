<template>
  <div id="productscatalogue">
    <side-bar></side-bar>
    <div id="page-content-wrapper">
      <div class="card-columns">
        <product-card
          v-for="stock in stocks"
          v-bind:key="stock.Id"
          v-bind:price="stock.price"
          v-bind:quantity="stock.quantity"
          picture-url="https://res.cloudinary.com/kent2cky/image/upload/v1578776918/sample.jpg"
          v-bind:name="stock.name"
          v-bind:description="stock.description"
          v-bind:isNegotiable="stock.isNegotiable"
        ></product-card>
      </div>
    </div>
    <button class="addStock" @click="showModal"></button>
    <upload-dialogue></upload-dialogue>
  </div>
</template>

<script>
import SideBar from '@/components/Sidebar';
import ProductCard from '@/components/Card';
import UploadDialogue from '@/components/Upload';
import bus from '@/components/bus';
import { BButton } from 'bootstrap-vue';

export default {
  name: 'ProductsCatalogue',
  data() {
    return {
      stocks: {},
    };
  },
  methods: {
    showModal() {
      bus.$emit('showModal');
    },
  },
  components: {
    SideBar,
    ProductCard,
    UploadDialogue,
    BButton,
  },
  mounted() {
    this.stocks = this.$store.state.stocks;
    // bus.$on('hideDialogue', data => {
    //   this.upload();
    // });
  },
};
</script>

<style>
.addStock {
  position: fixed;
  z-index: 599;
  background: url('../assets/vector-plus-orange-4-original.png') no-repeat
    center bottom/cover;
  bottom: 80px;
  right: 100px;
  border: 0;
  height: 80px;
  width: 80px;
}

*:focus,
.addStock:focus {
  outline: none;
  border: 1px solid grey;
}
.addStock:active {
  transform: scale(0.9);
}
</style>
