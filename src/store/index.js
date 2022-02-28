//引入Vue核心库
import Vue from 'vue'

//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)

//准备actions对象——响应组件中用户的动作
//create actions object to respond to the user's actions in the component
const actions = {}
//准备mutations对象——修改state中的数据
//create mutations object to edit the data in state
const mutations = {
	CHECKTODO(state, value) {
		state.todos.forEach((todo) => {
			if (value === todo.id) todo.completed = !todo.completed;
		});
	},
	DELETETODO(state, value) {
		state.todos = state.todos.filter((todo) => {
			return todo.id !== value;
		});
	},
	UPDATETODO(state, value) {
		state.todos.forEach((todo) => {
			if (todo.id === value[0]) todo.title = value[1]
		})
	},
	CHECKALLTODOS(state, value) {
		state.todos.forEach((todo) => {
			todo.completed = value;
		});
	},
	CLEARALLDONE(state) {
		state.todos = state.todos.filter((todo) => {
			return !todo.completed;
		});
	}
}
//准备state对象——保存具体的数据
const state = {
	favoriteSong: {
		folk: [
			{
				id: '001',
				name: 'To Build A Home',
				artist: 'The Cinematic Orchestra',
				url: require('../assets/tobuildahome.png')
			},
			{
				id: '002',
				name: 'Enchanted',
				artist: 'Taylor Swift',
				url: require('../assets/enchanted.png')
			},
			{
				id: '003',
				name: 'Never Know',
				artist: 'Jack Johnson',
				url: require('../assets/neverknow.png')
			},
			{
				id: '004',
				name: 'All Too Well',
				artist: 'Taylor Swift',
				url: require('../assets/alltoowell.png')
			},
			{
				id: '005',
				name: 'Колыбельная',
				artist: 'Rauf & Faik',
				url: require('../assets/Колыбельная.png')
			}
		],
		pop: [
			{
				id: '001',
				name: 'Save Your Tears',
				artist: 'The Weekend/Ariana Grande',
				url: require('../assets/saveyourtears.png')
			},
			{
				id: '002',
				name: 'Bad Guy',
				artist: 'Billie Eilish',
				url: require('../assets/badguy.png')
			},
			{
				id: '003',
				name: 'Levitating',
				artist: 'Dua Lipa',
				url: require('../assets/levitating.png')
			},
			{
				id: '004',
				name: 'The One That Got Away',
				artist: 'Katy Perry',
				url: require('../assets/theonethatgotaway.png')
			},
			{
				id: '005',
				name: 'Star Boy',
				artist: 'The Weekend',
				url: require('../assets/starboy.png')
			},
			{
				id: '006',
				name: 'Nails, Hair, Hips, Heels',
				artist: 'Todrick Hall',
				url: require('../assets/nails.png')
			}
		]
	},
	favoriteMovie: [
		{
			id: '001',
			name: 'Cruella',
			actors: ['Emma Stone', 'Emma Thompson'],
			posterUrl: require('../assets/cruella.jpg'),
			briefSum: 'Art is the boldness to be yourself'
		},
		{
			id: '002',
			name: 'Lalaland',
			actors: ['Emma Stone', 'Ryan Gosling'],
			posterUrl: require('../assets/lalaland.jpg'),
			briefSum: 'Art is life!'
		},
		{
			id: '003',
			name: 'Interstellar',
			actors: ['Anne Hathaway'],
			posterUrl: require('../assets/interstellar.jpg'),
			briefSum: 'Thinking Deeply About the Universe'
		},
		{
			id: '004',
			name: 'Green Book',
			actors: ['Viggo Mortensen', 'Mahershala Ali'],
			posterUrl: require('../assets/interstellar.jpg'),
			briefSum: 'Difficulties make you feel love'
		}
	],
	aboutMe: [
		{
			id: '001',
			title: 'Anything architecture-related🌇',
			data: {
				labUrl: 'https://www.hokibara.arch.waseda.ac.jp/'
			},
			discription:'Architecture is a sentiment. Although I studied environmental engineering for buildings, but I especially like architectural design and history, which bring me inner peace'
		},
		{
			id: '002',
			title: 'Study of frontend engineering💻',
			discription:'Front-end engineering, like architecture, is one of the few fields of engineering that can be closely related to design, and Ive been learning it as an interest. I want to learn more technologies in the future'
		},
		{
			id: '003',
			title: 'Literature or Sci-Fi movies🍂🤖️',
			discription:'I really love technology. Sci-fi movies always fascinate me.'
		},
		{
			id: '004',
			title: 'Folk or Pop musics🚶🕺🏼',
			discription:'I get very focused whenever I“m studying or working, so folk music calms my mind. But outside of school, I still love to listen to fashionable and lively pop music'
		},
		{
			id: '005',
			title: 'Chinese Calligraphy✍️',
			discription:'I love calligraphy. I should say I love to write anything. Because it allows me to quiet my mind. Of course, writing code is also a kind of writing'
		},
		{
			id: '006',
			title: 'Travel far from the city🏖',
			discription:'After a long period of study, I always have to get away from the hustle and bustle to quiet my mind so that I can learn better! (I believe the same applies to my future work)'
		},
		{
			id: '007',
			title: 'Simple and exquisite Japanese cuisine🍱',
			discription:'I love Kaiseki cuisine, I feel it is both design and very healthy!'
		},
		{
			id: '008',
			title: 'The latest American dramas💰',
			discription:'American drama always gives me the courage to be true to myself, and I love this inner freedom!'
		}
	],
	todos: [
		{id:'001',title:'HTML',completed:true},
		{id:'002',title:'CSS',completed:true},
		{id:'003',title:'JavsScript',completed:true},
		{id:'004',title:'Vue.js',completed:true},
		{id:'005',title:'TypeScript',completed:false},
	]
}

//创建并暴露store
export default new Vuex.Store({
	actions,
	mutations,
	state
})
