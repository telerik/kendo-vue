<template>
	<span class="k-input">
                <span :style="{
                    display: 'inline-block',
                    background: '#333',
                    color: '#fff',
                    borderRadius: '50%',
                    width: '18px',
                    height: '18px',
                    textAlign: 'center',
                    overflow: 'hidden'
                }">
                {{value}}
            </span>
	<span>&nbsp;  {{value}}</span>
	</span>
</template>
<script>
	export default {
    props: {
        value: String
    }
}
</script>
