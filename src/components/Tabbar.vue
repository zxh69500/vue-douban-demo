<template>
    <div class="m-tabbar"><slot></slot></div>
</template>
<style lang="less">
.m-tabbar{
    position: fixed;
    display: flex;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    overflow: hidden;
    height: 50px;
    background: #fff;
    border-top: 1px solid #e4e4e4;
}
</style>
<script>
import mTabbarItem from './Tabbar-item'
export default {
    props:['value']
}
</script>

