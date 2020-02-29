<template>
  <div id="app" style="display: flex;justify-content: center;">
    <g-button>hello</g-button>
  </div>
</template>

<script>
  import GButton from './component/button/button'

  export default {
    name: 'app',
    components: {
      GButton,
    },
    data () {
      return {
        fileList: []
      }
    },
    created () {

    },
    methods: {},
    watch: {}
  }


</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  img {
    max-width: 100%;
  }
  html {
    --font-size: 14px;
  }
  :root {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --color: #999;
    --border-color: #999;
    --border-color-hover: #666;
  }
  body {
    font-size: var(--font-size);
  }
  img {
    max-width: 100%;
  }
</style>
