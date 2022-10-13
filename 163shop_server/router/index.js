// koa路由器对象
const KoaRouter = require('koa-router')
// 导入数据
const indexData = require('../datas/index.json')
const categoryDatas = require('../datas/categoryDatas.json')
const indexCateList = require('../datas/indexCateList.json')

const router = new KoaRouter()

router.get('/test', (ctx) => {
	ctx.body = '新的测试数据'
})

// 注册index路由导航
router.get('/getIndexData', (ctx) => {
	ctx.body = indexData
})

// 注册分类页路由
router.get('/getCategoryData', (ctx) => {
	ctx.body = categoryDatas
})

// 注册导航商品列表
router.get('/getIndexCateList', (ctx) => {
	ctx.body = indexCateList
})


// 向外暴露
module.exports = router