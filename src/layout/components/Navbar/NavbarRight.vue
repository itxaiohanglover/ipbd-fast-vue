<template>
	<div class="navbar-right">
		<Search />
		<Fullscreen />
		<User />
		<!-- 主题设置 -->
		<ThemeSettings />
	</div>
</template>

<script setup lang="ts">
import Search from './components/Search.vue'
import Fullscreen from './components/Fullscreen.vue'
import User from './components/User.vue'
import ThemeSettings from './components/ThemeSettings.vue'
</script>

<style lang="scss" scoped>
.navbar-right {
	display: flex;
	align-items: center;
	justify-content: flex-end;
	&-link {
		height: 100%;
		display: flex;
		align-items: center;
		white-space: nowrap;
		&-photo {
			width: 25px;
			height: 25px;
			border-radius: 100%;
		}
	}
}
</style>
