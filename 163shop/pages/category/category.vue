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
					<view class="navItem">
						居家生活
					</view>
					<view class="navItem">
						居家生活
					</view>
					<view class="navItem">
						居家生活
					</view>
					<view class="navItem">
						居家生活
					</view>
					<view class="navItem">
						居家生活
					</view>
					<view class="navItem">
						居家生活
					</view>
					<view class="navItem">
						居家生活
					</view>
					<view class="navItem">
						居家生活
					</view>
					<view class="navItem">
						居家生活
					</view>
					<view class="navItem">
						居家生活
					</view>
					<view class="navItem">
						居家生活
					</view>
					<view class="navItem">
						居家生活
					</view>
					<view class="navItem">
						居家生活
					</view>
					<view class="navItem">
						居家生活
					</view>
					<view class="navItem">
						居家生活
					</view>
					<view class="navItem">
						居家生活
					</view>
				</scroll-view>
			</view>
			<!-- 右边 -->
			<view class="rightContainer"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
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
			height 500rpx
			border-top 1rpx solid #333
			.leftContainer
				width 20%
				// height 500rpx
				// background #333
				border-right 1rpx solid #333
				box-sizing border-box
				.navScroll
					height calc(100vh - 82rpx)
					.navItem
						height 80rpx
						line-height 80rpx
						text-align center
						font-size 26rpx
			.rightContainer
				width 80%
				// height 500rpx
				background #eee
				
</style>
