<template>
  	<div class="row">
		<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 example-col">
			<p>Menu</p>
			<kendo-menu :data-source="dataSource"></kendo-menu>
		</div>
		<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 example-col">
			<p>Context Menu</p>
			<div id="target">Right click here</div>
			<kendo-contextmenu>
    			<li>Item 1
    			    <ul>
    			        <li>Sub Item 1</li>
    			        <li>Sub Item 2</li>
    			        <li>Sub Item 3</li>
    			    </ul>
    			</li>
    			<li>Item 2
    			    <ul>
    			        <li>Sub Item 1</li>
    			        <li>Sub Item 2</li>
    			        <li>Sub Item 3</li>
    			    </ul>
    			</li>
			</kendo-contextmenu>
		</div>
		<div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 example-col">
			<p>PanelBar</p>
			<kendo-panelbar>
				<li>
					Item 1
					<ul>
						<li>Sub Item 1</li>
						<li>Sub Item 2</li>
						<li>Sub Item 3</li>
					</ul>
				</li>
				<li>
					Item 2
					<ul>
						<li>Sub Item 1</li>
						<li>Sub Item 2</li>
						<li>Sub Item 3</li>
					</ul>
				</li>
			</kendo-panelbar>
		</div>
	</div>
	<div class="row">
		<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 example-col">
			<p>TabStrip</p>
			<kendo-tabstrip>
				<ul>
					<li class="k-state-active">
						Paris
					</li>
					<li>
						New York
					</li>
					<li>
						London
					</li>
					<li>
						Moscow
					</li>
				</ul>
				<div>
					<div>
						<h2>17<span>&ordm;C</span></h2>
						<p>Rainy weather in Paris.</p>
					</div>
				</div>
				<div>
					<div>
						<h2>29<span>&ordm;C</span></h2>
						<p>Sunny weather in New York.</p>
					</div>
				</div>
				<div>
					<div>
						<h2>21<span>&ordm;C</span></h2>
						<p>Sunny weather in London.</p>
					</div>
				</div>
				<div>
					<div>
						<h2>16<span>&ordm;C</span></h2>
						<p>Cloudy weather in Moscow.</p>
					</div>
				</div>
			</kendo-tabstrip>
		</div>
		<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 example-col">
			<p>Splitter</p>
			<kendo-splitter :orientation="'vertical'">
    		    <div>
					<kendo-splitter  :orientation="'horizontal'">
						<div>Top Left</div>
						<div>Top right</div>
					</kendo-splitter>
				</div>
    		    <div>Bottom</div>
    		</kendo-splitter>
		</div>
	</div>
</template>
<script>
import { markRaw } from 'vue';
import { Menu, ContextMenu, PanelBar, TabStrip, Splitter } from '@progress/kendo-layout-vue-wrapper';

export default {
  components: {
    'kendo-menu': Menu,
    'kendo-contextmenu': ContextMenu,
    'kendo-panelbar': PanelBar,
    'kendo-tabstrip': TabStrip,
    'kendo-splitter': Splitter
  },
  data: function(){
    return {
      dataSource: markRaw(new kendo.data.HierarchicalDataSource({
                data: [
                    {
                        text: 'Item1',
                        items: [
                            { text: 'SubItem1' },
                            { text: 'SubItem2' },
                            { text: 'SubItem3' },
                        ]
                    },
                    {
                        text: 'Item2',
                        items: [
                            { text: 'SubItem1' },
                            { text: 'SubItem2' },
                            { text: 'SubItem3' },
                        ]
                    }
                ]
            }))
      }
  }
}
</script>
