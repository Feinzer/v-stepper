<script>
export default {
  name: 'Step',
  props: {
    canAdvance: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    index() {
      return this.$parent.$children.findIndex(child => child == this);
    },
    isCurrent() {
      return this.index == this.$parent.currentIndex;
    },
  },
};
</script>

<template>
  <transition v-if="isCurrent" name="step">
    <div class="step">
      <slot />
    </div>
  </transition>
</template>

<style>
.step {
  position: absolute;
  width: 100%;
  height: 100%;
}

.step-enter-active,
.step-leave-active {
  transition-property: all;
  transition-duration: 250ms;
}

.step-enter,
.step-leave-active {
  opacity: 0;
}

.step-enter {
  transform: translateX(var(--stepper_forward));
}
.step-leave-active {
  transform: translateX(var(--stepper_backward));
}
</style>
