<template>
    <div id='nav-bar'>
        <div class='nav-bar-wrapper'>
            <div class='left-part logo-field'>
                <div class='logo'></div>
            </div>
            <div class='right-part user-field'>
                <p>用户名</p>
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
        background-image: url("../../assets/images/logo.png");
    }
}

.user-field {
    line-height: 60px;
}


</style>
