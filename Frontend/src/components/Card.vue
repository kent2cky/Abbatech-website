<template>
  <div id="productcard">
    <div class="card">
      <img
        v-bind:src="pictureUrl"
        class="card-img-top"
        v-bind:alt="pictureUrl"
      />
      <div class="card-body">
        <h5 class="card-title">{{ name }}</h5>
        <p class="card-text">
          {{ description }}
          {{ isNegotiable }}
          {{ quantity }}
          {{ price }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Catalogue from '@/components/Catalogue';

export default {
  name: 'ProductCard',
  props: {
    pictureUrl: String,
    price: Number,
    name: String,
    description: String,
    isNegotiable: Boolean,
    quantity: Number,
  },
  components: {
    Catalogue,
  },
  methods: {
    bankAlert() {
      this.$store.dispatch('fetchData');
    },
  },
};
</script>
