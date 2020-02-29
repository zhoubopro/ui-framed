<template>
  <div id="app" style="display: flex;justify-content: center;">
    <div style="border: 1px solid #ccc;">
      <p>段落1</p>
      <p>段落2</p>
      <p>段落3</p>
      <p>段落4</p>
      <p>段落5</p>
      <p>段落6</p>
      <p>段落7</p>
      <p>段落8</p>
      <p>段落9</p>
      <g-sticky :distance="100" style="width: 600px;">
        <div style="border: 1px solid red;">
          <img src="http://www.reignwood.com/media/1706/logo.jpg" alt="">
        </div>
      </g-sticky>
      <p>段落1</p>
      <p>段落2</p>
      <p>段落3</p>
      <p>段落4</p>
      <p>段落5</p>
      <p>段落6</p>
      <p>段落7</p>
      <p>段落8</p>
      <p>段落9</p>

      <p>段落1</p>
      <p>段落2</p>
      <p>段落3</p>
      <p>段落4</p>
      <p>段落5</p>
      <p>段落6</p>
      <p>段落7</p>
      <p>段落8</p>
      <p>段落9</p>

      <p>段落1</p>
      <p>段落2</p>
      <p>段落3</p>
      <p>段落4</p>
      <p>段落5</p>
      <p>段落6</p>
      <p>段落7</p>
      <p>段落8</p>
      <p>段落9</p>

      <p>段落1</p>
      <p>段落2</p>
      <p>段落3</p>
      <p>段落4</p>
      <p>段落5</p>
      <p>段落6</p>
      <p>段落7</p>
      <p>段落8</p>
      <p>段落9</p>

      <p>段落1</p>
      <p>段落2</p>
      <p>段落3</p>
      <p>段落4</p>
      <p>段落5</p>
      <p>段落6</p>
      <p>段落7</p>
      <p>段落8</p>
      <p>段落9</p>
    </div>
  </div>
</template>

<script>
  import GSticky from './component/sticky/sticky';

  export default {
    name: 'app',
    components: {
      GSticky,
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
  img{
    max-width: 100%;
  }
</style>
