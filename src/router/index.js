import React from 'react';
import {
    AlertOutlined,
    WindowsOutlined
} from '@ant-design/icons';
export const childernRoutes = [
    {
        path:'/css3',
        name:'css3',
        icon:<WindowsOutlined />,
        childrens:[
            {
                path:'/css3/CubicBezier',
                icon:<AlertOutlined />,
                name:'CubicBezier(贝塞尔曲线)',
                component: React.lazy(() => import ('../view/page/css3/Bezier/CubicBezier')),
            },
            {
                path:'/css3/Flex',
                icon:<AlertOutlined />,
                name:'Flex(弹性布局)',
                component: React.lazy(() => import ('../view/page/css3/Flex/Flex.js')),
            },
            {
                path:'/css3/ClipPath',
                icon:<AlertOutlined />,
                name:'ClipPath(裁剪)',
                component: React.lazy(() => import ('../view/page/css3/ClipPath/ClipPath.js')),
            },
            {
                path:'/css3/Trilateral',
                icon:<AlertOutlined />,
                name:'Trilateral(三角形)',
                component: React.lazy(() => import ('../view/page/css3/Trilateral/Trilateral')),
            }
        ]
    },
    {
        path:'/ReactHook',
        name:'ReactHook',
        icon:<WindowsOutlined />,
        childrens:[
            {
                path:'/ReactHook/useState',
                icon:<AlertOutlined />,
                name:'useState',
                component: React.lazy(() => import ('../view/page/ReactHook/useState/useStateApi')),
            }
        ]
    },
    {
        path:'/JavaScript',
        name:'JavaScript',
        icon:<WindowsOutlined />,
        childrens:[
            {
                path:'/ReactHook/function',
                icon:<AlertOutlined />,
                name:'函数',
                component: React.lazy(() => import ('../view/page/JavaScript/Function/fun')),
            }
        ]
    },
]

const routes = [
    {
        path:'/',
        component: React.lazy(() => import ('../view/layout')),
        childrens:childernRoutes
    }
]

export default routes;