<template>
  <div id="wrapper">
    <div id="sidebar-wrapper">
      <ul class="sidebar-nav">
        <li
          v-for="(category, index) of categories"
          v-bind:key="category.id"
          :class="{ active: category.isActive }"
          @click="
            {
              makeActive({ category, index });
            }
          "
        >
          <a href="#">{{ category.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import bus from '@/components/bus';

export default {
  name: 'SideBar',
  data() {
    return {
      categories: [],
    };
  },
  methods: {
    makeActive(eventArgs) {
      const prevActiveCat = this.getPrevActive(); // get previously active category
      if (eventArgs) {
        if (prevActiveCat != null) {
          const restoredPrevActiveCat = prevActiveCat;
          restoredPrevActiveCat.category.isActive = false;
          console.log('here');
          this.$set(
            this.categories,
            restoredPrevActiveCat.category.id,
            restoredPrevActiveCat.category,
          ); // restore the previously active to not active
        }
        this.setActive(eventArgs);
      } else {
        this.setActive(prevActiveCat);
      }
    },
    setActive(params) {
      const { category, index } = params;
      localStorage.setItem('_activeCat', JSON.stringify(params)); // save current active category
      category.isActive = true;
      this.$set(this.categories, index, category);

      if (index === 0) this.$store.dispatch('fetchAllStocks');
      else this.$store.dispatch('fetchStocksByCategory', index);
    },
    getPrevActive() {
      let prevActiveCat = JSON.parse(localStorage.getItem('_activeCat'));
      if (prevActiveCat) {
        return prevActiveCat;
      }
      prevActiveCat = {
        category: this.categories[0],
        index: 0, // set default activeCategory
      };
      return prevActiveCat;
    },
  },

  beforeMount() {
    bus.$on('doneFetching', data => {
      this.makeActive(data);
    }); // register event to be emitted from other components
    this.categories = this.$store.getters.getCategories;
    if (this.categories.length !== 0) this.makeActive();
  },
};
</script>
<style>
/* Sidebar */
#sidebar-wrapper {
  z-index: 1;
  position: fixed;
  width: 17vw;
  height: 100%;
  overflow-y: hidden;
  background: #f15d30;
  opacity: 0.9;
  transition: all 0.5s;
  display: flex;
  padding-top: 40px;
}

/* Main Content */
#page-content-wrapper {
  width: 100%;
  position: absolute;
  padding: 15px 35px 15px 250px;
  transition: all 0.5s;
}

/* Sidebar styling */
.sidebar-nav {
  padding: 0;
  list-style: none;
  transition: all 0.5s;
  width: 100%;
  text-align: center;
}

.sidebar-nav li {
  line-height: 40px;
  width: 100%;
  transition: all 0.3s;
  padding: 10px;
}

.sidebar-nav li a {
  display: block;
  text-decoration: none;
  color: #ddd;
}

.sidebar-nav li:hover,
li.active {
  background: #f58a6a;
}
</style>
