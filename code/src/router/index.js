import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello.vue'

import Main from '@/Main.vue'
import Test from '@/Test.vue'

import UploadPhoto from '@/pages/upload/photo.vue'

Vue.use(Router)

const HomeIndex = function(resolve) {
    NProgress.start();
    return require.ensure(['@/pages/home'], function(component) {
        var home = require("@/pages/home");
        var component = home.index;
        resolve(component);
        NProgress.done();
    }, "detail");
};

const DetailCinema = function(resolve) {
    NProgress.start();
    return require.ensure(['@/pages/detail'], function(component) {
        var detail = require("@/pages/detail");
        var component = detail.cinema;
        resolve(component);
        NProgress.done();
    }, "detail");
};
const DetailFilm = function(resolve) {
    NProgress.start();
    return require.ensure(['@/pages/detail'], function(component) {
        var detail = require("@/pages/detail");
        var component = detail.film;
        resolve(component);
        NProgress.done();
    }, "detail");
};


export default new Router({
	mode: 'history',
    routes: [
    	{ path: '/', redirect: '/main/home/index'},
	    {
	        path: '/main',
	        component: Main,
	        children: [
	        	{ path: 'home/index', component: HomeIndex},
	        	{ path: 'detail/cinema/:id', component: DetailCinema},
	        	{ path: 'detail/film/:id', component: DetailFilm}
	        ]
	    },
	    {
	    	path: '/test',
	    	component: Test,
	    	children: [
	    		{ path: 'upload/photo', component: UploadPhoto}
	    	]
	    }
    ]
})