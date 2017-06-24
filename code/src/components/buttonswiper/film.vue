<template>
    <div id="Actors">
        <swiper :options="swiperOption">
            <swiper-slide>

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
    

    
</style>