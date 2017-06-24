<template>
    <div id='home-index'>
        <div id='lunbo' @click='jump'>
            <options></options>
            
        </div>
        <div id='hot'>
            <div id='hot-wrapper'>
                <div id='signup-btn' @click="showSignup"></div>
                <div id='login-btn' @click="showLogin"></div>
                <div id='topic'>
                    <img src='../../assets/images/index/fire.png'/>
                    <span>正在热映</span>
                </div>
                <div id='view'>
                    <show-row></show-row>
                    <show-row v-show='show'></show-row>
                    <show-row v-show='show'></show-row>
                </div>
                <div id='more' @click="addRows" v-show='down'>
                    <img src='../../assets/images/index/arrow.png'/>
                    <span>更多</span>
                </div>
                <div id='up' v-show='up'>
                    <span>已无更多</span>
                    <div id="up_center" @click="deleteRows">
                        <img src='../../assets/images/index/up.png'/>
                        <span>收起</span>
                    </div>
                </div>
            </div>
        </div>
        <div id='will'>
            <div id='titleon'>
                <img src='../../assets/images/index/todoicon.png'/>
                <span>即将上映</span>
            </div>
            <Options></Options>
        </div>
        <div id='nearby'>
            <div id='nearby-wrapper'>
                <div id='top'>
                    <img src='../../assets/images/index/loc.png'/>
                    <span>附近影院</span>
                </div>
                <div id='store'>
                    <theatre></theatre>
                    <img src='../../assets/images/index/line.png'/>
                    <theatre></theatre>
                    <img src='../../assets/images/index/line.png'/>
                    <theatre></theatre>
                </div>
            </div>
        </div>
        <signup-window></signup-window>
        <login-window ></login-window>
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
            addRows: function () {
                this.show = true;
                this.down = false;
                this.up = true;
            },
            deleteRows: function () {
                this.show = false;
                this.down = true;
                this.up = false;
            },
            jump: function() {
                this.$router.push('/main/detail/film/2');
            },
            showLogin: function() {
                document.getElementById('signup-window').style.display = "none"
                document.getElementById('login-window').style.display = "inline"


            },
            showSignup: function() {
                //alert(document.getElementById('signupWin').style.display)
                document.getElementById('login-window').style.display = "none"
                document.getElementById('signup-window').style.display = "inline"
            }
        },
        components: {
            "signup-window": require("../../components/signup-window/index.vue"),
            "login-window": require("../../components/login-window/index.vue"),
            "show-row": require("../../components/show-row/index.vue"),
            "theatre": require("../../components/theatre/index.vue"),
            'options': require("../../components/autoswiper/index.vue"),
            'Options': require("../../components/buttonswiper/index.vue"),

        }
    }
</script>

<style lang="less" scoped>
    #lunbo {
        background-color: blue;
        width: 100%;
        height: 400px;
    }

    #hot, #nearby {
        width: 100%;
    }

    #hot-wrapper, #nearby-wrapper {
        width: 980px;
        margin: 0 auto;
    }

    #titleon {
        width: 980px;
        height: 30px;
        line-height: 30px;
        margin: 0 auto;
        text-align: center;
        margin-bottom: 60px;

    img {
        width: 30px;
        height: 30px;
        float: left;
    }

    span {
        float: left;
        margin-top: 5px;
        margin-left: 15px;
        width: 80px;
        height: 24px;
        font-family: PingFangSC-Medium;
        font-size: 20px;
        color: #333333;
        letter-spacing: 0;
        line-height: 24px;
        text-align: left;
    }

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
        font-family: PingFangSC-Medium;
        font-size: 18px;
        color: #999999;
        letter-spacing: 0;
        text-align: left;
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

    #will {
        height: 400px;
        text-align: center;
    }

    #top {
        width: 100%;
        height: 30px;
        line-height: 30px;
        margin-top: 59px;

    img {
        width: 26px;
        height: 30px;
        float: left;
    }

    span {
        width: 80px;
        height: 24px;
        margin-left: 32px;
        font-family: PingFangSC-Medium;
        font-size: 20px;
        color: #333333;
        letter-spacing: 0;
        text-align: left;
        display: inline-block;
    }

    }

    #store {
        width: 100%;
        margin-top: 69px;

    img {
        width: 979px;
        height: 2px;
        margin-top: 20px;
        margin-bottom: 38px;
    }

    }

    #nearby {
        margin-top: 100px;
        margin-bottom: 101px;
    }

#login-btn, #signup-btn {
    z-index: 2;
    width: 32px;
    height: 22px;
    //background-color: gray;
    float: right;
    position: relative;
    top: -500px;
    cursor: pointer;
}

#login-btn {
    position: relative;
    left: -30px;
}

</style>
