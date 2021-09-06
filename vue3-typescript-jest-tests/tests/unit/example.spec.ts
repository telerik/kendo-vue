
import { mount } from '@vue/test-utils'
// GridVue3 is a special vue 3 type of the Kendo Grid component - in our next major release it will be available in the default Grid object.
import { GridVue3 as Grid } from '@progress/kendo-vue-grid'

describe('HelloWorld.vue', () => {

  it('Kendo Grid renders 1 item', () => {
    const wrapper1 = mount(Grid, {
      props: { 
          dataItems: [{
            Id:1,
            Product: 'toy'
          }]
       },
       
    })
    expect(wrapper1.findAll('.k-master-row').length).toBe(1)
  })

  it('Kendo Grid renders 2 items', () => {
    const wrapper1 = mount(Grid, {
      props: { 
          dataItems: [{
            Id:1,
            Product: 'toy'
          },
          {
            Id:2,
            Product: 'car'
          }]
       },
       
    })
    expect(wrapper1.findAll('.k-master-row').length).toBe(2)
  })
})
