<template>
    <div class="scrollWrapper" ref="wrapper" :style="`height:${height}`">
        
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
// better-scroll组件
import BScroll from 'better-scroll';
export default {
    props:{
        bounce:{//默认关闭弹性
            type:Boolean,
            default:()=>{
                return false
            }
        },
        height:{//默认高度100%
            type:String,
            default:()=>{
                return "100%"
            }
        }
    },
     mounted:function(){
        var that=this;
           this.$nextTick(function (params) {
                setTimeout(() => {
                    that.init()
                }, 20);

           })
     },
     methods:{
         init:function() {
            
              var that=this;
               if(this.$refs.wrapper){
                //    console.log(111)
                   this.scroll= new BScroll(that.$refs.wrapper,{
                    bounce:this.bounce,    
                })
               }else{
                  
               }
                // this.scroll.refresh();
         }
     }
}
</script>
<style  >
    .scrollWrapper{
        overflow: hidden;
    }
    .content{
        width: 100%;
    }
</style>

