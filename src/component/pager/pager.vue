<template>
  <div class="ui-pager" :class="{hide: hideIfOnePage === true && totalPage <= 1}">
    <span
      class="ui-pager-nav prev"
      :class="{disabled:currentPage===1}"
      @click="onClickPage(currentPage-1)"
    >
      <ui-icon name="arrowleft"></ui-icon>
    </span>
    <template v-for="page in pages">
      <template v-if="page === currentPage">
        <span class="ui-pager-item current">{{page}}</span>
      </template>
      <template v-else-if="page === '...'">
        <span>...</span>
        <!--<ui-icon class="ui-pager-separator" name="dots"></ui-icon>-->
      </template>
      <template v-else>
        <span class="ui-pager-item other" @click="onClickPage(page)">{{page}}</span>
      </template>
    </template>
    <span class="ui-pager-nav next" :class="{disabled: currentPage===totalPage}"
          @click="onClickPage(currentPage+1)">
      <ui-icon name="arrowright"></ui-icon>
    </span>
  </div>
</template>

<script>
  import UiIcon from '../icon/icon'

  export default {
    name: "ui-pager",
    props: {
      totalPage: {
        type: Number,
        required: true
      },
      currentPage: {
        type: Number,
        required: true
      },
      hideIfOnePage: {
        type: Boolean,
        default: true
      }
    },
    components: {
      UiIcon
    },
    computed: {
      pages () { // 依赖了 totalPage 和 currentPage
        return unique([1, this.totalPage,
          this.currentPage,
          this.currentPage - 1, this.currentPage - 2,
          this.currentPage + 1, this.currentPage + 2]
          .filter(n => n >= 1 && n <= this.totalPage)
          .sort((a, b) => a - b))
          .reduce((prev, current, index, array) => {
            prev.push(current);
            array[index + 1] !== undefined && array[index + 1] - array[index] > 1 && prev.push('...');
            return prev
          }, [])
      }
    },
    methods: {
      onClickPage (n) {
        if (n >= 1 && n <= this.totalPage) {
          this.$emit('update:currentPage', n)
        }
      }
    }
  }

  function unique (array) {
    // return [...new Set(array)];
    const object = {};
    array.map(number => {
      object[number] = true
    })
    return Object.keys(object).map(s => parseInt(s, 10))
  }
</script>

<style scoped lang="scss">
  .ui-pager {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    user-select: none;
    $width: 24px;
    $height: 24px;
    $font-size: 14px;
    &.hide {
      display: none;
    }
    &-separator {
      width: $width;
      font-size: $font-size;
    }
    &-item {
      min-width: $width;
      height: $height;
      font-size: $font-size;
      border: 1px solid #e1e1e1;
      border-radius: $border-radius;
      padding: 0 4px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin: 0 4px;
      cursor: pointer;
      &.current, &:hover {
        border-color: $blue;
      }
      &.current {
        cursor: default;
      }
    }
    &-nav {
      margin: 0 4px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      background: $grey;
      height: $height;
      width: $width;
      border-radius: $border-radius;
      font-size: $font-size;
      cursor: pointer;
      &.disabled {
        cursor: default;
        svg {
          fill: darken($grey, 30%);
        }
      }
    }
  }
</style>
