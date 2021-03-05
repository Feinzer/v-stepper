<script>
export default {
  name: 'Stepper',
  props: {
    showIndicator: {
      type: Boolean,
      default: false,
    },
    canFinish: {
      type: Boolean,
      default: true,
    },
  },
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
    currentStep() {
      return this.$children[this.currentIndex];
    },
    canGoNext() {
      return (
        this.currentIndex < this.totalSteps - 1 && this.currentStep.canAdvance
      );
    },
    canGoBack() {
      return this.currentIndex > 0;
    },
    isLastStep() {
      return this.currentIndex == this.totalSteps - 1;
    },
    progress() {
      if (this.isLastStep && this.canFinish) return 100;
      else return (this.currentIndex / this.totalSteps) * 100;
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
    onFinish() {
      if (this.isLastStep && this.canFinish) this.$emit('finish');
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
    <div v-if="showIndicator">
      <slot name="indicator" :progress="progress">
        <div
          class="progress-bar"
          :style="
            `width: ${progress}%;
            border-top-right-radius: ${progress == 100 ? '0' : '9999px'};
            border-bottom-right-radius:  ${progress == 100 ? '0' : '9999px'};`
          "
        />
      </slot>
    </div>
    <div :style="direction" class="steps-container">
      <slot />
    </div>
    <slot
      name="controls"
      :handlers="{
        next: onNext,
        back: onBack,
        finish: onFinish,
        animateTo: animateTo,
      }"
      :checks="{
        canGoNext,
        canGoBack,
        isLastStep,
      }"
    >
      <div class="controls">
        <button
          class="action"
          :class="!canGoBack && 'disabled-action'"
          @click="onBack"
        >
          Back
        </button>
        <button
          v-if="isLastStep"
          class="action finish-action"
          :class="!canFinish && 'disabled-action'"
          @click="onFinish"
        >
          Finish
        </button>
        <button
          v-else
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

.progress-bar {
  height: 0.375rem;
  background-color: #202124;
  transition-property: all;
  transition-duration: 250ms;
  transform-origin: left;
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
  transition: all;
  transition-duration: 150ms;
  width: 8rem;
  height: 3rem;
  cursor: pointer;
  background-color: white;
  border-width: 1px;
  border-color: #e5e7eb;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  outline: none;
  -webkit-tap-highlight-color: transparent;
}

.finish-action {
  color: white;
  background-color: rgb(34, 34, 34);
}

.disabled-action {
  color: rgb(155, 155, 155);
  background-color: rgb(241, 241, 241);
  box-shadow: none;
  border: none;
  cursor: default;
}
</style>
