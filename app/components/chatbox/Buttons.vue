<template>
  <div class="nb-chat-buttons">
    <Button
      v-for="(btn, index) in data.buttons"
      :key="index"
      status="basic"
      :fullWidth="true"
      @click="click(btn)"
    >{{btn.title}}</Button>
  </div>
</template>

<script>
import Button from "../Button";
import mixinButton from './mixins/mixinButton'

export default {
  props: ["data"],
  mixins: [mixinButton],
  components: {
    Button
  }
};
</script>

<style>
.nb-chat-buttons {
  margin: 10px 0;
}
</style>