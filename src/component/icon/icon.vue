<template>
  <svg class="ui-icon" @click="$emit('click', $event)">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>
<script>
  export default {
    name: 'ui-icon',
    props: {
      name: {
        type: String,
        default: ''
      }
    }
  }
</script>
<style lang="scss">
  .ui-icon {
    width: 1em;
    height: 1em;
  }
</style>
