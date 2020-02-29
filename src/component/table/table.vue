<template>
  <div class="g-table-wrapper" ref="wrapper">
    <div :style="{height: height + 'px', overflow: 'auto'}" ref="tableWrapper">
      <table
        class="g-table" :class="{bordered, compact, striped}"
        ref="table"
      >
        <thead>
        <tr>
          <th v-if="expendField" :style="{width: '50px'}" class="g-table-center"></th>
          <th v-if="checkable" :style="{width: '50px'}" class="g-table-center">
            <input
              type="checkbox"
              @change="onChangeAllItems"
              ref="allChecked"
              :checked="areAllItemsSelected"
            />
          </th>
          <th :style="{width: '50px'}" v-if="numberVisible">#</th>
          <th v-for="column in columns" :key="column.field" :style="{width: column.width +'px'}">
            <div class="g-table-header">
              {{column.text}}
              <span
                v-if="column.field in orderBy"
                class="g-table-sorter"
                @click="changeOrderBy(column.field)"
              >
            <g-icon
              name="up-arrow"
              :class="{active: orderBy[column.field] === 'asc'}">
            </g-icon>
            <g-icon
              name="down-arrow"
              :class="{active: orderBy[column.field] === 'desc'}">
            </g-icon>
          </span>
            </div>
          </th>
          <th ref="actionsHeader" v-if="$scopedSlots.default"></th>
        </tr>
        </thead>
        <tbody>
        <template v-for="(item,index) in dataSource">
          <tr :key="item.id">
            <td v-if="expendField" :style="{width: '50px'}" class="g-table-center">
              <g-icon :class="[expendClass(item.id)]" name="arrowright" class="g-table-expendIcon"
                      @click="expendItem(item.id)" />
            </td>
            <td v-if="checkable" :style="{width: '50px'}" class="g-table-center">
              <input
                type="checkbox"
                @change="onchangeItem(item, index, $event)"
                :checked="inSelectedItems(item)"
              />
            </td>
            <td :style="{width: '50px'}" v-if="numberVisible">{{index + 1}}</td>
            <template v-for="column in columns">
              <td :style="{width: column.width +'px'}" :key="column.field">
                {{item[column.field]}}
              </td>
            </template>
            <td v-if="$scopedSlots.default">
              <div ref="actions" style="display: inline-block;">
                <slot :item="item"></slot>
              </div>
            </td>
          </tr>
          <tr v-if="inExpendedIds(item.id)">
            <td :colspan="columns.length + expendedCellColSpan">
              {{item[expendField] || '-'}}
            </td>
          </tr>
        </template>
        </tbody>
      </table>
    </div>

    <div v-if="loading" class="g-table-loading">
      <g-icon name="set"></g-icon>
    </div>
  </div>
</template>

<script>
  import GIcon from '../icon/icon';

  export default {
    name: "g-table",
    components: {
      GIcon,
    },
    props: {
      height: {
        type: Number
      },
      expendField: {
        type: String,
      },
      orderBy: {
        type: Object,
        default: () => ({}),
      },
      loading: {
        type: Boolean,
        default: false,
      },
      striped: {
        type: Boolean,
        default: true
      },
      selectedItems: {
        type: Array,
        default: () => []
      },
      compact: {
        type: Boolean,
        default: false
      },
      columns: {
        type: Array,
        require: true
      },
      dataSource: {
        type: Array,
        require: true,
        validator (array) {
          return array.filter(item => item.id === undefined).length > 0 ? false : true;
        }
      },
      numberVisible: {
        type: Boolean,
        default: false
      },
      bordered: {
        type: Boolean,
        default: false
      },
      checkable: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        expendedIds: [],
        open
      }
    },
    computed: {
      expendClass () {
        return function (id) {
          return this.inExpendedIds(id) ? 'expend' : '';
        }
      },
      areAllItemsSelected () {
        let a = this.dataSource.map(item => item.id).sort();
        let b = this.selectedItems.map(item => item.id).sort();
        if (a.length !== b.length) {
          return false
        }
        let equal = true;
        for (let i = 0; i < a.length; i++) {
          if (a[i] !== b[i]) {
            equal = false;
            break;
          }
        }
        return equal;
      },
      expendedCellColSpan () {
        let result = 0;
        if (this.checkable) {
          result += 1
        }
        if (this.expendField) {
          result += 1
        }
        if (this.$scopedSlots.default) {
          result += 1
        }
        return result
      }
    },
    mounted () {
      let table2 = this.$refs.table.cloneNode(false);
      this.table2 = table2
      table2.classList.add('g-table-copy');
      let thead = this.$refs.table.children[0];
      let { height } = thead.getBoundingClientRect();
      this.$refs.tableWrapper.style.marginTop = height + 'px';
      this.$refs.tableWrapper.style.height = this.height - height + 'px'
      table2.appendChild(thead);
      this.$refs.wrapper.appendChild(table2);
      window.addEventListener('resize', () => this.onWindowResize)


      // console.log(this.$scopedSlots);
      // console.log(this.$slots);
      if (this.$scopedSlots.default) {
        let div = this.$refs.actions[0]
        let { width } = div.getBoundingClientRect()
        let parent = div.parentNode
        let styles = getComputedStyle(parent)
        let paddingLeft = styles.getPropertyValue('padding-left')
        let paddingRight = styles.getPropertyValue('padding-right')
        let borderLeft = styles.getPropertyValue('border-left-width')
        let borderRight = styles.getPropertyValue('border-right-width')
        let width2 = width + parseInt(paddingRight) + parseInt(paddingRight) + parseInt(borderLeft) + parseInt(borderRight) + 'px'
        this.$refs.actionsHeader.style.width = width2
        this.$refs.actions.map(div => {
          div.parentNode.style.width = width2
        })
      }
    },
    methods: {
      inExpendedIds (id) {
        return this.expendedIds.indexOf(id) >= 0;
      },
      expendItem (id) {
        if (this.inExpendedIds(id)) {
          this.expendedIds.splice(this.expendedIds.indexOf(id), 1)
        } else {
          this.expendedIds.push(id)
        }
      },
      changeOrderBy (key) {
        const copy = JSON.parse(JSON.stringify(this.orderBy));
        let oldValue = copy[key];
        if (oldValue === 'asc') {
          copy[key] = 'desc';
        } else if (oldValue === 'desc') {
          copy[key] = true;
        } else {
          copy[key] = 'asc';
        }
        this.$emit('update:orderBy', copy)
      },
      inSelectedItems (item) {
        return this.selectedItems.filter(i => i.id === item.id).length > 0;
      },
      onchangeItem (item, index, e) {
        let selected = e.target.checked;
        let copyItems = JSON.parse(JSON.stringify(this.selectedItems));
        if (selected) {
          copyItems.push(item)
        } else {
          copyItems = copyItems.filter(i => i.id !== item.id)
        }
        this.$emit('update:selectedItems', copyItems);
      },
      onChangeAllItems (e) {
        let selected = e.target.checked;
        this.$emit('update:selectedItems', selected ? this.dataSource : []);
      }
    },
    watch: {
      // 半选
      selectedItems () {
        if (this.selectedItems.length === this.dataSource.length) {
          this.$refs.allChecked.indeterminate = false
        } else if (this.selectedItems.length === 0) {
          this.$refs.allChecked.indeterminate = false
        } else {
          this.$refs.allChecked.indeterminate = true
        }
      }
    },
    beforeDestroy () {
      this.table2.remove();
    }
  }
</script>

<style scoped lang="scss">
  $tgrey: darken($grey, 10%);
  .g-table-wrapper {
    position: relative;
    overflow: auto;
    .g-table {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
      border-bottom: 1px solid $tgrey;
      &.bordered {
        border: 1px solid $tgrey;
        td, th {
          border: 1px solid $tgrey;
        }
      }
      &.compact {
        th, td {
          padding: 4px;
        }
      }
      &.striped {
        tbody {
          > tr {
            &:nth-child(odd) {
              background: white;
            }
            &:nth-child(even) {
              background: lighten($tgrey, 12%);
            }
          }
        }
      }
      &-sorter {
        display: inline-flex;
        flex-direction: column;
        margin: 0 4px;
        cursor: pointer;
        svg {
          width: 8px;
          height: 8px;
          fill: $grey;
          &.active {
            fill: red;
          }
        }
      }
      &-header {
        display: flex;
        align-items: center;
      }
      th, td {
        border-bottom: 1px solid $tgrey;
        text-align: left;
        padding: 8px;
      }
      /*&-wrapper{*/
      /*position: relative;*/
      /*overflow: auto;*/
      /*}*/
      &-loading {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.7);
        svg {
          width: 30px;
          height: 30px;
          animation: spin 1.5s infinite linear;
        }
      }
      &-copy {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background: white;
      }
      &-expendIcon {
        width: 10px;
        height: 10px;
      }
      &-center {
        text-align: center !important;
      }
      .expend {
        transform: rotate(90deg);
      }
    }
  }
</style>
