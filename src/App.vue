<template>
  <div id="app">
    <Stepper>
      <Step><p>a</p></Step>
      <Step><p>b</p></Step>
      <Step><p>c</p></Step>
      <Step><p>d</p></Step>
      <Step><p>e</p></Step>
      <Step><p>f</p></Step>
    </Stepper>
  </div>
</template>

<script>
import Stepper from '@/Stepper/Stepper';
import Step from '@/Stepper/Step';

export default {
  name: 'App',
  components: {
    Stepper,
    Step,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Ubuntu, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
