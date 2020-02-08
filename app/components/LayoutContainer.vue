<template>
  <div class="layout-container">
    <div class="content" :class="{center: center}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
    props: ['center']
}
</script>