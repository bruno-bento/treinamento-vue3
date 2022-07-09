import { mount } from '@vue/test-utils'
import Playground from './index.vue'

describe('<Playground />', () => {
  it('should component render correctly', () => {
    const wrapper = mount(Playground)
    expect(wrapper).toMatchSnapshot()
  })
})
