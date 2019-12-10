import axios from "axios"
import {baseURL} from "../config.js"//引入基础路径,这边只能直接解构


function getIndex(){//这边的函数返回一个Promise对象
    console.log("进行一次输出")
    return new Promise(
        function(resolve,reject){
            axios.get(baseURL+"/index").then(result=>{//这边向接口发送请求
                resolve(result.data)//这边加了data，就是拿到了真实的数据
            })
        }
    )
}
export {
    getIndex
}