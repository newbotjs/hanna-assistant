<template>
  <div class="nb-chat">
    <div ref="scrollable" class="messages">
      <div
        class="nb-chat-message"
        v-for="(obj, index) in messages"
        :key="index"
        :class="{'reply': obj.isUser, 'not-reply': !obj.isUser}"
      >
        <div
          class="avatar"
          style="background-image: url('https://i.gifer.com/no.gif');"
          v-if="!obj.isUser"
        ></div>
        <div class="message">
          <Message :text="obj.data.text" :date="obj.date" />
          <component
            :is="obj.component"
            v-if="obj.component"
            :data="obj.data"
            :isLastMessage="index == length -1"
          />
          <QuickReplies :data="obj.data.actions" v-if="displayActions(obj.data, index)" />
        </div>
      </div>
    </div>
    <InputMessage @send="send" />
  </div>
</template>

<script>
import PerfectScrollbar from "perfect-scrollbar";
import Message from "./Message.vue";
import InputMessage from "./InputMessage";
import ImageCard from "./Image.vue";
import VideoCard from "./Video.vue";
import QuickReplies from "./QuickReplies.vue";
import Buttons from "./Buttons.vue";
import Carousel from "./Carousel.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Message,
    InputMessage,
    ImageCard,
    VideoCard,
    QuickReplies,
    Buttons,
    Carousel
  },
  data() {
    return {
      container: null,
      ps: null
    };
  },
  mounted() {
    this.container = this.$refs["scrollable"];
    this.ps = new PerfectScrollbar(this.container);
    this.$bus.$on("send", () => {
      this.scrollToBottom();
    });
    this.$bus.$on("reply", output => {
      let component = "";
      if (typeof output == "string") {
        output = {
          text: output
        };
      } else if (output.image) {
        component = "ImageCard";
      } else if (output.video) {
        component = "VideoCard";
      } else if (output.buttons) {
        component = "Buttons";
      } else if (output.cards) {
        component = "Carousel";
      }
      this.$store.commit("addMessage", {
        isUser: false,
        date: new Date(),
        component,
        data: {
          ...output
        }
      });
      this.scrollToBottom();
    });
  },
  computed: {
    ...mapGetters(["messages", "length"])
  },
  methods: {
    send() {
      this.$forceUpdate();
    },
    displayActions(obj, index) {
      if (index == this.length - 1 && obj.actions) {
        return true;
      }
      return false;
    },
    scrollToBottom() {
      this.$nextTick(() => {
        this.container.scroll({
          top: 9999999,
          left: 0,
          behavior: "smooth"
        });
      });
    }
  }
};
</script>

<style scoped>
.nb-chat {
  width: 100%;
}

.nb-chat .messages {
  position: absolute;
  top: 0;
  bottom: 80px;
  right: 0;
  left: 0;
}
</style>