import React from 'react'
import {
    WechatOutlined,
    WeiboSquareOutlined,
} from '@ant-design/icons';
import './Cub.less';
export default function CubicBezier() {
    return (
        <div className="container">            
                <div className="item">
                    <WechatOutlined style={{fontSize:'80px'}} />
                    <span className="title">微信</span>
                </div>
                <div className="item">
                    <WeiboSquareOutlined style={{fontSize:'80px'}} />
                    <span className="title">微博</span>
                </div>
        </div>
    )
}
