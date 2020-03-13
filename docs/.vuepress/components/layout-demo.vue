<template>
  <div class="demo">
    <h2>圣杯布局</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <ui-layout style="color: white;">
          <ui-header
            style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
            header
          </ui-header>
          <ui-content
            style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;">
            content
          </ui-content>
          <ui-footer
            style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
            footer
          </ui-footer>
        </ui-layout>
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

    <h2>多栏布局 1</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <ui-layout style="color: white; overflow:hidden;">
          <ui-header
            style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
            header
          </ui-header>
          <ui-layout>
            <ui-sider
              style="display:flex;justify-content: center;align-items: center;height: 100px; background:#03a9f4d9; width:200px; color: white;">
              sider
            </ui-sider>
            <ui-content
              style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;">
              content
            </ui-content>
          </ui-layout>
          <ui-footer
            style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
            footer
          </ui-footer>
        </ui-layout>
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


    <h2>多栏布局 2</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <ui-layout style="color: white; overflow:hidden;">
          <ui-sider
            style=" display:flex;justify-content: center;align-items: center;background:#03a9f4d9; width:200px; color: white;">
            sider
          </ui-sider>
          <ui-layout>
            <ui-header
              style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
              header
            </ui-header>
            <ui-content
              style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;">
              content
            </ui-content>
            <ui-footer
              style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
              footer
            </ui-footer>
          </ui-layout>
        </ui-layout>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeStr3}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(2)" ref="xxx">
        <ui-icon class="icon-down" :name="isShow[2] === false ? 'arrowdown' : 'arrowup'"></ui-icon>
      </div>
    </div>
  </div>
</template>
<script>
  import UiLayout from '../../../src/component/layout'
  import UiHeader from '../../../src/component/header'
  import UiFooter from '../../../src/component/footer'
  import UiContent from '../../../src/component/content'
  import UiSider from '../../../src/component/sider'
  import UiIcon from '../../../src/component/icon/icon'
  import mixin from '../mixin'

  export default {
    components: { UiLayout, UiHeader, UiFooter, UiContent, UiSider, UiIcon },
    mixins: [mixin],
    data () {
      return {
        codeStr: `
          <ui-layout style="color: white;">
            <ui-header style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
              header
            </ui-header>
            <ui-content style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;">
              content
            </ui-content>
            <ui-footer style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
              footer
            </ui-footer>
          </ui-layout>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr2: `
            <ui-layout style="color: white; overflow:hidden;">
              <ui-header style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
                header
              </ui-header>
              <ui-layout>
                <ui-sider style="display:flex;justify-content: center;align-items: center;height: 100px; background:#03a9f4d9; width:200px; color: black;">
                  sider
                </ui-sider>
                <ui-content style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;">
                  content
                </ui-content>
              </ui-layout>
              <ui-footer style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
                footer
              </ui-footer>
            </ui-layout>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr3: `
          <ui-layout style="color: white; overflow:hidden;">
            <ui-sider style="display:flex;justify-content: center;align-items: center; background:#03a9f4d9; width:200px; color: white;">
              sider
            </ui-sider>
            <ui-layout>
              <ui-header style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
                header
              </ui-header>
              <ui-content style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;">
                content
              </ui-content>
              <ui-footer style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
                footer
              </ui-footer>
            </ui-layout>
          </ui-layout>
        `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
<style scoped>
  * {
    box-sizing: border-box;
  }
</style>
