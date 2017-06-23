<template>
    <div id='show-row'>
        <div class='item' @click='jump_one'>
            <img class='pic' :src='picOne' style='height:343.25px; width:256px' />
            <img class='hide' :src='hide' @mouseenter='word' @mouseleave='recovery'/>
            <div class='word' @mouseenter='word'>
            导演： F·加里·格雷<br />
            主演： 范·迪塞尔，杰...<br />
            类型： 动作 冒险 犯罪<br />
            语言： 英语<br />
            时长： 136分钟<br />
            上映： 2017年4月14日
            </div>
            <div class='choose' @mouseenter='enter' @mouseleave='leave'>
            选座购票
            </div>
        </div>
        <div class='item' @click='jump'>
            <img class='pic' :src='picTwo' />
            <img class='hide' :src='hide' @mouseenter='word' @mouseleave='recovery'/>
            <div class='choose' @mouseenter='enter' @mouseleave='leave'>
            选座购票
            </div>
        </div>
        <div class='item' @click='jump'>
            <img class='pic' :src='picTwo' />
            <img class='hide' :src='hide' @mouseenter='word' @mouseleave='recovery'/>
            <div class='choose' @mouseenter='enter' @mouseleave='leave'>
            选座购票
            </div>
        </div>
        <div class='item' @click='jump'>
            <img class='pic' :src='picTwo' />
            <img class='hide' :src='hide' @mouseenter='word' @mouseleave='recovery'/>
            <div class='choose' @mouseenter='enter' @mouseleave='leave'>
            选座购票
            </div>
        </div>
    </div>
</template>

<script>


module.exports = {
    name: 'show-row',
    data() {
        return {
            picOne: require('../../assets/images/index/hot_one.png'),
            picTwo: require('../../assets/images/index/hot_two.png'),
            hide: require('../../assets/images/index/hot_hidden.png')
        };
    },
    methods: {
        enter: function(event) {
            event.target.style.cursor = "pointer";
            event.target.style.backgroundColor = "#C86203";
        },
        leave: function(event) {
            event.target.style.backgroundColor = "#f57905";
        },
        recovery: function(event) {
            var obj = event.target.parentNode;
            obj.getElementsByClassName('hide')[0].style.opacity = '0';
            if (obj.getElementsByClassName('word')[0]) {
                obj.getElementsByClassName('word')[0].style.opacity = '0';
            }
        },
        word: function(event) {
            var obj = event.target.parentNode;
            obj.getElementsByClassName('hide')[0].style.opacity = '100';
            if (obj.getElementsByClassName('word')[0]) {
                obj.getElementsByClassName('word')[0].style.opacity = '100';
            }
        },
        jump_one: function() {
            this.$router.push('/main/detail/film/2');
        },
        jump: function() {
            this.$router.push('/main/detail/film/1');
        }
    }
}
</script>

<style lang="less" scoped>
#show-row {
    width: 100%;
    height: 380px;
	.item {
	    float: left;
	    width: 256px;
	    height: 100%;
	    margin-left: -17px;
	    position: relative;
		.pic {
		    width: 256px;
            position: absolute;
		}
		.choose {
		    width: 220px;
		    height: 45px;
		    padding-top: 22px;
            background-color: #f57905;
		    border: none;
		    position: absolute;
		    left: 18px;
		    top: 305px;
		    font-family:PingFangSC-Medium;
			font-size:16px;
			color:#ffffff;
			letter-spacing:0;
			text-align: center;

		}
        .hide {
            position: absolute;
            width: 220px;
            height: 290px;
            margin-top: 20px;
            margin-left: 18px;
            opacity: 0;
        }
        .word {
            position: absolute;
            margin-top: 60px;
            margin-left: 43px;
            width: 180px;
            height: 240px;
            font-family:PingFangSC-Medium;
            font-size:14px;
            color:#ffffff;
            letter-spacing:0;
            line-height:40px;
            text-align:left;
            opacity: 0;
        }
	}
}
</style>
