<template>
    <div id='home-index'>
        <div id='lunbo'>
        </div>
        <div id='hot'>
            <div id='hot-wrapper'>
                <div id='topic'>
                    <img src='../../assets/images/fire.png' />
                    <span>正在热映</span>
                </div>
                <div id='view'>
                    <show-row></show-row>
                    <show-row v-show='show'></show-row>
                    <show-row v-show='show'></show-row>
                </div>
                <div id='more' @click="addRows" v-show='down'>
			        <img src='../../assets/images/arrow.png' />
			        <span>更多</span>
			    </div>
			    <div id='up' v-show='up'>
				    <span>已无更多</span>
			        <div id="up_center" @click="deleteRows">
				        <img src='../../assets/images/up.png' />
				        <span>收起</span>
			        </div>
			    </div>
            </div>
        </div>
    </div>
</template>

<script>



module.exports = {
    name: 'home-index',
    data() {
        return {
            show: false,
            down: true,
            up: false
        };
    },
    methods: {
        addRows: function() {
            this.show = true;
            this.down = false;
            this.up = true;
        },
        deleteRows: function() {
            this.show = false;
            this.down = true;
            this.up = false;
        }

    },
    components: {
        "show-row": require("../../components/show-row/index.vue")
    }
}
</script>

<style lang="less" scoped>
#lunbo {
	background-color: blue;
	width: 100%;
	height: 400px;
}

#hot {
	width: 100%;
}

#hot-wrapper {
	width: 980px;
	margin: 0 auto;
}

#topic {
    width: 100%;
	height: 30px;
	line-height: 30px;
	margin-top: 59px;
	img {
	    width: 30px;
	    height: 30px;
	    float: left;
	}
	span {
	    width: 80px;
	    height: 28px;
	    margin-left: 14px;
	    font-family: PingFangSC-Medium;
        font-size: 20px;
        color: #333333;
        letter-spacing: 0;
        text-align: left;
        display: inline-block;
	}
}

#view {
	width: 100%;
	margin-top: 48px;
}

#more {
	height: 20px;
	width: 100px;
	margin: 0 auto;
	margin-top: 41px;
	margin-bottom: 50px;
	cursor: pointer;
	img {
	    width: 20px;
	    height: 20px;
	    float: left;
	}
	span {
	    font-family: PingFangSC-Medium;
        font-size: 16px;
        color: #333333;
        letter-spacing: 0;
        text-align: left;
        margin-left: 15px;
	}
}

#up {
	height: 25px;
	width: 100%;
	margin-top: 41px;
	margin-bottom: 50px;
	span {
	    font-family:PingFangSC-Medium;
		font-size:18px;
		color:#999999;
		letter-spacing:0;
		text-align:left;
		float: left;
	}
	#up_center {
        height: 20px;
	    width: 100px;
	    margin: 0 auto;
	    cursor: pointer;
	    img {
		    width: 20px;
		    height: 20px;
		    float: left;
		}
		span {
		    font-family: PingFangSC-Medium;
	        font-size: 16px;
	        color: #333333;
	        letter-spacing: 0;
	        text-align: left;
	        margin-left: 15px;
		}

	}
	
}

</style>
