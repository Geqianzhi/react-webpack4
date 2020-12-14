import { hot } from 'react-hot-loader/root';
import react from 'react';
import BasicRoute from './view/layout/BasicRoute';
import { ConfigProvider} from 'antd';
import './App.less';
import store from './Mobx';
import {Provider} from 'mobx-react'
import zhCN from 'antd/lib/locale/zh_CN';
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn';
dayjs.locale("zh-cn")
class App extends react.Component {
    render() {
        return ( 
              <div className="App">               
                <Provider store={store}>
                    <ConfigProvider locale={zhCN}>
                        <BasicRoute/>
                    </ConfigProvider> 
                </Provider>                
              </div>                          
        )
    };
   
  
}

export default hot(App);
