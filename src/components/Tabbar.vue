<template>
    <div class="m-tabbar"><slot></slot></div>
</template>
<style lang="less">
.m-tabbar{
    position: fixed;
    display: flex;
    flex-direction: row;
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
export default {
    props: ['value'],
    computed: {
      value() {
        return this.$route.matched[0].name
      }
    }
}
</script>

