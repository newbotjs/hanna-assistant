<template>
  <div id="app">
    <Layout>
        <LayoutHeader>
           <Icon name="message-square-outline" />
        </LayoutHeader>
        <LayoutContainer :center="true">
          <Chat />
        </LayoutContainer>
        <LayoutFooter>
          <Popover>
              ok
          </Popover>
        </LayoutFooter>
    </Layout>
   
  </div>
</template>

<script>
import Icon from './components/Icon.vue'
import Layout from './components/Layout.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutContainer from './components/LayoutContainer.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import Popover from './components/Popover.vue'
import Chat from './components/chatbox/Chat'

export default {
  name: 'app',
  components: {
    Icon,
    Layout,
    LayoutHeader,
    LayoutContainer,
    Popover,
    LayoutFooter,
    Chat
  }
}
</script>
