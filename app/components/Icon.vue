<template>
  <div class="nb-icon">
    <i :data-eva="name"></i>
  </div>
</template>

<script>
import * as eva from "eva-icons";

export default {
  props: {
    name: String,
    width: {
      type: String,
      default: "24px"
    },
    height: {
      type: String,
      default: "24px"
    },
    fill: {
      type: String,
      default: "#fff"
    }
  },
  mounted() {
    eva.replace(this.$props);
  }
};
</script>