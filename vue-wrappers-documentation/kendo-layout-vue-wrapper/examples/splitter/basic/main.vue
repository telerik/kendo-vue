<template>
  	 <kendo-splitter :orientation="'vertical'">
        <div>
			<kendo-splitter  :orientation="'horizontal'">
				<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
				<div>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                <div>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </div>
			</kendo-splitter>
		</div>
        <div>
            <kendo-splitter  :orientation="'vertical'">
				<div>News</div>
				<div>Weather forecast</div>               
			</kendo-splitter>
        </div>
    </kendo-splitter>
</template>
<script>
import { Splitter } from '@progress/kendo-layout-vue-wrapper';
export default {
  components: {
    'kendo-splitter': Splitter
  }
}
</script>
