import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Pager from '../../src/component/pager/pager'
import Vue from 'vue'

chai.use(sinonChai)

describe('Pager', () => {
  it('Pager存在.', () => {
    expect(Pager).to.exist
  })
})
