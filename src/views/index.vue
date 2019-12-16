<template>
    <div id="outer" :style="bgImg">
        <div><img class="img" src="/img/bgsmall.png" alt=""></div>
        <div class="left">
            <div class="wechat">
                    <div>微信扫码参加</div>
                    <div>扫一扫</div>
                    <div>zhangkayi</div>
            </div>
            <div class="code"></div>
        </div>
        
    </div>
</template>
<script>
import defaultImg from "../../public/img/bg.png"
import {getIndex} from "../assets/js/apis/index.js"//这边只能直接解构
export default {
    data(){
        return {
           bgImg:{
               height:100+"vh",
               backgroundImage: `url(${defaultImg})`
           }
        }
    },
    methods:{
        login(){

        }
    },
    created(){
        
        console.log(this.$route)
        getIndex().then(
            result=>{
                console.log(result)
            }
        )
    }

}
</script>
<style scoped>
    #outer{background:#0A1656;margin:auto;background-size: 100% 100%;display: flex;justify-content: center;align-items: center}
    .img{height:350;width:509.1px;}
    .left{margin-left:10px;}
    .wechat{
        width:230px;height:60px;background: rgb(118, 223, 118);
        border-radius:2%;color: white;text-align: center;line-height:60px;font-size:20px;
        }
    .code{width:230px;height: 230px;background: rgba(235, 241, 235,.5);margin-top:10px;}
</style>