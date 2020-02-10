<template>
  <div class="form nb-chat-form">
    <div class="message-row">
      <Input :fullWidth="true" v-model="message" @keyup.enter="send" class="with-button" status="basic" placeholder="Type a message" />
      <Button @click="send" class="send-button">
        <Icon name="paper-plane-outline" height="16px" width="16px" />
      </Button>
    </div>
  </div>
</template>

<script>
import Input from "../Input.vue";
import Button from "../Button.vue";
import Icon from "../Icon.vue";

export default {
  data() {
    return {
      message: ""
    };
  },
  components: {
    Input,
    Icon,
    Button
  },
  methods: {
    send() {
      this.$emit("send", this.message);
      this.$store.commit("addUserMessage", this.message);
      this.message = "";
    }
  }
};
</script>

<style>
.nb-chat-form {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>