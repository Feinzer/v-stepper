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
    keep() {
      return this.$parent.keepState;
    },
  },
  render() {
    if (this.keep) {
      return (
        <transition name="step">
          <div v-show={this.isCurrent} class={this.$style.step}>
            {this.$slots.default}
          </div>
        </transition>
      );
    } else {
      if (this.isCurrent)
        return (
          <transition name="step">
            <div class={this.$style.step}>{this.$slots.default}</div>
          </transition>
        );
      else return null;
    }
  },
};
</script>

<style module>
.step {
  width: 100%;
  height: 100%;
}
</style>

<style scoped>
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
  transform: translateX(var(--___stepper_forward));
}
.step-leave-active {
  position: absolute;
  transform: translateX(var(--___stepper_backward));
}
</style>
