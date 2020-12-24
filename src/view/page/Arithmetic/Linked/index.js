import React,{useState} from 'react'
import { Alert,Button,List } from 'antd';
export default function Linked() {
    const [list, setList] = useState([1,2,3,4,5]);
    const pairs = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ]);
    function isValid(s) {
        const n = s.length;
        if (n % 2 === 1) {
            return false;
        }
        const pairs = new Map([
            [')', '('],
            [']', '['],
            ['}', '{']
        ]);
        const stk = [];
        s.split('').forEach(ch => {
            if (pairs.has(ch)) {
                if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
                    return false;
                }
                stk.pop();
            } 
            else {
                stk.push(ch);
            }
        });
        console.log(stk)
        return !stk.length;
    };
    
    return (
        <div>
            <Alert message="反转链表" type="info" />
            <List
                size="large"
                bordered
                dataSource={list}
                renderItem={item => <List.Item>{item}</List.Item>}
                />
            <Button type="primary" onClick={()=>isValid('()))))')}> onClick</Button>
        </div>
    )
}
