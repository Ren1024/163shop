<template>
	<view class="indexContainer">
		<!-- 头部区域 -->
		<view class="header">
			<image src="/static/images/logo.png" mode="" class="logo"></image>
			<view class="search">
				<text class="iconfont icon-search"></text>
				<input type="text" placeholder="搜索商品" placeholder-class="placeholder">
			</view>
			<button>死亡如风</button>
		</view>
		
		<!-- 导航区域 -->
		<scroll-view scroll-x="true" class="navScroll" enable-flex>
			<view class="navItem" :class="{active : navIndex === -1}" @click="changeIndex(-1)">
				推荐
			</view>
			<view class="navItem" :class="{active : navIndex === index}" v-for="(item, index) in indexData.kingKongModule.kingKongList" v-key="item.L1Id" @click="changeIndex(index)">
				{{item.text}}
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import request from '../../utils/request.js'
	export default {
		data() {
			return {
				indexData:{},
				navIndex: -1,
			}
		},
		
		mounted(){
			this.getIndexData()
		},
		methods:{
			async getIndexData(){
				const result = await request('/getIndexData')
				// console.log(result);
				this.indexData = result
			},
			changeIndex(navIndex){
				this.navIndex = navIndex
			}
		}
	}
</script>

<style lang="stylus">
/* 
	stylus特点
		1）省略大括号
		2）省略分号和冒号
	.title {
		color: red;
	}	
		
	.title
		color red
 */
.indexContainer
	.header
		display flex
		margin: 10rpx 0
		.logo
			width 120rpx
			height 40rpx
			margin: 10rpx 30rpx
		.search
			position: relative
			width 420rpx
			height 60rpx
			line-height: 60rpx
			background #eee
			.iconfont
				position: absolute
				// top: 15rpx
				left: 10rpx
				font-size: 30rpx
			input
				width: 380rpx
				height: 60rpx
				margin-left: 50rpx
				.placeholder 
					font-size: 26rpx
		button
			height 60rpx
			font-size 24rpx
			line-height 60rpx
			text-align: center
			padding: 0 10rpx
	
	
	.navScroll
		display: flex
		white-space: nowrap
		.navItem
			flex-shrink: 0
			width: 170rpx
			height: 80rpx
			line-height: 80rpx
			text-align: center
			font-size: 26rpx
			&.active
				border-bottom: 1rpx solid #bb2c08
.test
	font-size: 0
</style>
