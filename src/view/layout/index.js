import React,{useState,memo,Suspense} from 'react';
import {Layout, Menu, Breadcrumb,Spin} from 'antd';
import {childernRoutes} from '../../router';
import { NavLink,Route,Switch as Sith } from "react-router-dom";
import {observer,inject} from 'mobx-react';
import './layout.less';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
    
 
} from '@ant-design/icons';
const {Header,Sider,Content} = Layout;
const { SubMenu } = Menu;

function LayoutPage(props) {
    const [collapsed,setCollapsed] = useState(false);
    const [keys,setKeys] = useState('');
    const setColl = (val)=>{
        val ? setCollapsed(false):setCollapsed(true)
    };
    const selectRoute = (item) =>{
        const {store} = props;
        store.changeRoutes(item);
    }

    const loading = () =>{
        return (
            <Spin tip="Loading..." />
        )
    }
    return (
        <>
            <Layout className="layout">
                <Sider collapsible collapsed={collapsed}  className="site-layout-background"  width="240" onCollapse={() => setColl(collapsed)}>
                    <div className="logo" />
                    <Menu
                        mode="inline"
                        theme="dark"
                        onClick={(e) =>setKeys(e.key)}
                        selectedKeys={[keys]}
                    >   

                       {
                           childernRoutes.map((e) => {
                               if(e.hasOwnProperty("childrens")){
                                    const childrens = e.childrens;
                                    let items = childrens.map((item,i)=>{
                                        return (                                           
                                            <Menu.Item key={item.path} icon={item.icon}>
                                                <NavLink to={item.path} onClick={()=>selectRoute(item)}>{item.name}</NavLink>
                                            </Menu.Item>                                           
                                        )
                                    })   
                                    return (                                        
                                        <SubMenu key={e.path} icon={e.icon} title={e.name}>                                                                                                                                           
                                            {items}
                                        </SubMenu>
                                    )
                               }else{
                                    return (
                                        <Menu.Item key={e.path} icon={e.icon}>
                                            <NavLink to={e.path} onClick={()=>selectRoute(e)}>{e.name}</NavLink>
                                        </Menu.Item>
                                    )
                               }
                           })
                       }
                       
                       
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="header">
                        <div className="collapsed-icon" onClick={() => setColl(collapsed)}>
                            {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/> }
                        </div>
                        <Breadcrumb style={{ marginLeft: '16px' }}>
                            {
                                props.store.activeRoutes.map((e,index)=>{
                                    return (
                                        <Breadcrumb.Item key={index} onClick={()=>setKeys(e.path)}>
                                            <NavLink to={e.path} >{e.name}</NavLink>
                                        </Breadcrumb.Item>
                                    )
                                })
                            }                                                       
                        </Breadcrumb>
                    </Header>
                    <Content >                    
                        <Suspense fallback={loading()}>
                               <Sith>
                                    {
                                        childernRoutes.map((e,index) => {
                                            if(e.hasOwnProperty("childrens")){
                                                    const childrens = e.childrens;
                                                    let list = childrens.map((item,i)=>{
                                                        return (
                                                            <Route key={`${index}-${i}`} path={item.path} component={item.component}></Route>
                                                        )
                                                    })   
                                                    return list;
                                            }else{
                                                    return (
                                                        <Route key={index} path={e.path} component={e.component}></Route>
                                                    )
                                            }
                                        })
                                    }
                               </Sith>
                        </Suspense>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}
export default memo(inject('store')(observer(LayoutPage)));