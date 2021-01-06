import React from 'react'
import { DatePicker, Space } from 'antd';
import SvgIcon from '../../../../components/SvgIcon/SvgIcon'
import './Flex.less'
export default function Flex(props) {
    function onChange(date, dateString) {
        console.log(date, dateString);
    }
    return (
        <div className="flex">   
            <ul>
                <li>
                    <span className="item"></span>
                    <span className="item"></span>
                    <span className="item"></span>
                    <span className="item"></span>
                    <span className="item"></span>
                </li>
               
            </ul>
            <Space direction="vertical">
                <DatePicker onChange={onChange} />
                <DatePicker onChange={onChange} picker="week" />
                <DatePicker onChange={onChange} picker="month" />
                <DatePicker onChange={onChange} picker="quarter" />
                <DatePicker onChange={onChange} picker="year" />
            </Space>
            <div className="svg"><SvgIcon iconClass="404"></SvgIcon></div>
        </div>
    )
}
