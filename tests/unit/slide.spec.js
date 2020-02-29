import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { shallowMount, mount } from '@vue/test-utils'
import Slide from '../../src/component/slide/slide'
import SlideItem from '../../src/component/slide/slide-item'
import Vue from 'vue'

chai.use(sinonChai)

describe('Slide.vue', () => {

  it('存在.', () => {
    expect(Slide).to.exist
  });

  it('接受 GSlideItem，默认展示第一个', (done) => {
    Vue.component('g-slide-item', SlideItem);
    const wrapper = mount(Slide, {
      propsData: {
        autoPlay: false
      },
      slots: {
        default: `
          <g-slide-item name="1">
            <div class="box1">1</div>
          </g-slide-item>
          <g-slide-item name="2">
            <div class="box2">2</div>
          </g-slide-item>
          <g-slide-item name="3">
            <div class="box3">3</div>
          </g-slide-item>
        `
      }
    })
    // console.log(wrapper.html());
    setTimeout(() => {
      // console.log('html', wrapper.html());
      expect(wrapper.find('.box1').exists()).to.be.true
      done()
    })
  })

  it('selected 是几，选中的就是几', (done) => {
    Vue.component('g-slide-item', SlideItem)
    const wrapper = mount(Slide, {
      propsData: {
        autoPlay: false,
        selected: '2'
      },
      slots: {
        default: `
          <g-slide-item name="1">
            <div class="box1">1</div>
          </g-slide-item>
          <g-slide-item name="2">
            <div class="box2">2</div>
          </g-slide-item>
          <g-slide-item name="3">
            <div class="box3">3</div>
          </g-slide-item>
        `
      }
    })
    setTimeout(() => {
      expect(wrapper.find('.box2').exists()).to.be.true
      done()
    })
  })

  it('点击第二个就展示第二个', (done) => {
    Vue.component('g-slide-item', SlideItem)
    const wrapper = mount(Slide, {
      propsData: {
        autoPlay: false,
        selected: '1'
      },
      slots: {
        default: `
          <g-slide-item name="1">
            <div class="box1">1</div>
          </g-slide-item>
          <g-slide-item name="2">
            <div class="box2">2</div>
          </g-slide-item>
          <g-slide-item name="3">
            <div class="box3">3</div>
          </g-slide-item>
        `
      },
      listeners: {
        'update:selected': (x) => {
          expect(x).to.eq('2');
          done()
        }
      }
    });
    setTimeout(() => {
      wrapper.find('[data-index="1"]').trigger('click')
    })
  })

  it('自动播放', (done) => {
    Vue.component('g-slide-item', SlideItem)
    const callback = sinon.fake();
    const wrapper = mount(Slide, {
      propsData: {
        selected: '1',
        timer: 1,
        autoPlay: true
      },
      slots: {
        default: `
          <g-slide-item name="1">
            <div class="box1">1</div>
          </g-slide-item>
          <g-slide-item name="2">
            <div class="box2">2</div>
          </g-slide-item>
          <g-slide-item name="3">
            <div class="box3">3</div>
          </g-slide-item>
        `
      },
      listeners: {
        'update:selected': callback
      }
    });

    setTimeout(() => {
      expect(callback).to.have.been.calledWith('2');
      done()
    }, 1500)
  })

  it('可以点击上一张', (done) => {
    Vue.component('g-slide-item', SlideItem)
    const callback = sinon.fake();
    const wrapper = mount(Slide, {
      propsData: {
        autoPlay: true,
        timer: 1,
        selected: '1'
      },
      slots: {
        default: `
          <g-slide-item name="1">
            <div class="box1">1</div>
          </g-slide-item>
          <g-slide-item name="2">
            <div class="box2">2</div>
          </g-slide-item>
          <g-slide-item name="3">
            <div class="box3">3</div>
          </g-slide-item>
        `
      },
      listeners: {
        'update:selected': callback
      }
    })
    setTimeout(() => {
      wrapper.find('[data-action="prev"]').trigger('click')
      expect(callback).to.have.been.calledWith('3')
      done()
    }, 1000)
  });

  it('可以点击下一张', (done) => {
    Vue.component('g-slide-item', SlideItem)
    const callback = sinon.fake();
    const wrapper = mount(Slide, {
      propsData: {
        autoPlay: true,
        timer: 1,
        selected: '1'
      },
      slots: {
        default: `
          <g-slide-item name="1">
            <div class="box1">1</div>
          </g-slide-item>
          <g-slide-item name="2">
            <div class="box2">2</div>
          </g-slide-item>
          <g-slide-item name="3">
            <div class="box3">3</div>
          </g-slide-item>
        `
      },
      listeners: {
        'update:selected': callback
      }
    });

    setTimeout(() => {
      wrapper.find('[data-action="next"]').trigger('click')
      expect(callback).to.have.been.calledWith('2')
      done()
    }, 1000)
  })
});
