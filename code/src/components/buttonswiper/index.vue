<template>
    <div id="comeon">
    <swiper :options="swiperOption">
        <swiper-slide>

                <div class="memory">
                    <div  class="poster">
                        <img src='../../assets/images/index/smallmemory.png'>
                        <ul>
                            <li>4月28日上映</li>
                            <li>记忆大师</li>
                            <li>导演：陈正道</li>
                            <li>主演：黄渤，徐静蕾，段奕宏，杨子珊，许玮甯</li>
                            <li>90分钟|悬疑、剧情、犯罪</li>
                        </ul>
                        </div>
                </div>

                <div class="save">
                    <div  class="poster">
                    <img src='../../assets/images/index/smallsave.png'>
                    <ul>
                    <li>4月28日上映</li>
                    <li>春娇救志明</li>
                    <li>导演：彭浩翔</li>
                    <li>主演：余文乐，杨千嬅，蒋梦婕，曾国祥，秦沛</li>
                    <li>117分钟|爱情、剧情</li></ul></div>
                </div>

                <div class="bomb">
                    <div  class="poster">
                    <img src='../../assets/images/index/smallbomb.png'>
                    <ul>
                    <li>4月28日上映</li>
                    <li>拆弹专家</li>
                    <li>导演：邱礼涛</li>
                    <li>主演：刘德华，姜武，宋佳</li>
                    <li>120分钟|动作、悬疑、犯罪</li></ul></div>
                </div>
        </swiper-slide>
        <swiper-slide><img src='../../assets/images/index/hot_one.png'></swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    </div>
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
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    paginationClickable: true,
                    spaceBetween: 30,
                    centeredSlides: true,
                    loop:true
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    #comeon {
        border: 1px solid #000000;
        width: 100%;
        height:361px;
    }

    .poster {
        height:361px;
        background:rgba(0,0,0,0.50);
        background-size: 100% 361px;
        color:#ffffff;
        margin:0px;
    }
    .poster img {
        float:left;
        margin:10%;
    }
    .poster ul {
        float: left;
        margin:0px;
    }
    .memory {
        background-image: url("../../assets/images/index/memory.png");
        background-size: 100% 100%;
        display: inline-block;
        margin:0px;
        width:33.33%;
        float:left;
        height:361px;
    }
    .save {
        background:rgba(0,0,0,0.50) top;
        background-image: url("../../assets/images/index/save.png");
        background-size: 100% 100%;
        display: inline-block;
        margin:0px;
        width:33.33%;
        float:left;
        height:361px;
    }
    .bomb {
        background:rgba(0,0,0,0.50) top;
        background-image: url("../../assets/images/index/bomb.png");
        background-size: 100% 100%;
        display: inline-block;
        margin:0px;
        width:33.33%;
        float:left;
        height:361px;
    }
    li:nth-child(1) {
        margin-top:67px;
        margin-bottom:15px;
        font-family:PingFangSC-Medium;
        font-size:20px;
        color:#f57905;
        letter-spacing:0;
        text-shadow:0 2px 4px rgba(0,0,0,0.50);
        text-align:left;
    }
    li:nth-child(2) {
        margin-bottom:15px;
        font-family:PingFangSC-Medium;
        font-size:22px;
        color:#ffffff;
        letter-spacing:0;
        text-shadow:0 2px 4px rgba(0,0,0,0.50);
        text-align:left;
    }
    li:nth-child(3), li:nth-child(4), li:nth-child(5) {
        margin-top:0px;
        font-family:PingFangSC-Medium;
        font-size:14px;
        color:#ffffff;
        letter-spacing:0;
        line-height:48px;
        text-shadow:0 2px 4px rgba(0,0,0,0.50);
        text-align:left;
    }
</style>
