import React,{useState,useEffect} from 'react';
import {Button} from 'antd';
import {list} from '../../../../Mobx/data';
import {getTreeData} from '../../../../untils/index'
export default function useStateApi() {
    const [btnText,setBtnText] = useState(1)
    
    const handelClick = () =>{
        setBtnText(btnText + 1);
        let arr = getTree();
        console.log(arr)
    }
    useEffect(()=>{
        
    })
    function getTree(){
        return getTreeData(list,'001000000000000','partyOrgParentId','partyOrgId','childList','key')
    }
    return (
        <div>
            <Button type="primary" size="large" onClick={()=>handelClick()}>{btnText}</Button>
        </div>
    )
}
