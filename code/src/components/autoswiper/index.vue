<template>

    <swiper :options="swiperOption">
        <swiper-slide>
            <div>
            <img src='../../assets/images/index/speed.png'>
            <div  class="wordspan">
            <ul>
            <li>正在热映</li>
            <li>速度与激情8</li>
            <li>136分钟-动作/犯罪-广州121家影院上映2805场</li>
            <li>“</li>
            <li>硬汉豪车再纵横，依旧燃爆荷尔蒙</li></ul></div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div>
            <img src='../../assets/images/index/speed.png'>
            <div class="wordspan">
            <ul>
            <li>正在热映</li>
            <li>速度与激情8</li>
            <li>136分钟-动作/犯罪-广州121家影院上映2805场</li>
            <li>“</li>
            <li>硬汉豪车再纵横，依旧燃爆荷尔蒙</li></ul></div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div>
            <img src='../../assets/images/index/speed.png'>
            <div class="wordspan">
            <ul>
            <li>正在热映</li>
            <li>速度与激情8</li>
            <li>136分钟-动作/犯罪-广州121家影院上映2805场</li>
            <li>“</li>
            <li>硬汉豪车再纵横，依旧燃爆荷尔蒙</li></ul></div>
            </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
 
    export default {
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    paginationClickable: true,
                    spaceBetween: 30,
                    centeredSlides: true,
                    autoplay: 2500,
                    autoplayDisableOnInteraction: false,
                    loop:true
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    swiper {
        text-align:center;
        position:absulute;
        background:#d8d8d8;
    }
    img {
        position:relative;
        width:100%;
        height:400px;
    }
    ul {
        position:absolute;
        color:#ffffff;
        left:14%;
        top:25%;
    }
    li:nth-child(1) {
        margin:10px;
        font-family:PingFangSC-Regular;
        font-size:18px;
        letter-spacing:0;
        line-height:42px;
        background:rgba(250,122,3,0.98);
        width:102px;
        height:42px;
        text-align:center;
    }
    li:nth-child(2) {
        margin:10px;
        font-family:PingFangSC-Medium;
        font-size:36px;
        letter-spacing:0;
        line-height:48px;
        text-shadow:0 2px 4px rgba(0,0,0,0.50);
        text-align:left;
    }
    li:nth-child(3) {
        margin:10px;
        top:211px;
        font-family:PingFangSC-Medium;
        font-size:18px;
        letter-spacing:0;
        text-shadow:0 2px 4px rgba(0,0,0,0.50);
        text-align:left;
    }
    li:nth-child(4) {
        margin:20px;
        font-family:PingFangSC-Medium;
        font-size:80px;
        color:#b96719;
        letter-spacing:0;
        line-height:34px;
        width:64px;
        height:68px;
        text-align:center;
        position:absolute;
        top:150px;
        left:-35px;
    }
    li:nth-child(5) {
        margin:0px;
        top:256px;
        font-family:PingFangSC-Medium;
        font-size:28px;
        letter-spacing:0;
        line-height:36px;
        text-shadow:0 2px 4px rgba(0,0,0,0.50);
        text-align:left;
        position:absolute;
        left:50px;
        top:160px;
        width:500px;
    }
    .swiper-pagination {
        left-margin:auto;
        right-margin:auto;
        position:center;
    }
</style>
