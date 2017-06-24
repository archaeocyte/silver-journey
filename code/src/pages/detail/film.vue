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
        <div id='director'>
        导演：{{director}}
        </div>
        <div id='actor'>
            <span id='zhuyan'>主演：</span>
            <div id='name'>
            	<div class='head'>
            	    <img src='http://silverjourney-1253262853.cosgz.myqcloud.com/picture/actor/fandisaier.jpg' />
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
            	    <img src='http://silverjourney-1253262853.cosgz.myqcloud.com/picture/actor/daoenqiangsen.jpg' />
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
    data() {
        this.comments = "";
    	return {
    		comments: this.comments,
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
            showtime: '2017年4月14日上映',
            name_1: '',
            name_2: '',
            role_1: '',
            role_2: '',
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
    	"login-window": require("../../components/login-window/index.vue"),
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