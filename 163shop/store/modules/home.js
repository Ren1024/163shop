// 首页状态管理
import request from '../../utils/request.js'

const state = {
	initData:'home初始化测试数据',
	indexData:{}
}

const mutations = {
	updateIndexData(state,indexData){
		state.indexData = indexData
	}
}

const actions = {
	async getIndexData({commit}){
		// 发送请求获取数据
		const result = await request('/getIndexData')
		// 调用mutations修改数据
		commit('updateIndexData',result)
	}
	
}

const getters = {
	
}

const home = {
	state,
	mutations,
	actions,
	getters
}

// 向外暴露
export default home
