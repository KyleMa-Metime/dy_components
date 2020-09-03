<template>
  <div class="home">
    <h1>{{`state--${$store.state.hello}`}}</h1>
    <h1>{{`state--${$store.state.nums}`}}</h1>
    <h1>{{`getters--${$store.getters.num2}`}}</h1>
    <h1>{{`state--${$store.state.obj.name}&${$store.state.obj.age}`}}</h1>
    <h1>{{`state--${$store.state.arr}`}}</h1>
    <button @click="add()">按钮</button>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
    add() {
      // this.$store.commit("addM", 5);
      let n = 5;
      this.$store.dispatch("addA", n);
    },
  },
};
</script>

<style>
</style>
