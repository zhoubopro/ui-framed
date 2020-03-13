<template>
  <div :class="wrapClasses">
    <slot></slot>
  </div>
</template>

<script>
  const prefixCls = 'ui-layout';
  export default {
    name: "ui-layout",
    data () {
      return {
        hasSider: false
      };
    },
    computed: {
      wrapClasses () {
        return [
          `${prefixCls}`,
          {
            [`${prefixCls}-has-sider`]: this.hasSider
          }
        ];
      }
    },
    mounted(){
      this.hasSider = this.findSider();
    },
    methods:{
      findSider () {
        return this.$children.some(child => {
          // console.log(child.$options.name);
          return child.$options.name === 'ui-sider';
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../styles/_var.scss';

  .ui-layout{
    display: flex;
    flex-direction: column;
    flex: auto;
    background: $layout-body-background;
    &-has-sider{
      flex-direction: row;
    }
  }
</style>
