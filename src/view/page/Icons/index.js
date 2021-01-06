import React from 'react'
import SvgIcon from '../../../components/SvgIcon/SvgIcon';
import icons from './requireIcons';
console.log(icons)
export default function Icons() {
    return (
        <div style={{display:'flex',flexWrap:'wrap'}}>
            {
                icons.map((e,index) =>{
                    return(
                        <div key={index} style={{width:'100px',height:'100px',padding:'16px'}} >
                            <SvgIcon iconClass={e} ></SvgIcon>
                        </div>
                    )
                })
            }
        </div>
    )
}
