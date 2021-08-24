<template>
  <div>
    <canvas id="three"> </canvas>
  </div>
</template>

<script>
import { init } from '../helpers/raining';

export default {
  data() {
    return {};
  },
  mounted() {
    init();
  },
  methods: {},
};
</script>

<style scoped>
body {
    margin: 0;
    height: 100vh;
    background: #bdc3c7;
}
</style>
