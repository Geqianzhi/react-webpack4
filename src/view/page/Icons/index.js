import React from 'react'
import SvgIcon from '../../../components/SvgIcon/SvgIcon';
import {Tooltip} from 'antd'
import icons from './requireIcons';
export default function Icons() {
    const text = e => `<SvgIcon iconClass="${e}" />`;

    return (
        <div style={{display:'flex',flexWrap:'wrap'}}>
            {
                icons.map((e,index) =>{
                    return(
                        <Tooltip  key={index} placement="top" title={()=>text(e)}>
                            <div style={{width:'100px',height:'100px',margin:'32px'}} >
                                <SvgIcon iconClass={e} ></SvgIcon>
                            </div>
                        </Tooltip>
                    )
                })
            }
        </div>
    )
}
