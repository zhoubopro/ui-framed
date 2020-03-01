<template>
  <div id="app" style="display: flex;justify-content: center;">
    <UiButtonGroup>
      <ui-button icon="set">hello</ui-button>
      <ui-button >aaa</ui-button>
    </UiButtonGroup>
    <UiIcon name="set"></UiIcon>
  </div>
</template>

<script>
  import UiButton from './component/button/button'
  import UiButtonGroup from './component/button-group/button-group'
  import UiIcon from './component/icon/icon'
  export default {
    name: 'app',
    components: {
      UiButtonGroup,
      UiButton,
      UiIcon,
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
  /*img {
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
  }*/
</style>
