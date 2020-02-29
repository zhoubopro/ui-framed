<template>
  <div class="g-nav" :class="{vertical}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "g-nav",
    provide () {
      return {
        root: this,
        vertical: this.vertical
      }
    },
    props: {
      selected: {
        type: String,
      },
      multiple: {
        type: Boolean,
        default: false
      },
      vertical: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        items: [],
        namePath: []
      }
    },
    computed: {
      // items () {
      //   return this.$children.filter(vm => vm.$options.name === "g-nav-item");
      // }
    },
    mounted () {
      this.updateChildren();
      this.listenToChildren();
    },
    updated () {
      this.updateChildren();
    },
    methods: {
      addItem (vm) {
        this.items.push(vm)
      },
      updateChildren () {
        this.items.forEach(vm => {
          if (this.selected === vm.name) {
            vm.selected = true
          } else {
            vm.selected = false
          }
        });
      },
      listenToChildren () {
        this.items.forEach(vm => {
          vm.$on('update:selected', (name) => {
            this.$emit('update:selected', name)
          })
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  .g-nav {
    display: flex;
    border-bottom: 1px solid #eee;
    color: #333;
    cursor: default;
    user-select: none;
    &.vertical {
      flex-direction: column;
      border: 1px solid #eee;
    }
  }
</style>
