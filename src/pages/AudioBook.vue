<template>
    <m-header title="书影音" :fixed="true">
        <a href="javascript:;" slot="right">
                <img class="m-icon-img margin-right-10" src="../assets/images/ic_actionbar_search_icon.png" alt="">
            </a>
            <a href="javascript:;" slot="right">
                <img class="m-icon-img" src="../assets/images/ic_chat_green.png" alt="">
            </a>
    </m-header>
</template>
<script>
import mHeader from '../components/Header'
export default {
    name:'audiobook',
    components:{
        mHeader
    }
}
</script>
