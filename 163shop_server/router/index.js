// koa路由器对象
const KoaRouter = require('koa-router')
const jwt = require('jsonwebtoken');
const Fly = require("flyio/src/node")
const fly = new Fly;


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

// 注册获取用户openId
router.get('/getOpenId', async (ctx) => {
	// 1 接收code 
	const code = ctx.query.code
	// console.log('code=', code);
	
	// 2 整理数据
	let appid = 'wxdac677537920c121'
	let appSecret = '92ffe10d39ec537d436d05b1d5dec8f2'
	
	// 3 请求微信服务器获取openid，进行加密，生成token
	let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`
	let result = await fly.get(url)
	// console.log(result);
	let openId = JSON.parse(result.data).openid
	// console.log(openid);
	let userInfo = {
		openId,
		userName:'Ren',
		age: 28
	}
	// 生成token
	let token = jwt.sign(userInfo, '163shop')
	// console.log(token);
	
	// 反编译token
	result2 = jwt.verify(token, '163shop')
	console.log(result2);
	
	// 4 返回token
	ctx.body = token
})


// 向外暴露
module.exports = router