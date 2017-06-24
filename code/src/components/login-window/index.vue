<template>
	<div id='login-window'>
        <div id='top-bar'>
            <p>
                <span id='s'>S</span><span>creen J</span>
                <img src='../../assets/images/login/o.png' />
                <span>urney</span>
            </p>
            <div id="x" @click="closeWin">X</div>
        </div>

        <br/>
        <p>登录</p>

        <form>
            <br/>
            账号:
            <input type="text"  name="username" v-model='username'>
            <br/>
            <span id='emptyName'>账号不能为空</span>
            <br/>
            密码:
            <input type="password" name="password" v-model='password'>
            <br/>
            <span id='wrongPsw'>密码错误</span>
        </form>

        <div id='comment-button' @click='login'>
            <span>登录</span>
        </div>

        <!--<span class='others' id='toRegister'>没有账号，去注册</span>
        <span class='others' id='forgetPsw'>忘记密码？</span> -->

        <br/>
        <br/>
        <br/>

    </div>
</template>

<script>



module.exports = {
    name: 'login-window',
    data () {
        this.username = '';
        this.password = '';
        return {
            username: this.username,
            password: this.password
        };
    },
    methods: {
        closeWin: function () {
            document.getElementById('login-window').style.display = "none"
            
        },
        login: function  () {

            if (this.username.length == 0) {
                document.getElementById('emptyName').style.opacity = 1
            } else {
                document.getElementById('emptyName').style.opacity = 0
            }

            if (this.password != "dyxtw0") {
                console.log("!=")
                document.getElementById('wrongPsw').style.opacity = 1
            } else {
                console.log("==")
                document.getElementById('wrongPsw').style.opacity = 0
            }

            if (this.username == "电影小天王" && this.password == "dyxtw0") {
                console.log("succeed")                
                var hotWrapper = document.getElementById('hot-wrapper')
                hotWrapper.removeChild(document.getElementById('signup-btn'))
                hotWrapper.removeChild(document.getElementById('login-btn'))

                var userField = document.getElementById('nav-bar').firstChild.lastChild.childNodes
                for (var i = 0; i < userField.length; i += 2) {
                    console.log(userField[i].tagName)
                    if (i < 3)
                        userField[i].style.opacity = 1
                    else
                        userField[i].style.opacity = 0

                };
                //userField.firstChild.style.opacity = 1
                document.getElementById('login-window').style.display = "none"

            }
            
        }
    },
    components: {
        
    }
}
</script>

<style lang="less" scoped>

#login-window {
    z-index: 2;
    background:#ffffff;
    box-shadow:0 0 20px 0 rgba(0,0,0,0.50);
    width: 500px;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -250px;
    margin-top: -150px;
    display: none;
    p {
        font-family:PingFangSC-Medium;
        font-size:36px;
        color:#333333;
        letter-spacing:0;
        text-align:center;
    }
    .others {
        font-family:PingFangSC-Regular;
        font-size:16px;
        color:#f57905;
        letter-spacing:0;
    }
}

@font-face{
    font-family: "HoboStd";
    src: url('../../assets/fonts/hobostd___.otf');
}

#top-bar {
    height: 60px;
    background-image: url('../../assets/images/login/topbar-bg.png');
    background-size: 500px 60px;
    span {
        font-family:HoboStd;
        font-size:36px;
        color:#ffffff;
        letter-spacing:-0.72px;
        text-align:center;
    }

    #s {
        color: #f57905;
    }
    img {
        margin-left: -7px;
        margin-right: -7px;
    }
    #x {
        height: 20px;
        width: 20px;
        font-family:sans-serif;
        font-size:16px;
        color: #ffffff;
        cursor: pointer;
        float: right;
        position: relative;
        top: -40px;
        right: 5px;
    }
}



form {
    font-family:PingFangSC-Medium;
    font-size:18px;
    //color:#333333;
    letter-spacing:0;
    text-align:center;
    input {
        height: 30px;
        width: 250px;
        margin-left: 15px;
    }
    span {
        font-family:PingFangSC-Regular;
        font-size:16px;
        color:#ff0000;
        letter-spacing:0;
        text-align:left;
    }
}

#wrongPsw {
        position: relative;
        left: -70px;
        opacity: 0;
}


#emptyName {
        position: relative;
        left: -50px;
        opacity: 0;
}

#comment-button {
    background-image: url('../../assets/images/login/button.png');
    background-size: 330px 40px;
    height: 40px;
    width: 330px;
    margin: auto;
    cursor: pointer;
    span {
        font-family:PingFangSC-Regular;
        font-size:20px;
        color:#ffffff;
        letter-spacing:0.3px;
        position: relative;
        left: 145px;
        top: 5px;
    }
}

#toRegister {
    margin-left: 85px;
    cursor: pointer;
}


</style>