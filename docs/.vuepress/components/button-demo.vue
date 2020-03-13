<template>
  <div class="demo">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <ui-button>默认按钮</ui-button>
        <ui-button icon="set">带 icon 按钮</ui-button>
        <ui-button :loading="true">加载按钮</ui-button>
        <ui-button disabled>禁用按钮</ui-button>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeStr}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)" ref="xxx">
        <ui-icon class="icon-down" :name="isShow[0] === false ? 'arrowdown' : 'arrowup'"></ui-icon>
      </div>
    </div>

    <h2>按钮组</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <ui-button-group>
          <ui-button icon="arrowleft">
            上一页
          </ui-button>
          <ui-button>
            更多
          </ui-button>
          <ui-button icon="arrowright" iconPosition="right">
            下一页
          </ui-button>
        </ui-button-group>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeStr2}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(1)" ref="xxx">
        <ui-icon class="icon-down" :name="isShow[1] === false ? 'arrowdown' : 'arrowup'"></ui-icon>
      </div>
    </div>
  </div>
</template>

<script>
  import UiButton from '../../../src/component/button'
  import UiButtonGroup from '../../../src/component/button-group/button-group'
  import UiIcon from '../../../src/component/icon/icon'
  import mixin from '../mixin'
  export default {
    name: 'demo',
    mixins: [mixin],
    components: {
      UiButton,
      UiButtonGroup,
      UiIcon,
    },
    data() {
      return {
        codeStr: `
          <ui-button>默认按钮</ui-button>
          <ui-button icon="set">带 icon 按钮</ui-button>
          <ui-button :loading="true">加载按钮</ui-button>
          <ui-button disabled>禁用按钮</ui-button>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr2: `
          <ui-button-group>
            <ui-button icon="arrowleft">
              上一页
            </ui-button>
            <ui-button>
              更多
            </ui-button>
            <ui-button icon="arrowright" iconPosition="right">
              下一页
            </ui-button>
          </ui-button-group>
          `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
