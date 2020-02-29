import Vue from 'vue';
import ButtonGroup from './component/button-group/index.js';
import Button from './component/button/index.js';
import Icon from './component/icon/index.js';
import Input from './component/input/index.js';
import Row from './component/row/index.js';
import Col from './component/col/index.js';

Vue.component('g-button-group', ButtonGroup);
Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-input', Input);
Vue.component('g-row', Row);
Vue.component('g-col', Col);

new Vue({
  el: "#app",
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
  },
  methods: {
    inputChange (e) {
      console.log(e.target.value);
    }
  }
})

// 单元测试
import chai from 'chai';

let expect = chai.expect

import spies from 'chai-spies';

chai.use(spies)
try {
// 测试按钮含有 icon
  {
    const ButtonConstructor = Vue.extend(Button)
    // 生成一个button实例
    const button = new ButtonConstructor({
      propsData: {
        icon: 'set',
      }
    });
    // 把button挂在到内存里面
    button.$mount()
    // 去button里面找有没有一个use的标签
    let useElement = button.$el.querySelector('use');
    // 判断useElement的href是否等于#icon-set
    expect(useElement.getAttribute('xlink:href')).to.eq('#icon-set')
  }
  {
    const ButtonConstructor = Vue.extend(Button)
    const button = new ButtonConstructor({
      propsData: {
        icon: 'set',
        loading: true
      }
    });
    button.$mount()
    let useElement = button.$el.querySelector('use');
    console.log('use', useElement);
    expect(useElement.getAttribute('xlink:href')).to.eq('#icon-refresh')
  }
  {
    const div = document.createElement('div');
    document.body.appendChild(div)
    const ButtonConstructor = Vue.extend(Button)
    const button = new ButtonConstructor({
      propsData: {
        icon: 'set',
      }
    });
    button.$mount(div)
    let svg = button.$el.querySelector('svg');
    let { order } = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    button.$el.remove();
    button.$destroy();
  }
  {
    const div = document.createElement('div');
    document.body.appendChild(div)
    const ButtonConstructor = Vue.extend(Button)
    const button = new ButtonConstructor({
      propsData: {
        icon: 'set',
        iconPosition: 'right'
      }
    });
    button.$mount(div)
    let svg = button.$el.querySelector('svg');
    let { order } = window.getComputedStyle(svg)
    expect(order).to.eq('2');
    button.$el.remove();
    button.$destroy();
  }
  {
    const ButtonConstructor = Vue.extend(Button)
    const button = new ButtonConstructor({
      propsData: {
        icon: 'set',
      }
    });
    button.$mount()
    let spy = chai.spy(function () {
      console.log(1);
    })
    button.$on('click', spy)
    let btn = button.$el
    btn.click()
    expect(spy).to.have.been.called()
    // expect(order).to.eq('2');
    // button.$el.remove();
    // button.$destroy();
  }
} catch (e) {
  console.log(e)
}
