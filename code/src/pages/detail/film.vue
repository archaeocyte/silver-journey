<template>
    <div id='detail-film'>
        <div id='top'>
            <span id='left'>购票首页</span>
            <img src='../../assets/images/film/right.png' />
            <span id='right'>电影详情</span>
        </div>
        <div id='poster'>
            <img :src='pic' />
            <div id='wrapper'>
	            <div id='hotting'>
	            正在热映
	            </div>
	            <div id='name'>
	            {{filmName}}
	            </div>
	        </div>
        </div>
    </div>
</template>

<script>


module.exports = {
    name: 'detail-film',
    created: function() {
    	var id = this.$route.params.id;
    	console.log(id);
    	this.fetchFilm(id);
    },
    data() {
    	return {
            pic:  require('../../assets/images/index/speed.png'),
            filmName: ''
    	};
    },
    methods: {
    	fetchFilm(id) {
    		var self = this;
    		$.ajax({
    			url: "/api/film/detail/" + id,
    			type: "GET",
    			success: function(result) {
    				console.log(result);
    				console.log(result.data.film.name_cn);
    				this.filmName = result.data.film.name_cn;
    			}.bind(self)
    		});
    	}
    }
}
</script>

<style lang="less" scoped>
#top {
	height: 35px;
	width: 980px;
	margin: 0 auto;
	margin-top: 10px;
	#left {
        width: 66px;
        height: 22px;
        font-family:PingFangSC-Regular;
		font-size:16px;
		color:#999999;
		letter-spacing:0.3px;
		text-align:center;
	}
	img {
		width: 10px;
		height: 17px;
		margin-left: 9px;
		position: relative;
		top: 2px;
	}
	#right {
		width: 66px;
		height: 22px;
		font-family:PingFangSC-Regular;
		font-size:16px;
		color:#f57905;
		letter-spacing:0.3px;
		text-align:center;
		margin-left: 9px;
	}
}

#poster {
	width: 100%;
	height: 400px;
	margin-bottom: 70px;
	position: relative;
	img {
		width: 100%;
		height: 400px;
		position: absolute;
	}
	#wrapper {
		width: 980px;
		margin: 0 auto;
		height: 400px;
		position: relative;
		#hotting {
			width: 102px;
			height: 42px;
			background: rgba(250, 122, 3, 0.98);
			font-family:PingFangSC-Regular;
			font-size:18px;
			color:#ffffff;
			letter-spacing:0;
			line-height:42px;
			text-align:center;
			position: absolute;
			top: 80px;
		}
		#name {
			width: 202px;
			height: 48px;
			font-family:PingFangSC-Medium;
			font-size:36px;
			color:#ffffff;
			letter-spacing:0;
			line-height:48px;
			text-shadow:0 2px 4px rgba(0,0,0,0.50);
			text-align:left;
			position: absolute;
			top: 143px;
		}
	}
}
</style>
