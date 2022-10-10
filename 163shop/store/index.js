// 引入文件
import vue from 'vue'
import vuex from 'vuex'

import home from './modules/home.js'

// 声明使用
vue.use(vuex)

// 生成store对象

const store = new vuex.Store({
	modules: {
		home
	}
})

// 向外暴露
export default store