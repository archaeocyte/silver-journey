<template>
    <div id='nav-bar'>
        <div class='nav-bar-wrapper'>
            <div class='left-part logo-field'>
                <div class='logo'></div>
            </div>
            <div class='right-part user-field'>
                <img src='../../assets/images/login/portrait.png' />
                <span>电影小天王</span>
                <input class='login' type='button' value='登录' />
                <input class='register' type='button' value='注册' />
            </div>
            
        </div>
    </div>
</template>

<script>


module.exports = {
    name: 'nav-bar'
}
</script>

<style lang="less" scoped>

#nav-bar {
    width: 100%;
    height: 60px;
    background-color: #333333;
    color: #fff;
}

.nav-bar-wrapper {
    width: 980px;
    margin: 0 auto;
    height: 100%;
}

.logo-field {
    margin-top: 20px;
    .logo {
        width: 137px;
        height: 19px;
        background-size: 137px 19px;
        background-image: url("../../assets/images/index/logo.png");
    }
}

.user-field {
    margin-top: 19px;
}


input[type="button"] {
    width: 32px;
    height: 22px;
    line-height: 22px;
    font-size: 16px;
    font-family: PingFangSC-Regular;
    background-color: #333333;
    color: #ffffff;
    letter-spacing:-0.32px;
    text-align:left;
    border: none;
    position: relative;
    top: -10px;
}

.register {
    margin-left: 25px;
}

span {
    position: relative;
    left: 70px;
    top: -10px;
    font-family:PingFangSC-Regular;
    font-size:16px;
    color:#e5e5e5;
    letter-spacing:-0.32px;
    text-align:left;
    cursor: pointer;
    opacity: 0;
}

img {
    position: relative;
    left: 50px;
    opacity: 0;
}

</style>
