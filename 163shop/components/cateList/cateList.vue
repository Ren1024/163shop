<template>
	<view class="cateListContainer">
		<!-- banner区 -->
		<swiper class="banners" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="bannerItem in cateObj.category.bannerUrlList" v-bind:key="bannerItem">
				<img class="bannerImg" :src="bannerItem" alt="">
			</swiper-item>
		</swiper>
		
		<!-- 内容区 -->
		<view class="title">{{cateObj.category.name}}</view>
		<view class="desc">{{cateObj.category.frontDesc}}</view>
		
		<!-- 商品列表区 -->
		<view class="shopList">
			<view class="shopItem" v-for="shopItem in cateObj.itemList" v-bind:key="shopItem.id">
				<img class="shopImg" :src="shopItem.listPicUrl" alt="">
				<view class="shopName common">{{shopItem.name}}</view>
				<view class="shopPrice common">￥{{shopItem.retailPrice}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import request from '../../utils/request.js'
	
	export default {
		props:['navId'],
		data(){
			return {
				indexCateList:[],
			}
		},
		mounted(){
			this.getIndexCateList()
		},
		methods:{
			async getIndexCateList(){
				this.indexCateList = await request('/getIndexCateList')
			}
		},
		computed:{
			cateObj(){
				return this.indexCateList.find(item => item.category.parentId === this.navId)
			}
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.cateListContainer
		.banners
			width 100%
			height 370rpx
			.bannerImg
				width 100%
				height 370rpx
		.title
			font-size 40rpx
			color #333
			line-height 60rpx
			text-align center
			margin-top 30rpx
		.desc
			font-size 26rpx
			color #999
			line-height 40rpx
			text-align center
		.shopList
			display flex
			flex-wrap wrap
			justify-content space-around
			&:after
				content ''
				width 344rpx
			.shopItem
				width 344rpx
				.shopImg
					width 344rpx
					height 344rpx
				.common
					font-size 26rpx
					line-height 50rpx
					&.shopPrice
						color red
						font-weight 700
					
			
</style>