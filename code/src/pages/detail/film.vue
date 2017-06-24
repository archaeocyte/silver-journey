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
                    <div id='name'>
                    	<div class='head'>
                    	    <img src='http://silverjourney-1253262853.cosgz.myqcloud.com/picture/actor/fandisaier.jpg' id='pic_1'/>
                    	    <img src='http://silverjourney-1253262853.cosgz.myqcloud.com/picture/actor/zhouxingchi.jpg' id='pic_2'/>
                    	    <div class='bottom'>
                    	    {{name_1}}
                    	    </div>
                    	    <div class='bottom'>
                    	    饰
                    	    </div>
                    	    <div class='bottom'>
                    	    {{role_1}}
                    	    </div>

                    	</div>
                    	<div class='head'>
                    	    <img src='http://silverjourney-1253262853.cosgz.myqcloud.com/picture/actor/daoenqiangsen.jpg' id='pic_3'/>
                    	    <img src='http://silverjourney-1253262853.cosgz.myqcloud.com/picture/actor/zhuyin.jpg' id='pic_4'/>
                    	    <div class='bottom'>
                    	    {{name_2}}
                    	    </div>
                    	    <div class='bottom'>
                    	    饰
                    	    </div>
                    	    <div class='bottom'>
                    	    {{role_1}}
                    	    </div>
                    	</div>
                    </div>
                    <div id='arrow'>
                    	<img src='../../assets/images/film/turnleft.png' />
                    	<img src='../../assets/images/film/turnright.png' />
                    </div>
                </div>
                <div id='type'>
	                <span>{{type_one}}  {{type_two}}  {{type_three}}</span> |
	                <span>{{language}}</span> |
	                <span>{{time}}分钟</span> |
	                <span>{{showtime}}</span>
                </div>
            </div>
        </div>
        <div class='rate-and-comment'>
	        <div id='blank78h'></div>
	        <div class='nav-bar-wrapper'>
	            <div id='rate-title-bar'>
	                <img class='title-img' src='../../assets/images/cinema/rating.png' />
	                <span class='title'>我要评分</span>
	            </div>
	            <div id='comment-area'>
	                <user></user>
	                <div id='right-comment'>
	                    <img src='../../assets/images/cinema/rectangle.png' />
	                    <rate-rect id='users'></rate-rect>
	                    <img id='line' src='../../assets/images/cinema/line.png' />
	                    <div id='comment-rect'>
	                        <textarea id='comment-content' v-model="comments" @click="getFocus" @blur="loseFocus" @input="inputting">{{comments}}</textarea>
	                        <span id="hint">写下您的评论…</span>
	                    </div>
	                    <div id='word-limit'>
	                        <span id='word-count'>{{comments.length}}/200</span>
	                    </div>
	                </div>
	                <div id='comment-button'>
	                    <span id='btn-content'>发表</span>
	                </div>
	            </div>

	            <div id='blank60h'></div>
	            <div id='comment-title-bar'>
	                <img class='title-img' src='../../assets/images/cinema/comments.png' />
	                <span class='title'>影评</span>
	            </div>

	            <comments-onfilm></comments-onfilm>
	            <comments-onfilm></comments-onfilm>
	            <comments-onfilm></comments-onfilm>
	            <comments-onfilm></comments-onfilm>
	            <comments-onfilm></comments-onfilm>

	            <div id='blank233h'></div>
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
        //'Actors': require("../../components/buttonswiper/film.vue")
    },
    data() {
    	this.comments = "";
    	return {
    		comments: this.comments,
            pic:  require('../../assets/images/index/speed.png'),
            filmName: '',
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
            showtime: '2017年4月14日上映',
            name_1: '',
            name_2: '',
            role_1: '',
            role_2: ''
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
    				this.name_1 = result.data.film.actors[0].name;
    				this.name_2 = result.data.film.actors[1].name;
    				this.role_1 = result.data.film.actors[0].role_name;
    				this.role_2 = result.data.film.actors[1].role_name;
    				if (id == 1) {
			    		var a = document.getElementById('speed_pic');
			    		var b = document.getElementById('xiyou_pic');
			    		a.style.opacity = '0';
			    		b.style.opacity = '100';
			    		var c = document.getElementById('speed_img');
			    		var d = document.getElementById('xiyou_img');
			    		c.style.opacity = '0';
			    		d.style.opacity = '100';
			    		var e = document.getElementById('pic_2');
			    		var f = document.getElementById('pic_4');
			    		var g = document.getElementById('pic_1');
			    		var h = document.getElementById('pic_3');
			    		g.style.display = 'none';
			    		h.style.display = 'none';
			    		e.style.display = 'inline-block';
			    		f.style.display = 'inline-block';
			    		
			    	} else if (id == 2) {
			    		var a = document.getElementById('speed_pic');
			    		var b = document.getElementById('xiyou_pic');
			    		b.style.opacity = '0';
			    		a.style.opacity = '100';
			    		var c = document.getElementById('speed_img');
			    		var d = document.getElementById('xiyou_img');
			    		d.style.opacity = '0';
			    		c.style.opacity = '100';
			    		var e = document.getElementById('pic_2');
			    		var f = document.getElementById('pic_4');
			    		var g = document.getElementById('pic_1');
			    		var h = document.getElementById('pic_3');
			    		e.style.display = 'none';
			    		f.style.display = 'none';
			    		g.style.display = 'inline-block';
			    		h.style.display = 'inline-block';
			    	}
    			}.bind(self)
    		});
    	},
    	strong: function(event) {
            event.target.style.opacity = '100';
    	},
    	weak: function(event) {
            event.target.style.opacity = '0.8';
    	},
    	getFocus: function () {
            document.getElementById("hint").style.display = "none"
            
        },
        loseFocus: function() {
            if (this.comments == "")
                document.getElementById("hint").style.display = "inline"
        },
        inputting: function () {
        	if (this.comments.length > 200) {
            	document.getElementById('word-count').style.color = '#f57905'
            } else {
            	document.getElementById('word-count').style.color = '#999999'
            }
        }
    },
    components: {
    	"rate-rect": require("../../components/rate-rect/index.vue"),
        "user": require("../../components/user/index.vue"),
        "comments-onfilm": require("../../components/comments-onfilm/index.vue")
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
				float: left;
        	}
        	#name {
        		height: 100%;
        		width: 400px;
        		float: left;
        		.head {
        			float: left;
        			width: 120px;
        			height: 100%;
        			margin-left: 20px;
        			img {
	        			width: 50px;
	        			height: 50px;
	        			border-radius: 50%;
	        			border: 1px solid white;
	        			display: none;
	        		}
	        		.bottom {
	        			color: #999999;
	        			font-size: 14px;
	        		}

        		}
        	}
        	#arrow {
        		height: 100%;
        		width: 100px;
        		float: left;
        		img {
        			width: 25px;
        		}
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

/* rate-and-comment */
.nav-bar-wrapper {
    width: 980px;
    margin: 0 auto;
    height: 100%;
}
.rate-and-comment {	
    background:#f5f5f5;
    height: 100%;
    margin-top: 2px;
}
#blank78h {
    height: 78px;
}
.title-img {
    position: relative;
    top: 5px;
    margin-right: 15px;
}
.title {
    font-family:PingFangSC-Regular;
    font-size:20px;
    color:#333333;
    letter-spacing:0.37px;
    text-align:left;
}
#comment-area {
    margin-top: 53px;
    height: 250px;
}
#right-comment {
    margin: -250px 0px 0px 93px;
    width:890px;
    height:250px;
}
#users {
    margin: -194px 0px 0px 35px;
}
#comment-button {
	background:#f57905;
    margin: -40px 0px 0px 900px;
    height: 40px;
    cursor: pointer;
}
#comment-button:hover {
    background-color: #C86203;
}
#btn-content {
    font-family:PingFangSC-Regular;
    font-size:16px;
    color:#ffffff;
    letter-spacing:0.3px;
    text-align:left;
    position: relative;
    top: 10px;
    left: 24px;
}
#line {
    margin: 0px 0px 0px 35px;
    width:310px;
}
#comment-rect {
    margin: 14px 0px 0px 35px;
    span {
        font-family:PingFangSC-Regular;
        font-size:16px;
        color:#999999;
        letter-spacing:0.3px;
        text-align:left;
        margin-left: -827px;
        position: relative;
        top: -75px;
    }
}
#comment-content {
    border:1px solid white;
    height: 88px;
    width: 822px;
    font-family:PingFangSC-Regular;
    font-size:16px;
    color:#999999;
    letter-spacing:0.3px;
    text-align:left;
}
#word-limit {
    margin-left: 826px;
}
#word-count {
    font-family:PingFangSCRegular;
    font-size:16px;
    color:#999999;
    letter-spacing:0.3px;
    text-align:left;
}
#blank60h {
    height: 60px;
}
#blank233h {
    height: 233px;
}
</style>
