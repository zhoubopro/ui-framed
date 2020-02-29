<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
  let validator = value => {
    let keys = Object.keys(value);
    let valid = true;
    keys.forEach(key => {
      if (!["span", "offset"].includes(key)) {
        valid = false;
      }
    });
    return valid;
  };

  export default {
    name: "g-col",
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String],
        default: 0
      },
      phone: {
        type: Object,
        validator
      },
      ipad: {
        type: Object,
        validator
      },
      narrowPc: {
        type: Object,
        validator
      },
      pc: {
        type: Object,
        validator
      },
      widePc: {
        type: Object,
        validator
      }
      // gutter: {
      //   type: [Number, String]
      // }
    },
    data () {
      return {
        gutter: 0
      }
    },
    computed: {
      colClass () {
        const { span, offset, phone, ipad, narrowPc, pc, widePc } = this;
        return [
          span && `col-${span}`,
          offset && `offset-${offset}`,
          ... (phone ? [`col-phone-${phone.span}`] : []),
          ... (ipad ? [`col-ipad-${ipad.span}`] : []),
          ... (narrowPc ? [`col-narrow-pc-${narrowPc.span}`] : []),
          ... (pc ? [`col-pc-${pc.span}`] : []),
          ... (widePc ? [`col-wide-pc-${widePc.span}`] : []),
        ]
      },
      colStyle () {
        return {
          paddingLeft: `${this.gutter / 2}px`,
          paddingRight: `${this.gutter / 2}px`
        }
      }
    },
    created () {
      console.log('col created');
    },
    mounted () {
      console.log('col mounted');
    }
  }
</script>

<style scoped lang="scss">
  .col {
    /*width: 50%;*/
    $span-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$span-prefix}#{$n} {
        width: ($n/24) * 100%;
      }
    }
    $offset-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$offset-prefix}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
    @media (max-width: 576px) {
      $span-prefix: col-phone-;
      @for $n from 1 through 24 {
        &.#{$span-prefix}#{$n} {
          width: ($n/24) * 100%;
        }
      }
      $offset-prefix: offset-phone-;
      @for $n from 1 through 24 {
        &.#{$offset-prefix}#{$n} {
          margin-left: ($n/24) * 100%;
        }
      }
    }
    @media (min-width: 577px) and (max-width: 768px) {
      $span-prefix: col-ipad-;
      @for $n from 1 through 24 {
        &.#{$span-prefix}#{$n} {
          width: ($n/24) * 100%;
        }
      }
      $offset-prefix: offset-ipad-;
      @for $n from 1 through 24 {
        &.#{$offset-prefix}#{$n} {
          margin-left: ($n/24) * 100%;
        }
      }
    }
    @media (min-width: 769px) and (max-width: 992px) {
      $span-prefix: col-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$span-prefix}#{$n} {
          width: ($n/24) * 100%;
        }
      }
      $offset-prefix: offset-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$offset-prefix}#{$n} {
          margin-left: ($n/24) * 100%;
        }
      }
    }
    @media (min-width: 993px) and (max-width: 1200px) {
      $span-prefix: col-pc-;
      @for $n from 1 through 24 {
        &.#{$span-prefix}#{$n} {
          width: ($n/24) * 100%;
        }
      }
      $offset-prefix: offset-pc-;
      @for $n from 1 through 24 {
        &.#{$offset-prefix}#{$n} {
          margin-left: ($n/24) * 100%;
        }
      }
    }
    @media (min-width: 1201px) {
      $span-prefix: col-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$span-prefix}#{$n} {
          width: ($n/24) * 100%;
        }
      }
      $offset-prefix: offset-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$offset-prefix}#{$n} {
          margin-left: ($n/24) * 100%;
        }
      }
    }
  }
</style>
