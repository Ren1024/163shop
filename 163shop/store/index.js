// 引入文件
import vue from 'vue'
import vuex from 'vuex'

import home from './modules/home.js'
import cart from './modules/cart.js'

// 声明使用
vue.use(vuex)

// 生成store对象

const store = new vuex.Store({
	modules: {
		home,
		cart
	}
})

// 向外暴露
export default store