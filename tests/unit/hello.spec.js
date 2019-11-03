import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Sum from '@/views/About.vue'

describe('sum', () => {
  it('sum should be 3', () => {

    //const wrapper = shallowMount(HelloWorld, {
    //  propsData: { msg }
    //})
    const wrapper = shallowMount(Sum)
    //console.info("-- wrapper is: ", wrapper )
//    console.info("-- vm is: ", wrapper.vm )
    console.info("-- vm is: ", wrapper.vm.a, wrapper.vm.b, wrapper.vm.sum )

    //expect(Sum.methods.sum()).to.equal(3)
    expect(wrapper.vm.sum()).to.equal(3)
  })
})
