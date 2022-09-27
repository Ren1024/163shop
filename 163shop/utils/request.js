// 封装发送请求功能函数
import config from './config.js'

export default (url, data={}, method='GET') => {
	return new Promise((resolve, reject) => {
		// 执行异步任务
		uni.request({
			url: config.host + url,  //小程序路径
			// url: config.proxy + url,	//h5路径
			data,
			method,
			success: (res) => {
				resolve(res.data)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}