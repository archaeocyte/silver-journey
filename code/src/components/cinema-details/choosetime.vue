<template>
    <div id="total">
        <span id="choosetime">选择时间</span>

    <swiper :options="swiperOption">
        <swiper-slide id="rec1">
            <div class="time" @click='onclick'>
            	<span>4月24日</span>
            	<span>星期一</span>
            </div>
            <div class="time" @click='onclick'>
            	<span>4月25日</span>
            	<span>星期二</span>
            </div>
            <div class="time" @click='onclick'>
            	<span>4月26日</span>
            	<span>星期三</span>
            </div>
            <div class="time" @click='onclick'>
            	<span>4月27日</span>
            	<span>星期四</span>
            </div>
            <div class="time" @click='onclick'>
            	<span>4月28日</span>
            	<span>星期五</span>
            </div>
        </swiper-slide>
        <swiper-slide id="rec2">
            <div class="time" @click='onclick'>
            	<span>4月28日</span>
            	<span>星期五</span>
            </div>
        </swiper-slide>
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
                    spaceBetween: 30,
                    centeredSlides: true,
                    loop:true,
                    autoplay:false
                }
            }
        },
        methods: {
        	onclick: function(event) {
                var temp = document.getElementsByClassName("time");
                for (var i = 0; i < temp.length; i++) {
                    temp[i].style.backgroundColor="";
                }
                //alert(event.target.tagName)
                if (event.target.tagName=="DIV")
                    event.target.style.backgroundColor="#f57905";
                
        	}

        }
    };
</script>

<style lang="less" scoped>
    #total {
        width:981px;
        text-align:center;
        margin:0 auto;
        #choosetime {
            font-family:PingFangSC-Medium;
            font-size:24px;
            color:#ffffff;
            letter-spacing:0;
            text-align:left;
            margin-top:44px;
            position:absolute;
            margin-left:-485px;
        }
    }

    #rec1, #rec2 {
        margin-top:122px;
        font-family:PingFangSC-Regular;
        font-size:16px;
        color:#ffffff;
        display: inline-block;
        border-radius:8px;
        .time {
            border:1px solid #f57905;
            width:160px;
            height:80px;
            display:inline-block;
            margin-right:10px;
            line-height:80px;
            background-color:#393027;
            position:relative;
            left:-40px;
            span {
                
            }
        }
    }
    .swiper-button-prev {
        margin-top:95px;

        position:absolute;
        left:900px;
        width:30px;
        height:89px;
        top:20px;
        background-color:rgba(153,153,153,0.30);
    }
    .swiper-button-next {
        width:30px;
        height:89px;
        top:20px;
        margin-top:95px;
        background-color:rgba(153,153,153,0.50);
    }
</style>
