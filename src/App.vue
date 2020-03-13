<template>
  <div id="app" style="display: flex;justify-content: center;">
    <ui-layout style="height:100vh">
      <ui-sider>
        sider
      </ui-sider>
      <ui-layout>
        <ui-header>
          header
        </ui-header>
        <ui-content>
          content
          <ui-pager :totalPage="10" :currentPage="3"></ui-pager>
        </ui-content>
        <ui-footer>
          footer
        </ui-footer>
      </ui-layout>
    </ui-layout>
  </div>
</template>

<script>
  import UiLayout from './component/layout';
  import UiHeader from './component/header';
  import UiContent from './component/content';
  import UiSider from './component/sider';
  import UiFooter from './component/footer';
  import UiPager from './component/pager/pager';
  // const UiHeader = UiLayout.UiHeader;
  // const UiContent = UiLayout.UiContent;
  // const UiSider = UiLayout.UiSider;
  // const UiFooter = UiLayout.UiFooter;
  export default {
    name: 'app',
    components: {
      UiLayout,
      UiHeader,
      UiContent,
      UiSider,
      UiFooter,
      UiPager
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
