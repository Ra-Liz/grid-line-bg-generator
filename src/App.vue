<template>
  <GridGeneration />
</template>

<script>
import GridGeneration from "./components/GridGeneration.vue";

export default {
  name: "App",
  components: {
    GridGeneration,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
}
</style>
