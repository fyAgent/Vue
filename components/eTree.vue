// 无限树状图组件
<template>
    <!-- <ul id="eTree">
        <li v-for="(val,idx) in options" :key="idx">
            <div class="title">
                {{val.title}}
            </div>
            <ul>
                <li v-for="(val,idx) in val.options" :key="idx">
                    <div class="title">
                       {{ val.title}}
                    </div>
                    <ul>
                        <li v-for="(val,idx) in val.options" :key="idx" >
                            <div class="title">
                                {{val.title}}
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul> -->
    <div>
        <ul id="eTree">
            <li  v-for="(val,idx) in options" :key="idx">
                <router-link exact tag="div" :to="val.path" class="title pointer">
                    {{val.title}}
                </router-link>
                <e-tree  v-if="tree[idx]!=''" :options="tree[idx]"></e-tree>
            </li>
        </ul>
    </div>
</template>

<script>

//ePageRightBox
export default {
  name: "eTree",
  data: function() {
    return {
      // tree:[
        //     {
        //         title:"首页",
        //     },
        //     {
        //         title:"资讯",
        //         options:[
        //             {
        //                 title:"资讯详情",
        //             }
        //         ]
        //     },
        //     {
        //         title:"理财",
        //         options:[
        //             {
        //                 title:"理财详情",
        //                 options:[
        //                     {title:"理财详情1"}
        //                 ]
        //             }
        //         ]
        //     },
        //     {
        //         title:"其他",
        //         options:[]
        //     }
      // ]
     
    };
  },
  computed:{
      tree:function(){
         var op=this.options;
           
            var arr=[];
            for (let i in op){
                if(op[i].options){
                   arr.push(op[i].options)
                }else{
                    arr.push('')
                }
            }
            return arr
          
      },
      
  },
  props: {
    options: {
      type: Array
    }
  },
  created:function(){
           

  }
};
</script>


<style scoped lang="scss">

ul {
  padding-left: calc(23rem/18.75);
  li:nth-of-type(1)::before {
    top: calc(23rem/18.75);
  }
  li:nth-last-of-type(1)::before {
    top: calc(-20rem/18.75);
  }
}
li {
  line-height: calc(40rem/18.75);
  position: relative;
}
li::before {
  content: "";
  border-left: 1px dashed #3565a3;
  position: absolute;
  height: 100%;
  width: 1px;
  left: calc(-23rem/18.75);
  top: calc(-10rem/18.75);
}
li::after {
  content: "";
  position: absolute;
  left: calc(-23rem/18.75);
  width: calc(23rem/18.75);
  top: calc(20rem/18.75);
  border-top: 1px dashed #3565a3;
  height: 1px;
}
li ul {
  padding-left: calc(46rem/18.75) !important;
}
li ul li::before {
//   height: calc(38rem/18.75);
  top: calc(-5rem/18.75) !important;
  left: calc(-34rem/18.75) !important;
}
li ul li::after {
  width: calc(26rem/18.75) !important;
  left: calc(-30rem/18.75);
}
li ul li:nth-last-of-type(1)::before {
  top: calc(-21rem/18.75) !important;
  height:calc(40rem/18.75) !important;
}
.title {
  color: #3565a3;
}
.router-link-active{
    color:#333;
    position:relative;
    height:calc(40rem/18.75) !important;
    line-height:calc(40rem/18.75) !important;
}
.router-link-active::after{
   font-family: "iconfont" !important;
    font-size: 13px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    content:"\E620";
    color:#666;
   
}
</style>
