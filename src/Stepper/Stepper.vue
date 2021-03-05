<script>
export default {
  name: 'Stepper',
  data() {
    return {
      totalSteps: 0,
      currentIndex: 0,
      animation: 'forward',
    };
  },
  mounted() {
    this.totalSteps = this.$children.length;
  },
  computed: {
    canGoNext() {
      return this.currentIndex < this.totalSteps - 1;
    },
    canGoBack() {
      return this.currentIndex > 0;
    },
    direction() {
      if (this.animation == 'forward')
        return {
          '--stepper_forward': '5rem',
          '--stepper_backward': '-5rem',
        };
      else
        return {
          '--stepper_forward': '-5rem',
          '--stepper_backward': '5rem',
        };
    },
  },
  methods: {
    onNext() {
      if (this.canGoNext) this.animateTo(this.currentIndex + 1);
    },
    onBack() {
      if (this.canGoBack) this.animateTo(this.currentIndex - 1);
    },
    animateTo(index) {
      if (index > this.currentIndex) this.animation = 'forward';
      else this.animation = 'backward';
      this.currentIndex = index;
    },
  },
};
</script>

<template>
  <div class="stepper">
    <div :style="direction" class="steps-container">
      <slot />
    </div>
    <slot name="controls" :next="onNext" :back="onBack" :animateTo="animateTo">
      <div class="controls">
        <button
          class="action"
          :class="!canGoBack && 'disabled-action'"
          @click="onBack"
        >
          Back
        </button>
        <button
          class="action"
          :class="!canGoNext && 'disabled-action'"
          @click="onNext"
        >
          Next
        </button>
      </div>
    </slot>
  </div>
</template>

<style scoped>
button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

.stepper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.steps-container {
  position: relative;
  display: flex;
  flex-grow: 1;
  overflow: hidden;
}

.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2.5rem;
}

.action {
  width: 8rem;
  height: 3rem;
  cursor: pointer;
  background-color: white;
  border-width: 1px !important;
  border-color: #e5e7eb !important;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  outline: none;
  -webkit-tap-highlight-color: transparent;
}

.disabled-action {
  color: rgb(155, 155, 155) !important;
  background-color: rgb(241, 241, 241) !important;
  box-shadow: none !important;
  border: none !important;
}
</style>
