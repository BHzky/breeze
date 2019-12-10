import axios from "axios"
import {baseURL} from "../config.js"//引入基础路径,这边只能直接解构


function getDetails(lid){//这边的函数返回一个Promise对象
    return new Promise(
        function(resolve,reject){
            axios.get(baseURL+"/details",{
                params:{lid}//属性名和变量名一样，就写一个就可以
            }).then(result=>{//这边向接口发送请求
                resolve(result.data)//这边加了data，就是拿到了真实的数据
            })
        }
    )
}
export {
    getDetails
}