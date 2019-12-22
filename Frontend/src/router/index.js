import Vue from 'vue';
import Router from 'vue-router';
import Homepage from '@/components/Homepage';
import Catalogue from '@/components/StocksCatalogue';
import AboutUs from '@/components/AboutUs';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
    },
    {
      path: '/catalogue',
      name: 'Catalogue',
      component: Catalogue,
    },
    {
      path: '/about-us',
      name: 'About',
      component: AboutUs,
    },
  ],
});
