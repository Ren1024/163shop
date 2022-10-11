<template>
	<view class="recommendContainer">
			<!-- banner区域 -->
			<swiper class="bannerList" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item class="bannerItem">
					<img class="bannerImg" src="https://yanxuan.nosdn.127.net/static-union/1664518786c6f282.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
				</swiper-item>
				<swiper-item class="bannerItem">
					<img class="bannerImg" src="https://yanxuan.nosdn.127.net/ab010b0f082ba4e8b7ad66bd351390bf.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
				</swiper-item>
				<swiper-item class="bannerItem">
					<img class="bannerImg" src="https://yanxuan.nosdn.127.net/e9a8113140da4732b68673d13aaeef72.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
				</swiper-item>
			</swiper>
			
			<!-- policyDescList三个图标区域 -->
			<view class="policyList">
				<view class="policyItem" v-for="item in indexData.policyDescList" v-bind:key="item.desc">
					<img class="policyImg" :src="item.icon" alt="">
					<text class="policyDesc">{{item.desc}}</text>
				</view>
			</view>
			
			<!-- kingKongModule10个导航图标区 -->
			<view class="kingKongList" v-if="indexData.kingKongModule">
				<view class="kingKongItem" v-for="item in indexData.kingKongModule.kingKongList" v-bind:key="item.L1Id">
					<img class="kingKongImg" :src="item.picUrl" alt="">
					<text class="kingKongDesc">{{item.text}}</text>
				</view>
			</view>
			
			<!-- categoryModule 商品分类区 -->
			<view class="categoryContainer">
				<view class="categoryItem" v-for="item in indexData.categoryModule" v-bind:key="item.titlePicUrl">
					<img class="categoryImg" :src="item.titlePicUrl" alt="">
					<scroll-view scroll-x="true" class="shopContainer">
						<view class="shopItem" v-for="shopItem in item.itemList" v-bind:key="shopItem.id">
							<img class="shopImg" :src="shopItem.showPicUrl" alt="">
							<view class="shopText">{{shopItem.name}}</view>
						</view>
					</scroll-view>
				</view>
			</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	
	export default {
		computed:{
			...mapState({
				indexData: state => state.home.indexData
			})
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.recommendContainer
	.bannerList
		width 100%
		height 370rpx
		.bannerImg
			width 100%
			height 370rpx
			
	.policyList
		display flex
		padding 20rpx 0
		.policyItem
			flex 1
			text-align center
			.policyImg
				width 32rpx
				height 32rpx
				vertical-align middle
			.policyDesc
				font-size 26rpx
				vertical-align middle
				
	.kingKongList
		display flex
		flex-wrap wrap
		.kingKongItem
			width 20%
			display flex
			flex-direction column
			align-items center
			margin 20rpx 0
			.kingKongImg
				width 110rpx
				height 110rpx
			.kingKongDesc
				font-size 26rpx
			
	.categoryContainer
		.categoryItem
			.categoryImg
				margin 20rpx 0
				width 100%
				height 370rpx
			.shopContainer
				white-space nowrap
				.shopItem
					margin-right 20rpx
					width 200rpx
					display inline-block
					vertical-align top
					.shopImg
						width 200rpx
						height 200rpx
						background #eee
					.shopText
						font-size 28rpx
						white-space pre-wrap
						display -webkit-box
						-webkit-line-clamp 2
						-webkit-box-orient vertical
						overflow hidden

.test
	font-size 0
</style>