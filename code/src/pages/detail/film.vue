<template>
    <div id='detail-film'>
        <div id='top'>
            <span id='left'>购票首页</span>
            <img src='../../assets/images/film/right.png' />
            <span id='right'>电影详情</span>
        </div>
        <div id='poster'>
            <img :src='pic' id='speed_pic'/>
            <img :src='pic_two' id='xiyou_pic'/>
            <div id='wrapper'>
	            <div id='hotting'>
	            正在热映
	            </div>
	            <div id='name'>
	            {{filmName}}
	            </div>
	            <div id='duration'>
	                <span>{{time}}分钟</span>&nbsp-
	                <span>{{type_one}}</span>/
	                <span>{{type_two}}</span>&nbsp-
	                <span>{{number}}</span>
	            </div>
	            <div id='slogan'>
	                <span id='mark'>"</span>
	                <span id='ad'>{{ad}}</span>
	            </div>
	            <div id='select' @mouseenter='strong' @mouseleave='weak'>
	            选座购票
	            </div>
	        </div>
        </div>
        <div id='desc'>
            <div id='left'>
                <img :src='poster_1' id='speed_img'/>
                <img :src='poster_2' id='xiyou_img'/> 
            </div>
            <div id='right'>
                <div id='score'>
                评分： 9.2
                </div>
                <div id='director'>
                导演：{{director}}
                </div>
                <div id='actor'>
                    <span id='zhuyan'>主演：</span>
                    <Actors></Actors>
                </div>
                <div id='type'>
	                <span>{{type_one}}  {{type_two}}  {{type_three}}</span> |
	                <span>{{language}}</span> |
	                <span>{{time}}分钟</span> |
	                <span>{{showtime}}</span>
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
    components: {
        'Actors': require("../../components/buttonswiper/film.vue")
    },
    data() {
    	return {
            pic:  require('../../assets/images/index/speed.png'),
            pic_two: require('../../assets/images/film/xiyou.png'),
            poster_1: require('../../assets/images/index/hot_one.png'),
            poster_2: require('../../assets/images/index/hot_two.png'),
            filmName: '',
            time: '',
            type_one: '',
            type_two: '',
            type_three: '',
            number: '',
            ad: '',
            director: '',
            language: '',
            showtime: '2017年4月14日上映'
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
    				this.filmName = result.data.film.name_cn;
    				this.time = result.data.film.duration;
    				this.type_one = result.data.film.types[0];
    				if (result.data.film.types[3]) {
    				    this.type_two = result.data.film.types[3];
    				} else {
    					this.type_two = result.data.film.types[1];
    				}
    				this.type_three = result.data.film.types[2];
    				this.number = "广州121家影院上映2805场";
    				this.ad = result.data.film.slogan;
    				this.director = result.data.film.director.name;
    				this.language = result.data.film.languages[0].name;
    				if (id == 1) {
			    		var a = document.getElementById('speed_pic');
			    		var b = document.getElementById('xiyou_pic');
			    		a.style.opacity = '0';
			    		b.style.opacity = '100';
			    		var c = document.getElementById('speed_img');
			    		var d = document.getElementById('xiyou_img');
			    		c.style.opacity = '0';
			    		d.style.opacity = '100';
			    	} else if (id == 2) {
			    		var a = document.getElementById('speed_pic');
			    		var b = document.getElementById('xiyou_pic');
			    		b.style.opacity = '0';
			    		a.style.opacity = '100';
			    		var c = document.getElementById('speed_img');
			    		var d = document.getElementById('xiyou_img');
			    		d.style.opacity = '0';
			    		c.style.opacity = '100';
			    	}
    			}.bind(self)
    		});
    	},
    	strong: function(event) {
            event.target.style.opacity = '100';
    	},
    	weak: function(event) {
            event.target.style.opacity = '0.8';
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
		opacity: 0;
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
			width: 350px;
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
		#duration {
			width: 410px;
			height: 25px;
			position: absolute;
			top: 210px;
			font-family:PingFangSC-Medium;
			font-size:18px;
			color:#ffffff;
			letter-spacing:0;
			text-shadow:0 2px 4px rgba(0,0,0,0.50);
			text-align:left;
		}
		#slogan {
			width: 500px;
			height: 36px;
			position: absolute;
			top: 255px;
			#mark {
				width: 34px;
                height: 36px;
                font-family:PingFangSC-Medium;
				font-size:56px;
				color:#b96719;
				letter-spacing:0;
				line-height:64px;
				text-align:left;
				margin-right: 26px;
			}
			#ad {
				height: 36px;
				width: 420px;
				font-family:PingFangSC-Medium;
				font-size:28px;
				color:#ffffff;
				letter-spacing:0;
				line-height:36px;
				text-shadow:0 2px 4px rgba(0,0,0,0.50);
				text-align:left;
				position: relative;
				top: -15px;
			}
		}
		#select {
			width: 268px;
			height: 81px;
			line-height: 81px;
			position: absolute;
			top: 318px;
			left: 670px;
			background:rgba(245,120,5,0.80);
			opacity: 0.8;
			font-family:PingFangSC-Medium;
			font-size:28px;
			color:#ffffff;
			letter-spacing:0;
			text-align:center;
			cursor: pointer;
		}
	}
}
#desc {
	width: 980px;
	height: 320px;
	margin: 0 auto;
	margin-bottom: 70px;
	#left {	
		width: 220px;
        height: 320px;
        float: left;
		img {
			width: 220px;
			height: 290px;
	        position: absolute;
	        opacity: 0;
		}
	}
	#right {
        width: 700px;
        height: 320px;
        margin-left: 40px;
        float: left;
        #score {
        	font-family:PingFangSC-Medium;
			font-size:35px;
			color:rgba(245,120,5,0.80);
			letter-spacing:0;
			text-align:left;
			margin-top: 15px;
        }
        #director {
            font-family:PingFangSC-Medium;
			font-size:18px;
			color:#666666;
			letter-spacing:0;
			text-align:left;
			margin-top: 10px;
        }
        #actor {
        	height: 135px;
        	margin-top: 15px;
        	#zhuyan {
        		font-family:PingFangSC-Medium;
				font-size:18px;
				color:#666666;
				letter-spacing:0;
				text-align:left;
        	}
        }
        #type {
        	font-family:PingFangSC-Medium;
			font-size:18px;
			color:#666666;
			letter-spacing:0;
			text-align:left;
        }
	}

}
</style>
