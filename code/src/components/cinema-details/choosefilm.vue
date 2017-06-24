<template>
    <div id="total">
        <span id="choosefilm">选择影片</span>
    <swiper :options="swiperOption">
        <swiper-slide id="rec1">
            <div class="film" @click='onClick'>
            	<img :src='poster1'/>
            </div>
            <div class="film" @click='onClick'>
            	<img :src='poster2'/>
            </div>
            <div class="film" @click='onClick'>
            	<img :src='poster3'/>
            </div>

            <div class="film" @click='onClick'>
            	<img :src='poster4'/>
            </div>
        </swiper-slide>
        <swiper-slide id="rec2">
            <div class="film" @click='onClick'>
            	<img :src='poster5'/>
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
            swiperSlide,
        },
        data() {
            return {
                swiperOption: {
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    paginationClickable: true,
                    spaceBetween: 30,
                    centeredSlides: true,
                    loop:true,
                    autoplay:0,
                },
                poster1:require('../../assets/images/cinema/timg.jpg'),
                poster2:require('../../assets/images/cinema/timg.jpg'),
                poster3:require('../../assets/images/cinema/timg.jpg'),
                poster4:require('../../assets/images/cinema/timg.jpg'),
                poster5:require('../../assets/images/cinema/timg.jpg'),
            }
        },
        methods: {
            onClick: function(event) {
                var temp = document.getElementsByTagName("IMG");
                for (var i = 0; i < temp.length; i++) {
                    temp[i].style.borderColor="#000000";
                }

                if (event.target.tagName=="IMG") {
                    event.target.style.borderColor = "#f57905";
                }
                
            }
        	
        }
    }
</script>

<style lang="less" scoped>
    #total {
        width:1100px;
        text-align:center;
        margin:0 auto;
        #choosefilm {
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
        //margin-left:-20px;
        width:981px;
        .film {
            width:227px;
            height:303px;
            display:inline-block;
            line-height:303px;
            position:relative;
            left:0px;
            img {
                width:227px;
                height:303px;
                border:2px solid #000000;

            }
        }
    }
    .swiper-button-prev {
        //transform:rotate(-180deg);
        background-color:rgba(153,153,153,0.50);
        width:30px;
        height:200px;
        position:absolute;
        left:15px;
    }
    .swiper-button-next {
        background-color:#999999;
        width:30px;
        height:200px;
    }
</style>
