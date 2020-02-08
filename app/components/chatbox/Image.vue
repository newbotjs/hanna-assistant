<template>
  <div class="nb-card size-tiny status-primary">
    <div class="picture" :style="backgroundImage"></div>
  </div>
</template>

<script>
export default {
    props: ['data'],
    computed: {
        backgroundImage() {
            return {
                'background-image': 'url(' + this.data.image + ')'
            }
        }
    }
};
</script>