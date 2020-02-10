<template>
  <div >
      <transition name="actions" mode="out-in">
        <div class="nb-actions">
            <Button v-for="content in data" :key="content" v-stagger status="primary" appearance="outline" shape="round" size="small" @click="click(content)">{{ content }}</Button>
        </div>
      </transition>
  </div>
</template>

<script>
import Button from '../Button'
import stagger from './directives/stagger'
import mixinButton from './mixins/mixinButton'

export default {
    props: ['data'],
    mixins: [mixinButton],
    components: {
        Button
    },
    directives: {
        stagger
    }
};
</script>

<style>
.nb-actions {
    margin: 10px;
    text-align: center;
}

.nb-actions button {
    margin: 5px;
}

.stagger-init {

}

.stagger-end {

}

.actions-enter-active, .actions-leave-active {
  transition: opacity .5s;
}
.actions-enter, .actions-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>