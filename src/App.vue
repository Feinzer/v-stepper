<template>
  <div id="app">
    <Stepper class="stepper-example" :can-finish="canFinish">
      <Step
        v-for="(data, index) in exampleData"
        :key="index"
        :can-advance="canAdvance"
      >
        <p>{{ data.title }}</p>
        <p>{{ data.content }}</p>
      </Step>
    </Stepper>
    <button @click="canFinish = !canFinish">a</button>
  </div>
</template>

<script>
import Stepper from '@/stepper/Stepper';
import Step from '@/stepper/Step';

export default {
  name: 'App',
  components: {
    Stepper,
    Step,
  },
  data() {
    return {
      exampleData: Array(10).fill({
        title: 'Sample text',
        content:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolore quidem inventore aut corporis mollitia perferendis minima. Pariatur, excepturi laudantium.',
      }),
      canAdvance: true,
      canFinish: false,
    };
  },
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Ubuntu, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgba(249, 249, 249);
}

.stepper-example {
  height: 100vh;
}
</style>
