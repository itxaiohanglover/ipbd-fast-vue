<template>
	<div class="sidebar-logo" @click="goHome()">
		<img class="logo" src="./ipbd.png" />
		<span>{{ $t('app.miniLogoText') }}</span>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
	router.push('/home')
}
</script>

<style lang="scss" scoped>
.sidebar-logo {
	width: 230px !important;
	height: var(--theme-header-height);
	line-height: var(--theme-header-height);
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: rgb(0 21 41 / 2%) 0 1px 4px;
	color: var(--theme-logo-text-color);
	font-size: 18px;
	.logo {
		height: 25px;
	}
}
</style>
