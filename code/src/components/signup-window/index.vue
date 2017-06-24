<template>
    <div id='signup-window'>
        <div id='top-bar'>
            <p>
                <span id='s'>S</span>creen J
                <img src='../../assets/images/login/o.png' />
                <span>urney</span>
            </p>
            <div id="x" @click="closeWin">X</div>
        </div>

        <br/>
        <p>注册</p>

        <form>
            <br/>
            账号:
            <input type="text" name="username" v-model="account">
            <br/>
            <span id='invalidName' class='error'>账号必须由5位以上字母和数字组成</span>
            <br/>
            密码:
            <input type="password" name="password" v-model='password'>
            <br/>
            <span id='invalidPsw' class='error'>密码必须由6—20位字母、数字、符号组成</span>
            <br/>
            <span id='confm-line'>确认密码:
            <input type="password" name="confirm" v-model='confirm'></span>
            <br/>
            <span id='wrongConfirm' class='error'>确认密码错误</span>
        </form>

        <br/>
        <div id='comment-button' @click="register">
            <span>注册</span>
        </div>

        <br/>
        <br/>

    </div>
</template>

<script>


module.exports = {
    name: 'signup-window',
    data () {
        this.account = '';
        this.password = '';
        this.confirm = '';
        return {
            account: this.account,
            password: this.password,
            confirm: this.confirm
        };
        
    },
    methods: {
        closeWin: function () {
            document.getElementById('signup-window').style.display = "none"
            
        },
        register: function  (argument) {
            if (this.account.length < 5) {
                document.getElementById('invalidName').style.opacity = 1;
            } else {
                document.getElementById('invalidName').style.opacity = 0;
            }
            if (this.password.length < 6 || this.password.length > 20) {
                document.getElementById('invalidPsw').style.opacity = 1;
            } else {
                document.getElementById('invalidPsw').style.opacity = 0;

            }
            if (this.confirm != this.password) {
                document.getElementById('wrongConfirm').style.opacity = 1;
            } else {
                document.getElementById('wrongConfirm').style.opacity = 0;
            }

            // invalid account
            
        }
    },
    components: {
        
    }
}
</script>

<style lang="less" scoped>

#signup-window {
    z-index: 2;
    background:#ffffff;
    box-shadow:0 0 20px 0 rgba(0,0,0,0.50);
    width: 500px;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -250px;
    margin-top: -200px;
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
    p {
        font-family:HoboStd;
        font-size:36px;
        color:#ffffff;
        letter-spacing:-0.72px;
        text-align:center;
        #s {
            color: #f57905;
        }
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

.error {
    opacity: 0;
}

form {
    font-family:PingFangSC-Medium;
    font-size:18px;
    color:#333333;
    letter-spacing:0;
    text-align:center;
    input {
        height: 30px;
        width: 250px;
        margin-left: 15px;
    }
    #confm-line {
        margin-left: -35px;
        font-family:PingFangSC-Medium;
        font-size:18px;
        color:#333333;
        letter-spacing:0;
    }
    span {
        font-family:PingFangSC-Regular;
        font-size:16px;
        color:#ff0000;
        letter-spacing:0;
        text-align:left;
    }

    #invalidName {
        position: relative;
        left: 25px;
    }
    #invalidPsw {
        position: relative;
        left: 50px;
    }
    #wrongConfirm {
        position: relative;
        left: -53px;
    }

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


</style>