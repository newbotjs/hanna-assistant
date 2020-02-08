<template>
  <div class="nb-card size-tiny status-primary">
    <video :src="data.url" :controls="hasUrl" :poster="poster"></video>
  </div>
</template>

<script>
export default {
    props: ['data',],
    computed: {
        hasUrl() {
            return !!this.data.url
        },
        poster() {
            return this.hasUrl ? '' : this.data.defaultImage
        }
    }
};
</script>