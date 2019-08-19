<template>
	<div class="layout-container">
		<div class="content-container">
			<slot></slot>
		</div>
		<!-- <TabBar v-show="isBar"/> -->
	</div>
</template>

<script>
	// import TabBar from "./tabBar";
	
	export default {
		name: "Layout",
		components: {
		},
		data() {
			return {};
		},
		computed: {
			// 除首页、我的，其他页面不显示tabBar，需要显示的添加到白名单即可
			isBar() {
				let whiteNameList = ["demoPage", "home", "my"];
				if (whiteNameList.includes(this.$route.name)) {
					return true;
				}
				return false;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.layout-container {
		height: 100vh;
		.content-container {
			height: 100vh;
			overflow-x: hidden;
			overflow-y: scroll;
		}
	}
</style>
