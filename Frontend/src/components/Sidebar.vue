<template>
  <div id="wrapper">
    <div id="sidebar-wrapper">
      <ul class="sidebar-nav">
        <li
          v-for="(category, index) in categories"
          v-bind:key="category.id"
          :class="{ active: category.isActive }"
          @click="
            {
              activate(category, index);
            }
          "
        >
          <a href="#">{{ category.name }}</a>
        </li>
      </ul>
    </div>

    <div id="page-content-wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <h1 class="text-center">Bootstrap Sidebar</h1>
            <h2 class="small text-center">Second Header</h2>
            <p class="text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium perferendis maiores velit ad id delectus nisi eligendi
              doloremque officia necessitatibus, repellendus alias omnis, natus
              nam voluptates dolor vel minus ab?
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      categories: [
        { id: 1, name: 'Phones', isActive: true },
        { id: 2, name: 'Laptops', isActive: false },
        { id: 3, name: 'Accessories', isActive: false },
      ],
    };
  },
  methods: {
    activate(category, index) {
      this.categories.map(cat => (cat.isActive = false));
      const currentCategory = category;
      currentCategory.isActive = true;
      this.$set(this.categories, index, currentCategory);
    },
  },
};
</script>
<style>
/* Sidebar */
#sidebar-wrapper {
  z-index: 1;
  position: fixed;
  width: 20vw;
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
