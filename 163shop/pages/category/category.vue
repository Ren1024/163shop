<template>
	<view class="categoryContainer">
		<!-- 头部搜索区 -->
		<view class="header">
			<view class="search">搜索商品</view>
		</view>
		
		<!-- 分类内容区 -->
		<view class="contentContainer">
			<!-- 左边 -->
			<view class="leftContainer">
				<scroll-view scroll-y="true" class="navScroll">
					<view class="navItem" :class="{active : categoryIndex === index}" @click="changeIndex(index)" v-for="(item, index) in categoryList" :key="item.id">
						{{item.name}}
					</view>
				</scroll-view>
			</view>
			<!-- 右边 -->
			<view class="rightContainer">
				<scroll-view scroll-y="true" class="shopScroll">
					<view class="shopHeader">
						<img class="banner" :src="categoryObj.imgUrl" alt="">
					</view>
					<view class="shopList">
						<view class="shopItem" v-for="item in categoryObj.subCateList" v-bind:key="item.id">
							<img class="shopImg" :src="item.wapBannerUrl" alt="">
							<text class="shopName">{{item.name}}</text>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import request from '../../utils/request.js'
	export default {
		data() {
			return {
				categoryList:[],
				categoryIndex: 0,
			};
		},
		mounted(){
			this.getCategoryData()
		},
		methods:{
			async getCategoryData(){
				this.categoryList = await request('/getCategoryData')
			},
			changeIndex(navIndex){
				this.categoryIndex = navIndex
			}
		},
		computed:{
			categoryObj: function(){
				return this.categoryList[this.categoryIndex]
			}
		}
		
	}
</script>

<style lang="stylus">
	.categoryContainer
		.header
			padding 10rpx 0
			.search
				width 92%
				height 60rpx
				line-height 60rpx
				text-align center
				background #eee
				margin 0 auto
		.contentContainer
			display flex
			height calc(100vh - 80rpx)
			border-top 1rpx solid #333
			box-sizing border-box
			.leftContainer
				width 20%
				// height 500rpx
				// background #333
				border-right 1rpx solid #333
				box-sizing border-box
				.navScroll
					height calc(100vh - 82rpx)
					.navItem
						position relative
						height 80rpx
						line-height 80rpx
						text-align center
						font-size 26rpx
						&.active:before
							position absolute
							top 10rpx
							left 6rpx
							content ''
							width 4rpx
							height 60rpx
							background #dd1a21
			.rightContainer
				width 80%
				// background #eee
				.shopScroll
					height calc(100vh - 82rpx)
					.shopHeader
						.banner
							width 528rpx
							height 192rpx
							display block
							margin: 20rpx auto
					.shopList
						display flex
						flex-wrap wrap
						.shopItem
							width 33.333%
							text-align center
							display flex
							flex-direction column
							// justify-content center
							align-items center
							.shopImg
								width 144rpx
								height 144rpx
								// width 90%
							.shopName
								font-size 26rpx
				
</style>
