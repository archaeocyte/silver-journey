<template>
	<div id='cinema-details'>
	<div class='nav-bar-wrapper'>

        <router-box></router-box>

        <div id='cinema-detail'>
            <div id='left'>
            <p id='cinema-name'>金逸珠江国际影城广州大学城店</p>
            <div id='picture'>
                <img id='grayBG' src='../../assets/images/cinema/grayBG.png' />
                <div id='watermark'>
                <p id='silverJourney'>
                    <span id='s'>S</span>ilver J
                    <img id='o' src='../../assets/images/cinema/o.png' />
                    <span>urney</span>
                </p>
                <p id='slogan'>跟随银屏，开启心旅程</p>
                </div>
            </div>
            </div>

            <div id='right'>
            <p id='rate'>评分 6.0</p>
            <div id='loc-info'>
                <img id='loc-img' src='../../assets/images/cinema/location.png' />
                <span class='tag'>地址</span>
                <span class='detail'>番禺区大学城GOGO新天地商业广场三层第3A028号</span>
            </div>
            <div id='contact-info'>
                <img id='cont-img' src='../../assets/images/cinema/phone.png' />
                <span class='tag'>电话</span>
                <span class='detail'>020-111222333</span>
            </div>
            <div id='other-infos-boxes'>
                <img class='round-box' src='../../assets/images/cinema/box.png' />
                <img class='round-box' src='../../assets/images/cinema/box.png' />    
            </div>
            <p id='item'>
                <span id='snack'>小食</span>
                <span>3D眼镜</span>
            </p>
            </div>
        </div>
        </div>

        <div id='session'>
            <block></block>
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
                        <textarea id='comment-content' v-model="comments" @focus="getFocus" @blur="loseFocus" @input="inputting">{{comments}}</textarea>
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

            <others-comments></others-comments>
            <others-comments></others-comments>
            <others-comments></others-comments>
            <others-comments></others-comments>
            <others-comments></others-comments>

            <div id='blank233h'></div>
        </div>
        </div>
    </div>

</template>

<script>



module.exports = {
    name: 'cinema-details',
    data() {
        this.comments = "";
        return {
            comments: this.comments
        };
    },
    methods: {
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
    	"router-box": require("../router-box/index.vue"),
        "rate-rect": require("../rate-rect/index.vue"),
        "user": require("../user/index.vue"),
        "others-comments": require("../others-comments/index.vue"),
        "block":require("./block.vue")
    }
}
</script>

<style lang="less" scoped>
.nav-bar-wrapper {
    width: 980px;
    margin: 0 auto;
    height: 100%;
}



#cinema-detail {
    margin-top: 51px;
}

#left {
    width: 360px;
    height: 331px;
}

#cinema-name {
    font-family:PingFangSC-Medium;
    font-size:20px;
    color:#333333;
    letter-spacing:-0.4px;
    text-align:left;
}

#picture {
    margin-top: 18px;
}

#grayBG {
    background:#dcdcdc;
    width:360px;
    height:285px;
}

@font-face{
    font-family: "HoboStd";
    src: url('../../assets/fonts/hobostd___.otf');
}

#silverJourney {
    font-family: HoboStd;
    font-size:36px;
    color:white;
    letter-spacing:-0.72px;
    text-align:left;
    margin-bottom: 7px;
}

#s {   
    color:#999999;
}

#o {
    width: 24px;
    height: 24px;
    margin-left: -6px;
    margin-right: -6px;
}

#slogan {
    font-family:PingFangSC-Regular;
    font-size:18px;
    color:#999999;
    letter-spacing:-0.36px;
    text-align:left;
    margin-left: 30px;
}

#watermark {
    margin: -189px 0px 0px 72px;
}

#right {
    height: 331px;
    margin: -331px 0px 0px 410px;
}

#rate {
    font-family:PingFangSC-Medium;
    font-size:20px;
    color:#f57905;
    letter-spacing:-0.4px;
    text-align:left;
}

#loc-info {
    height: 24px;
    margin-top: 37px;
}

#contact-info {
    height: 20px;
    margin-top: 42px;
}

#other-infos-boxes {
    height: 24px;
    margin-top: 40px;
}

.tag {
    font-family:PingFangSC-Regular;
    font-size:14px;
    color:#333333;
    letter-spacing:-0.28px;
    text-align:left;
    margin-left: 20px;
}

.detail {
    font-family:PingFangSC-Regular;
    font-size:14px;
    color:#999999;
    letter-spacing:-0.28px;
    text-align:left;
    margin-left: 20px;
}

#item {
    font-family:PingFangSC-Medium;
    font-size:14px;
    color:#f57905;
    letter-spacing:0;
    line-height:24px;
    text-align:left;
    margin-top: -25px;
    margin-bottom: 25px;
    span {
    	width: 47px;
    }
}

.round-box {
    width:51px;
    height:22px;
    margin-right: 14px;
}

#loc-img {
    position: relative;
    top: 8px;
}

#cont-img {
    position: relative;
    top: 5px;
}

#snack {
    margin-left: 11px;
    margin-right: 29px;
}

/* session */
#session {
    background-image:linear-gradient(-180deg, #615951 0%, #393027 99%);
    width:auto;
    margin-top: 101px;
}

#temp-todo {
    font-family:PingFangSC-Medium;
    font-size:30px;
    color:white;
    text-align:center;
}

/* rate-and-comment */
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