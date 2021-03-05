import Stepper from './Stepper.vue';
import Step from './Step.vue';

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('v-stepper', Stepper);
  Vue.component('v-step', Step);
}

export default { install };

export { Stepper, Step };
