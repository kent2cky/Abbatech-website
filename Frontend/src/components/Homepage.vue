<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <p>
      We have all kinds of phones, laptops, and accessories. Contact us today to
      buy from the largest tech retailer East of the Niger.
    </p>
    <p>
      We sell at very affordable rates. We also offer great deals you will never
      get elsewhere.
    </p>
    <h2>{{ msg2 }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  data() {
    return {
      msg: 'Welcome to Abbah Tech',
      msg2: 'Take a look at all the products you can buy from us.',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
