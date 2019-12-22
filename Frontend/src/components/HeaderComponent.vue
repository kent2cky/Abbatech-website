<template>
  <header id="header">
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/">Abbah Tech </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li
            class="nav-item dropdown"
            @mouseenter="hover = true"
            @mouseleave="hover = false"
            :class="{ show: hover }"
          >
            <router-link
              to="/catalogue"
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              :aria-expanded="hover"
              >Catalogue</router-link
            >
            <div
              class="dropdown-menu"
              :class="{ show: hover }"
              aria-labelledby="navbarDropdown"
            >
              <ul>
                <li
                  class="dropdown-item"
                  v-for="category in categories"
                  v-bind:key="category.id"
                >
                  {{ category.name }}
                </li>
              </ul>
              <!-- <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a> -->
            </div>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about-us">About us </router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      activeClass: 'active',
      hover: false,
      categories: [
        { id: 1, name: 'Phones' },
        { id: 2, name: 'Laptops' },
        { id: 3, name: 'Accessories' },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  font-size: 20px;
  background: #fa521f;
}

.router-link-exact-active {
  color: #fa521f !important;
}

.navbar-brand {
  font-size: 1.5em;
}
ul,
li {
  color: inherit;
  display: inline-block;
  margin: 5px;
}
</style>
