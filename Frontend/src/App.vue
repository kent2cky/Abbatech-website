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
import HeaderComponent from '@/components/HeaderComponent';
import StocksCatalogue from '@/components/StocksCatalogue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    StocksCatalogue,
  },
};
</script>

<style>
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
