<template>
  <Layout>
    <LayoutContainer>
      <Chat />
    </LayoutContainer>
  </Layout>
</template>

<script>
import Layout from "../Layout.vue";
import LayoutContainer from "../LayoutContainer.vue";
import Chat from "./Chat";

export default {
  components: {
    Layout,
    LayoutContainer,
    Chat
  }
};
</script>
