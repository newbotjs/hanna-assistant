<template>
  <div class="nb-card size-tiny status-primary">
    <video :src="data.video" :controls="hasUrl" :poster="poster"></video>
  </div>
</template>

<script>
export default {
    props: ['data'],
    computed: {
        hasUrl() {
            return !!this.data.video
        },
        poster() {
            return this.hasUrl ? '' : this.data.defaultImage
        }
    }
};
</script>

<style scoped>
  .nb-card {
    margin-top: 10px;
  }
</style>