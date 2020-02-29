<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}" @click="handleClick">
    <g-icon v-if="icon && !loading" :name="icon" class="svg-icon" ></g-icon>
    <g-icon v-if="loading" name="refresh" class="svg-icon loading" ></g-icon>
    <div class="content">
      <slot />
    </div>
  </button>
</template>
<script>
  import Icon from '../icon'
  export default {
    components:{
      'g-icon': Icon
    },
    props: {
      icon: {
        type: String,
        default: ''
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator (val) {
          return val === 'left' || val === 'right'
        }
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      handleClick(){
        this.$emit('click')
      }
    }
  }
</script>
<style lang="scss">
  @keyframes spin {
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
  }
  .g-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    /*font: inherit;*/
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &:hover {
      border-color: var(--border-color-hover);
    }
    &:active {
      background: var(--button-active-bg);
    }
    &:focus {
      outline: none;
    }
    > .svg-icon {
      order: 1;
      margin: .1em .2em 0 0;
    }
    > .content {
      order: 2;
    }
    &.icon-right {
      > .content {
        order: 1;
      }
      > .svg-icon {
        order: 2;
        margin: .1em 0 0 .2em;
      }
    }
    .loading{
      animation: spin 1.5s infinite linear;
    }
  }
</style>
