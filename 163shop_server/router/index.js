// koa路由器对象
const KoaRouter = require('koa-router')
// 导入数据
const indexData = require('../datas/index.json')

const router = new KoaRouter()

router.get('/test', (ctx) => {
	ctx.body = '新的测试数据'
})

// 注册index路由导航
router.get('/getIndexData', (ctx) => {
	ctx.body = indexData
})


// 向外暴露
module.exports = router