<template>
  <input nbInput v-bind="$attrs" v-bind:value="value" v-on="inputListeners" :class="classes" />
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: "medium"
    },
    shape: {
      type: String,
      default: "rectangle"
    },
    appearance: {
      type: String,
      default: "filled"
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    value: {
        type: String,
        default: ''
    }
  },
  computed: {
    classes() {
      return {
        [`status-${this.status}`]: true,
        [`size-${this.size}`]: true,
        [`shape-${this.shape}`]: true,
        [`appearance-${this.appearance}`]: true,
        "input-full-width": this.fullWidth
      };
    },
    inputListeners() {
      return Object.assign({}, this.$listeners, {
        input: event => {
          this.$emit("input", event.target.value);
        }
      });
    }
  }
};
</script>