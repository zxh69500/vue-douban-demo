<template>
    <div>
        <m-header title="豆瓣app" :bg="true">
            <a href="javascript:;" slot="right">分享</a>
        </m-header>
        <div class="page-content">
            <m-swipe swipeid="swipe01" :autoplay=true paginationDirection="right" >
                <div class="swiper-slide" slot="swiper-con"><img src="../assets/images/banner/01.jpg" alt=""></div>
                <div class="swiper-slide" slot="swiper-con"><img src="../assets/images/banner/02.jpg" alt=""></div>
                <div class="swiper-slide" slot="swiper-con"><img src="../assets/images/banner/03.jpg" alt=""></div>
            </m-swipe>
            
        </div>
    </div>
</template>
<style lang="less">


</style>

<script>
import mHeader from '../components/Header'
import mSwipe from '../components/Swiper'

export default {
    name:'index',
    components:{
        mHeader,
        mSwipe
    }
   
}
</script>
