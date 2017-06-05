<template>
    <div id='footer-bar'>
        <div class='footer-bar-wrapper'>
            <div class='footer-bar-container'>
                <div class='logo-field'>
                    <div class='logo'></div>
                </div>
                <div class='word-field'>
                    <div class='slogan left-part'>
                        跟随<span class='brown'>银屏，</span>开启心的<span class='brown'>旅行</span>
                    </div>
                    <div class='about right-part'>
                        <p class='left-part'>网站首页</p>
                        <p class='left-part'>联系我们</p>
                        <p class='left-part'>版权所有 Proto</p>
                        <div class='clear'></div>
                    </div>
                    <div class='clear'></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


module.exports = {
    name: 'footer-bar'
}
</script>

<style lang="less" scoped>

#footer-bar {
    width: 100%;
    background-color: #393027;
}

.footer-bar-wrapper {
    width: 980px;
    margin: 0 auto;
}

.footer-bar-container {
    padding: 30px 0 40px 0;
}

.logo-field {
    .logo {
        width: 137px;
        height: 19px;
        background-size: 137px 19px;
        background-image: url("../../assets/images/index/logo.png");
    }
}

.word-field {
    margin-top: 25px;
    .slogan {
        color: #E5E5E5;
        .brown {
            color: #F57905;
        }
    }

    .about {
        color: #D0D0D0;
        p {
            font-size: 12px;
            margin-left: 20px;
        }
    }
}

</style>
