import React,{Suspense} from 'react'
import {Route,BrowserRouter} from 'react-router-dom'
import Layout from './index'
export default function BasicRoute() {
    return (              
        <BrowserRouter>
            <Suspense fallback={<div>loading</div>}>
                <Route path="/" component={Layout}></Route>
            </Suspense>
        </BrowserRouter>        
       
    )
}
