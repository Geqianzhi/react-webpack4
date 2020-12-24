import React,{useState,useEffect} from 'react'
import { Button } from 'antd'
export default function fun() {
    const [result,setResult] = useState(0)
    function add () {
        const numberList = Array.from(arguments);
      
        // 进一步收集剩余参数
        const calculate = function() {
          numberList.push(...arguments);
          return calculate;
        }
      
        // 利用 toString 隐式转换，最后执行时进行转换
        calculate.toString = function() {
          return numberList.reduce((a, b) => a + b, 0);
        }
      
        return calculate;
    }
    function addHandelClick(){
        let value = add(1,2,3,4)(10);
        console.log(value)
        setResult(value)
    }
    useEffect(()=>{
       
    })
    return (
        <div>
            <Button type="primary" onClick={()=>addHandelClick()}>点击click</Button>
            <p>{result}</p>
        </div>
    )
}
