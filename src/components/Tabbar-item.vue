<template>
<!-- :class 可以动态绑定style 通过触发值绑定对应键上的css 具体可看浏览器渲染后的源码-->

  <a class="m-tabbar-item" :class="{'is-active':isActive}"  @click="goToRouter">
      <span class="m-tabbar-item-icon" v-show="!isActive"><slot name="icon-normal"></slot></span>
      <span class="m-tabbar-item-icon" v-show="isActive"><slot name="icon-active"></slot></span>
      <span class="m-tabbar-item-text"><slot></slot></span>
  </a>
</template>
<script>
export default {
    props:{
        id:{
            type:String
        },
        isRouter:{
            type:Boolean,
            default:false
        }
    },
    computed:{
        isActive(){
            if(this.$parent.value===this.id){
                return true;
            }
        }
    },
    methods:{
        goToRouter(){
            this.$parent.$emit('input',this.id)
            //判断跳转
            if(this.isRouter){
                //根据id跳转
                this.$router.push(this.id)
            }
        }
    }
}
</script>

<style lang="less">
@import '../less/var.less';
.m-tabbar-item{
    flex: 1;
    text-align: center;
    .m-tabbar-item-icon{
        display: block;
        padding-top: 2px;
            img{
                width: 28px;
                height: 28px;
            }
        }
    .m-tabbar-item-text{
        display: block;
        font-size: 10px;
        color: #949494;
        margin-top:-5px; 

    }
} 
&.is-active{
    .m-tabbar-item-text{
       color:@tabbarActiveColor;
     }
}
</style>
