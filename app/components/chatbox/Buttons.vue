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
import { Plugins } from "@capacitor/core";

const { Geolocation } = Plugins;

export default {
  props: ["data"],
  components: {
    Button
  },
  methods: {
    async click(btn) {
      if (btn.url) {
        window.open(btn.url, "_blank");
      } else if (btn.postback) {
        this.$store.commit("addUserMessage", btn.postback);
      } else if (btn.phone_number) {
        window.open(`tel:${btn.phone_number}`);
      } else if (btn.location) {
        const { coords } = await Geolocation.getCurrentPosition();
        this.$bus.$emit("send", {
          geo: coords
        });
      } else {
        this.$store.commit("addUserMessage", btn.title);
      }
    }
  }
};
</script>

<style>
.nb-chat-buttons {
  margin: 10px 0;
}
</style>