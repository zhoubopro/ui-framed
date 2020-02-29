<template>
  <div class="wrapper" :class="{error}">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
      @change="$emit('change', $event)"
      @input="$emit('change', $event)"
      @foucs="$emit('change', $event)"
      @blur="$emit('change', $event)"
    >
    <template v-if="error">
      <!--<Icon name="prompt"></Icon>-->
      <Icon name="error" class="icon-error"></Icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>

<script>
  import Icon from '../icon'

  export default {
    name: "g-input",
    props: {
      value: {
        type: [String, Number],
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    },
    components: {
      Icon
    }
  }
</script>

<style scoped lang="scss">
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 12px;
  $box-shadow-color: rgba(0, 0, 0, .5);
  $red: #F1453D;
  .wrapper {
    font-size: $font-size;display: inline-flex;align-items: center;
    /*> * {*/
    /*margin-right: .5em;*/
    /*&:last-child {margin-right: 0}*/
    /*}*/
    > :not(:last-child) { margin-right: .5em;}
    > input {
      height: $height; border: 1px solid $border-color;border-radius: $border-radius;padding: 0 8px;font-size: inherit;
      &:hover {
        border-color: $border-color-hover;
      }
      &:focus {
        box-shadow: inset 0 1px 3px $box-shadow-color;
        outline: none;
      }
      &[disabled] {
        color: #bbb;
        border-color: #bbb;
        cursor: not-allowed;
      }
      &[readonly] {
        color: #bbb;
        border-color: #bbb;
        cursor: not-allowed;
      }
    }
    &.error {
      > input {
        border-color: $red;
      }
    }
    .icon-error {
      fill: $red;
    }
    .errorMessage {
      color: $red;
    }
  }
</style>
