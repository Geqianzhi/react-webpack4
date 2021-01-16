import React,{useState,useEffect} from 'react';
import {Button} from 'antd';
import {list} from '../../../../Mobx/data';
import {getTreeData} from '../../../../untils/index'
import {post} from '../../../../untils/axios'
export default function useStateApi() {
    const [btnText,setBtnText] = useState(1)
    
    const handelClick = () =>{
        setBtnText(btnText + 1);
        let arr = getTree();
        postFn('1')
    }
    const postFn = (id) => {
        post('app/emp',{id}).then(data =>{
            console.log(data)
        })
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
