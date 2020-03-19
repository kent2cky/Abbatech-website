<template>
  <div id="productcard">
    <div class="card">
      <div class="options">
        <font-awesome-icon id="ff" icon="check-circle" @click="clicked" />
        &nbsp;
        <font-awesome-icon icon="trash" @click="clicked" />
        &nbsp;
        <font-awesome-icon icon="download" @click="clicked" />
        &nbsp;
        <font-awesome-icon icon="pencil-alt" @click="clicked" />
        &nbsp;
      </div>
      <img
        v-bind:src="pictureSrc"
        class="card-img-top"
        v-bind:alt="pictureSrc"
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
import {
  faDownload,
  faTrash,
  faCheckCircle,
  faPencilAlt,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faDownload, faTrash, faCheckCircle, faPencilAlt);

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
    FontAwesomeIcon,
  },
  computed: {
    pictureSrc: function() {
      return `https://res.cloudinary.com/kent2cky/image/upload/v1581683477/${this.pictureUrl}.jpg`;
    },
  },
  methods: {
    clicked: () => console.log("Don't touch me!"),
  },
};
</script>
<style scoped>
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

.options {
  background: rgba(61, 55, 55, 0.558);
  display: none;
  position: absolute;
  width: 100%;
  height: 31px;
  z-index: 1;
  padding-top: 4px;
}

svg {
  position: relative;
  color: rgb(212, 226, 226);
  cursor: pointer;
}

svg:hover {
  color: white;
}

#ff {
  color: red;
  justify-self: flex-start;
}

.card:hover .options {
  display: flex;
  justify-content: center;
}
</style>
