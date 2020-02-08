<template>
  <div dir="ltr" class="app">
    <div class="nb-theme-default">
      <div class="nb-layout">
        <div class="layout">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.layout {
  background-color: white !important;
    
}

.app {
  width: 100%;
}
</style>