// 当前文件是koa搭建的服务器

// commjs规范
// 1、创建服务器对象
const Koa = require('koa');
const router = require('./router');

// 2、创建服务器实例对象，和路由器实例对象
const app = new Koa();

// 3、声明使用路由器，和路由器方法
app.use(router.routes());
app.use(router.allowedMethods());
	
	
// 4、监听端口号
app.listen(3001, (err) => {
	// nodejs是错误优先
	if(err){
		console.log(err);
		return
	}
	console.log('服务器启动成功！');
	console.log('服务器地址：http://localhost:3001');
})