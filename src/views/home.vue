<template>
	<!-- <video class="video" src=""></video> -->
	<div class="bg-container">
		<img src="https://xirealm.oss-cn-beijing.aliyuncs.com/xi/v2-4512c514732c060dd6b4f4269de50d01_r.jpg" alt="" class="bg" />
		<el-button class="develop" type="info">立即开发</el-button>
	</div>
	<!-- <el-card class="layout-home"></el-card> -->
</template>

<style scoped>
.layout-home {
	line-height: 2;
	font-size: 15px;
}

.layout-home h2 {
	margin: 6px 0;
}

.video {
	width: 100%;
	height: calc(100vh - 40px - var(--theme-header-height));
	background-color: black;
}

.bg-container {
	width: 100%;
	height: calc(100vh - var(--theme-header-height));
	overflow: hidden;
	.bg {
		width: 100%;
		position: absolute;
		top: 0;
		width: 100%;
	}
	.develop {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translateX(-50%);
		padding: 0 24px;
		min-width: 144px;
		height: 48px;
		font-size: 16px;
		border-radius: 100px;
		backdrop-filter: blur(24px);
		color: rgba(255, 255, 255, 0.8);
		background-color: #ffffff33;
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.develop:hover {
		background-color: #ffffff55;
	}
}
</style>
