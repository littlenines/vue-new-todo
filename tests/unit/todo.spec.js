import { mount } from '@vue/test-utils'
import ToDo from '@/components/ToDo.vue'

describe('ToDo.vue', () => {
  it('should button have ADD text', () => {
    const wrapper = mount(ToDo)
    const dataButton = wrapper.get('[data-test="button"]')
    expect(dataButton.text()).toMatch('ADD')
  })

  it('should list have default length two', () => {
    const wrapper = mount(ToDo)
    const listItems = wrapper.findAll('[data-test="list"]')
    expect(listItems).toHaveLength(2);
  })

  it('should add into list on input and button click', async () => {
    const wrapper = mount(ToDo)
    expect(wrapper.findAll('[data-test="list"]')).toHaveLength(2);
    await wrapper.get('[data-test="input"]').setValue('Buy Elden Ring')
    await wrapper.get('[data-test="button"]').trigger('click');
    expect(wrapper.findAll('[data-test="list"]')).toHaveLength(3);
  })

  it('should delete item on click', async () => {
    const wrapper = mount(ToDo)
    await wrapper.findAll('[data-test="delete"]')[0].trigger('click');
    await wrapper.findAll('[data-test="delete"]')[0].trigger('click');
    expect(wrapper.findAll('[data-test="list"]')).toHaveLength(1);
  })
})
