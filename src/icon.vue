<template>
  <svg class="g-icon">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    }
  }
}
</script>
<style>
.g-icon {
  height: 1em;
  width: 1em;
  /*fill: red;*/
}
</style>
