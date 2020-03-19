<template>
  <div id="app">
    <header-component></header-component>
    <br /><br /><br />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import HeaderComponent from '@/components/HeaderComponent';
import ProductsCatalogue from '@/components/Catalogue';
import ProductCard from '@/components/Card';
import bus from '@/components/bus';
import { BModal } from 'bootstrap-vue';
import { BButton } from 'bootstrap-vue';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    stocks: [],
    categories: [],
  },
  mutations: {
    updateStocks(state, response) {
      state.stocks.splice(0, state.stocks.length, ...response.data);
    },

    updateCategories(state, result) {
      state.categories.splice(0, state.categories.length, ...result);
    },
  },
  actions: {
    fetchCategories(context) {
      axios
        .get('https://localhost:5001/categories')
        .then(response => {
          const { result } = response.data;
          context.commit('updateCategories', result);
          bus.$emit('doneFetching');
        })
        .catch(() => {
          console.log('something went wrong fetching data');
        });
    },
    fetchAllStocks(context) {
      axios
        .get('https://localhost:5001/availablestocks')
        .then(response => {
          context.commit('updateStocks', response);
        })
        .catch(() => {
          console.log('something went wrong fetching data');
        });
    },
    fetchStocksByCategory(context, categoryId) {
      axios
        .get(`https://localhost:5001/availablestocks/category/${categoryId}`)
        .then(response => {
          context.commit('updateStocks', response);
        })
        .catch(() => {
          console.log('something went wrong fetching data');
        });
    },

    fetchSingleStock(context, stockId) {
      axios
        .get(`https://localhost:5001/availablestocks/${stockId}`)
        .then(response => {
          context.commit('updateStocks', response);
        })
        .catch(() => {
          console.log('something went wrong fetching data');
        });
    },
  },
  getters: {
    getCategories: state => {
      return state.categories;
    },
  },
});

export default {
  name: 'App',
  store,
  components: {
    HeaderComponent,
    ProductsCatalogue,
    ProductCard,
  },
  methods: {
    showMsgBox(params) {
      console.log('showMsgBox clicked', params);
      const {
        msg,
        title = 'Confirmation',
        size = 'md',
        buttonSize = 'md',
        okVariant = 'success',
      } = params;

      this.boxTwo = '';
      this.$bvModal
        .msgBoxOk(msg, {
          title: title,
          size: size,
          buttonSize: buttonSize,
          okVariant: okVariant,
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
        })
        .then(value => {
          this.boxTwo = value;
        })
        .catch(err => {
          // An error occurred!
        });
    },
  },
  mounted() {
    bus.$on('showMsgBox', params => this.showMsgBox(params));
  },
  beforeDestroy() {
    bus.$off('showMsgBox');
  },
};
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  background: #f0eeee;
}
</style>
