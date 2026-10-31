import { mount } from '@vue/test-utils'
import { defineComponent, h, markRaw } from 'vue'
import { Grid } from '@progress/kendo-vue-grid'

// https://github.com/telerik/kendo-vue/issues/887
const CustomPinCell = markRaw(defineComponent({
  props: { dataItem: Object, tdProps: Object },
  setup (props) {
    return () => h('td', props.tdProps, 'custom-pin-' + props.dataItem.Id)
  }
}))

const CustomDataCell = markRaw(defineComponent({
  props: { dataItem: Object, field: String, tdProps: Object },
  setup (props) {
    return () => h('td', props.tdProps, 'custom-data-' + props.dataItem[props.field])
  }
}))

describe('Grid pin column custom cells', () => {
  const mountGrid = () => mount(Grid, {
    props: {
      dataItems: [
        { Id: 1, Product: 'toy' },
        { Id: 2, Product: 'car' }
      ],
      pinnable: true,
      columns: [
        { columnType: 'pin' },
        { field: 'Id' },
        { field: 'Product' }
      ],
      cells: {
        data: CustomDataCell,
        pin: { data: CustomPinCell }
      }
    }
  })

  it('renders the custom cells.data component', () => {
    const text = mountGrid().find('tbody').text()
    expect(text).toContain('custom-data-toy')
    expect(text).toContain('custom-data-car')
  })

  it('renders the custom cells.pin.data component instead of the built-in pin cell', () => {
    const wrapper = mountGrid()
    const text = wrapper.find('tbody').text()
    expect(text).toContain('custom-pin-1')
    expect(text).toContain('custom-pin-2')
    expect(wrapper.findAll('tbody .k-pin-cell').length).toBe(0)
  })
})
