import { hot } from 'react-hot-loader/root';
import react from 'react';
import BasicRoute from './view/layout/BasicRoute';
import './App.less';
import store from './Mobx';
import {Provider} from 'mobx-react'
class App extends react.Component {
    render() {
        return (                    
              <div className="App">               
                <Provider store={store}>
                    <BasicRoute/>
                </Provider>                
              </div>         
        )
    };
   
  
}

export default hot(App);
