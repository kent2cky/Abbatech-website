<template>
  <div id="stockscatalogue">
    <side-bar></side-bar>
  </div>
</template>

<script>
import SideBar from '@/components/Sidebar';

export default {
  name: 'StocksCatalogue',
  data() {
    return {
      categories: [
        { id: 1, name: 'Phones' },
        { id: 2, name: 'Laptops' },
        { id: 3, name: 'Accessories' },
      ],
      stocks: [],
    };
  },
  components: {
    SideBar,
  },
};
</script>
